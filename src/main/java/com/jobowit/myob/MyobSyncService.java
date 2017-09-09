package com.jobowit.myob;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.contact.ContactType;
import com.anahata.myob.api.domain.v2.contact.Customer;
import com.anahata.myob.api.domain.v2.contact.CustomerSellingDetails;
import com.anahata.myob.api.domain.v2.contact.Supplier;
import com.anahata.myob.api.domain.v2.contact.SupplierBuyingDetails;
import com.anahata.myob.api.domain.v2.generalledger.TaxCodeLink;
import com.anahata.myob.api.service.CustomerService;
import com.anahata.myob.api.service.SupplierService;
import com.jobowit.domain.MyobSyncDates;
import com.jobowit.domain.Party;
import com.jobowit.domain.eventhandlers.PartyEventHandler;
import com.jobowit.myob.domainservice.ContactService;
import com.jobowit.repositories.PartyRepository;
import com.jobowit.repositories.MyobSyncDatesRepository;

@Component
public class MyobSyncService
{
	@Autowired
	private MyobService m;

	@Autowired
	private PartyRepository partyRepo;

	@Autowired
	private MyobSyncDatesRepository myobSyncDateRepo;

	@Autowired
	private PartyEventHandler partyEventHandler;

	private enum Resource
	{
		Party, Contact, None;
	}

	public void syncAllContacts()
	{
		CustomerService customerService = m.getService(CustomerService.class);
		List<Customer> customers = customerService.findAll();
		for (Customer c : customers)
		{
			Optional<Party> o = partyRepo.findByMyobUid(c.getUID());
			if (o.isPresent())
			{
				Resource toUpdate = syncContacts(o.get(), c);

				if (toUpdate == Resource.Party)
					partyRepo.save(o.get());
				else if (toUpdate == Resource.Contact)
					customerService.update(c);

				setSyncDateTime(o.get(), c);
			}
			else
			{
				Party p = partyRepo.save(createPartyFromMyobContact(c));
				partyEventHandler.handleAfterCreates(p);
				setSyncDateTime(p, c);
			}
		}

		SupplierService supplierService = m.getService(SupplierService.class);
		List<Supplier> suppliers = supplierService.findAll();
		for (Supplier s : suppliers)
		{
			Optional<Party> o = partyRepo.findByMyobUid(s.getUID());
			if (o.isPresent())
			{
				Resource toUpdate = syncContacts(o.get(), s);

				if (toUpdate == Resource.Party)
					partyRepo.save(o.get());
				else if (toUpdate == Resource.Contact)
					supplierService.update(s);

				setSyncDateTime(o.get(), s);
			}
			else
			{
				Party p = partyRepo.save(createPartyFromMyobContact(s));
				partyEventHandler.handleAfterCreates(p);
				setSyncDateTime(p, s);
			}
		}

		List<Party> parties = partyRepo.findTop2();
		ContactService contactService = m.getService(ContactService.class);
		for (Party p : parties)
		{
			Contact c = contactService.find(p.getMyobUid());
			if (c.getUID() == null)
			{
				if (p.getType().equalsIgnoreCase("Customer"))
				{
					Customer customer = customerService.create(createMyobCustomerFromParty(p));
					p.setMyobUid(customer.getUID());
					partyRepo.save(p);
					setSyncDateTime(p, customer);
				}
				else if (p.getType().equalsIgnoreCase("Supplier"))
				{
					Supplier supplier = supplierService.create(createMyobSupplierFromParty(p));
					p.setMyobUid(supplier.getUID());
					partyRepo.save(p);
					setSyncDateTime(p, supplier);
				}
			}
		}
	}

	public Resource syncContacts(Party p, Contact c)
	{
		Resource toUpdate = toUpdate(p, c);

		if (toUpdate == Resource.Party)
		{
			p.setIndividual(c.getIsIndividual());
			p.setName(c.getCompanyName() == null || c.getCompanyName().equals("")
					? c.getFirstName() + " " + c.getLastName() : c.getCompanyName());
			p.setPhysicalAddress(createAddress(
					c.getAddresses() != null ? c.getAddresses().size() > 0 ? c.getAddresses().get(0) : null : null));
			p.setMailingAddress(createAddress(
					c.getAddresses() != null ? c.getAddresses().size() > 1 ? c.getAddresses().get(1) : null : null));
		}

		if (toUpdate == Resource.Contact)
		{
			c.setIsIndividual(p.isIndividual());
			if (p.isIndividual())
			{
				c.setCompanyName("");
				if (!p.getName().equals(c.getFirstName() + " " + c.getLastName()))
				{
					c.setFirstName("");
					c.setLastName(p.getName());
				}
			}
			else
			{
				c.setCompanyName(p.getName());
				c.setFirstName("");
				c.setLastName("");
			}
			c.setAddresses(createMyobTypeAddressListFromParty(p));
		}
		return toUpdate;
	}

	private ArrayList<com.anahata.myob.api.domain.v2.contact.Address> createMyobTypeAddressListFromParty(Party p)
	{
		ArrayList<com.anahata.myob.api.domain.v2.contact.Address> addresses = new ArrayList<com.anahata.myob.api.domain.v2.contact.Address>(
				2);
		addresses.add(createMyobTypeAddress(p.getPhysicalAddress()));
		addresses.add(createMyobTypeAddress(p.getMailingAddress()));
		return addresses;
	}

