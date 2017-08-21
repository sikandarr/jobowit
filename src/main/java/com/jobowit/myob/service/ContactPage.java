package com.jobowit.myob.service;

import java.util.List;

import com.anahata.myob.api.domain.v2.EntityPage;
import com.anahata.myob.api.domain.v2.contact.Contact;
import lombok.Data;

@Data
public class ContactPage extends EntityPage<Contact>
{
	public List<Contact> Items;
}
