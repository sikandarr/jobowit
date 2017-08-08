package com.jobowit.myob;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.contact.ContactType;
import com.anahata.myob.api.domain.v2.contact.Customer;
import com.anahata.myob.api.domain.v2.contact.CustomerSellingDetails;
import com.anahata.myob.api.domain.v2.contact.Supplier;
import com.anahata.myob.api.domain.v2.generalledger.TaxCodeLink;
import com.anahata.myob.api.service.CustomerService;
import com.anahata.myob.api.service.SupplierService;
import com.jobowit.domain.Party;
import com.jobowit.myob.service.ContactService;
import com.jobowit.repositories.PartyRepository;

@Component
public class MyobService
{
	@Autowired
	private ContactService contactService;

	@Autowired
	private CustomerService customerService;

	@Autowired
	private SupplierService supplierService;

	@Autowired
	private PartyRepository partyRepo;

	public void syncContacts()
	{
		List<Contact> contacts = contactService.find("Type eq 'Customer' or Type eq 'Supplier'", null, null, null);
		for (Contact c : contacts)
		{
			Optional<Party> o = partyRepo.findByMyobUid(c.getUID());
			if (o.isPresent()) syncContacts(o.get(), c);
			else partyRepo.save(createPartyFromMyobContact(c));
		}

		List<Party> parties = partyRepo.findTop10();
		for (Party p : parties)
		{
			/*
			 * there's no need to sync again; so, we will just create a new Myob
			 * Customer or Supplier if it's not found in myob db
			 */
			System.out.println(p.getName() + "::" + p.getType());
			Contact c = contactService.find(p.getMyobUid());
			System.out.println("C is NULL ::" + c.getUID() == null);
			if (c.getUID() == null)
			{
				if (p.getType().equalsIgnoreCase("Customer"))
				{
					Customer customer = customerService.create(createMyobCustomerFromParty(p));
					System.out.println(customer.getCompanyName() + "::" + customer.getUID());
					p.setMyobUid(customer.getUID());
					partyRepo.save(p);
				}
				else
				{
					Supplier supplier = supplierService.create(createMyobSupplierFromParty(p));
					p.setMyobUid(supplier.getUID());
					partyRepo.save(p);
				}
			}
			else
			{
				System.out.println(
						"Myob Company Name:: " + c.getCompanyName() + " " + c.getFirstName() + " " + c.getLastName());
			}
		}
	}

	public void syncContacts(Party p, Contact c)
	{
		/*
		 * if (c.getLastModified().getTime() > p.getUpdatedDtm().getTime()) { if
		 * (c.getIsIndividual()) { p.setName(c.getFirstName() + " " +
		 * c.getLastName()); p.setIndividual(true); } else {
		 * p.setName(c.getCompanyName()); p.setIndividual(false); }
		 * p.setType(c.getType().name()); } else if (p.getUpdatedDtm().getTime()
		 * > c.getLastModified().getTime()) { if (p.isIndividual()) {
		 * c.setLastName(p.getName()); c.setIsIndividual(true); } else {
		 * c.setCompanyName(p.getName()); c.setIsIndividual(false); } if
		 * (p.getType().equalsIgnoreCase("Customer"))
		 * c.setType(ContactType.Customer); else
		 * c.setType(ContactType.Supplier); }
		 */
		return;
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
		p.setType(c.getType().name());
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
		return c;
	}

	public Supplier createMyobSupplierFromParty(Party p)
	{
		Supplier s = new Supplier();
		if (p.isIndividual()) s.setLastName(p.getName());
		else s.setCompanyName(p.getName());
		s.setType(ContactType.Supplier);
		return s;
	}
}