	private com.anahata.myob.api.domain.v2.contact.Address createMyobTypeAddress(
			com.jobowit.domain.Address partyAddress)
	{
		com.anahata.myob.api.domain.v2.contact.Address contactAddress = null;
		if (partyAddress != null)
		{
			contactAddress = new com.anahata.myob.api.domain.v2.contact.Address();
			contactAddress.setStreet(partyAddress.getStreet1());
			contactAddress.setCity(partyAddress.getCity());
			contactAddress.setState(partyAddress.getState());
			contactAddress.setPostCode(partyAddress.getPostCode());
			contactAddress.setCountry(partyAddress.getCountry());
		}
		return contactAddress;
	}

	private com.jobowit.domain.Address createAddress(
			com.anahata.myob.api.domain.v2.contact.Address contactAddress)
	{
		com.jobowit.domain.Address partyAddress = null;
		if (contactAddress != null)
		{
			partyAddress = new com.jobowit.domain.Address();
			partyAddress.setStreet1(contactAddress.getStreet());
			partyAddress.setCity(contactAddress.getCity());
			partyAddress.setState(contactAddress.getState());
			partyAddress.setPostCode(contactAddress.getPostCode());
			partyAddress.setCountry(contactAddress.getCountry());
		}
		return partyAddress;

	}

	public Party createPartyFromMyobContact(Contact c)
	{
		Party p = new Party();
		if (c.getIsIndividual())
		{
			p.setName(c.getFirstName() + " " + c.getLastName());
			p.setIndividual(true);
		}
		else
		{
			p.setName(c.getCompanyName());
			p.setIndividual(false);
		}
		p.setMyobUid(c.getUID());
		if (c instanceof Customer)
			p.setType("Customer");
		else if (c instanceof Supplier)
			p.setType("Supplier");
		p.setPhysicalAddress(createAddress(
				c.getAddresses() != null ? c.getAddresses().size() > 0 ? c.getAddresses().get(0) : null : null));
		p.setMailingAddress(createAddress(
				c.getAddresses() != null ? c.getAddresses().size() > 1 ? c.getAddresses().get(1) : null : null));
		return p;
	}

	public Customer createMyobCustomerFromParty(Party p)
	{
		Customer c = new Customer();

		if (p.isIndividual())
		{
			c.setIsIndividual(true);
			c.setLastName(p.getName());
		}
		else
		{
			c.setIsIndividual(false);
			c.setCompanyName(p.getName());
		}
		c.setType(ContactType.Customer);
		CustomerSellingDetails csd = new CustomerSellingDetails();
		TaxCodeLink taxCode = new TaxCodeLink();
		TaxCodeLink freightCode = new TaxCodeLink();
		taxCode.setUID("3bd2fbea-54d7-4115-8030-b84360048465");
		taxCode.setCode("GST");
		freightCode.setUID("3bd2fbea-54d7-4115-8030-b84360048465");
		freightCode.setCode("GST");
		csd.setTaxCode(taxCode);
		csd.setFreightTaxCode(freightCode);
		c.setSellingDetails(csd);
		c.setAddresses(createMyobTypeAddressListFromParty(p));

		return c;
	}

	public Supplier createMyobSupplierFromParty(Party p)
	{
		Supplier s = new Supplier();

		if (p.isIndividual())
		{
			s.setIsIndividual(true);
			s.setLastName(p.getName());
		}
		else
		{
			s.setIsIndividual(false);
			s.setCompanyName(p.getName());
		}
		s.setType(ContactType.Supplier);
		SupplierBuyingDetails sbd = new SupplierBuyingDetails();
		TaxCodeLink taxCode = new TaxCodeLink();
		TaxCodeLink freightCode = new TaxCodeLink();
		taxCode.setUID("3bd2fbea-54d7-4115-8030-b84360048465");
		taxCode.setCode("GST");
		freightCode.setUID("3bd2fbea-54d7-4115-8030-b84360048465");
		freightCode.setCode("GST");
		sbd.setTaxCode(taxCode);
		sbd.setFreightTaxCode(freightCode);
		s.setBuyingDetails(sbd);
		s.setAddresses(createMyobTypeAddressListFromParty(p));
		return s;
	}

	public Resource toUpdate(Party p, Contact c)
	{
		MyobSyncDates syncdates = myobSyncDateRepo.findOne(p.getPartyId());
		boolean isContactUpdated = c.getLastModified().getTime() > syncdates.getContactLastSyncDtm().getTime();
		boolean isPartyUpdated = p.getUpdatedDtm().getTime() > syncdates.getLastSyncDtm().getTime();

		if (isContactUpdated && isPartyUpdated)
		{
			if (p.getUpdatedDtm().getTime() > c.getLastModified().getTime())
				return Resource.Contact;
			else return Resource.Party;
		}

		if (isPartyUpdated)
			return Resource.Contact;
		if (isContactUpdated)
			return Resource.Party;
		else return Resource.None;
	}

	public void setSyncDateTime(Party p, Contact c)
	{
		MyobSyncDates syncDates = myobSyncDateRepo.findOne(p.getPartyId());
		syncDates.setContactLastSyncDtm(new Timestamp(c.getLastModified().getTime()));
		syncDates.setLastSyncDtm(p.getUpdatedDtm());
		myobSyncDateRepo.save(syncDates);
	}
}
