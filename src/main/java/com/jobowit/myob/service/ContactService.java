package com.jobowit.myob.service;

import java.util.List;
import java.util.Objects;

import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.service.AbstractEntityMyobService;

public class ContactService extends AbstractEntityMyobService<ContactPage, Contact>
{
	public ContactService()
	{
		super("Contact", ContactPage.class, Contact.class);
	}

	public Contact findByDisplayID(String displayID)
	{
		List<Contact> contacts = super.findAll();
		for (Contact c : contacts)
		{
			if (Objects.equals(c.getDisplayID(), displayID))
			{
				return c;
			}
		}
		return null;
	}
}
