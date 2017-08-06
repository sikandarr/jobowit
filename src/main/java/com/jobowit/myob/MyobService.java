package com.jobowit.myob;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.contact.ContactType;
import com.jobowit.domain.Party;
import com.jobowit.myob.service.ContactService;
import com.jobowit.repositories.PartyRepository;

@Component
public class MyobService
{
	@Autowired
	private ContactService contactService;

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
	}

	public void syncContacts(Party p, Contact c)
	{
		return;
	}

	public Party createPartyFromMyobContact(Contact c)
	{
		String name = (c.getCompanyName() == null || c.getCompanyName().equals(""))
				? c.getFirstName() + " " + c.getLastName() : c.getCompanyName();
		String myobUid = c.getUID();
		Party p = new Party();
		p.setName(name);
		p.setMyobUid(myobUid);
		return p;
	}

	public Contact createMyobCustomerFromParty(Party p)
	{
		Contact c = new Contact();
		if (p.isIndividual()) c.setLastName(p.getName());
		else c.setCompanyName(p.getName());
		c.setType(ContactType.Customer);
		return c;
	}
	
	public Contact createMyobSupplierFromParty(Party p)
	{
		Contact c = new Contact();
		if (p.isIndividual()) c.setLastName(p.getName());
		else c.setCompanyName(p.getName());
		c.setType(ContactType.Supplier);
		return c;
	}
}
