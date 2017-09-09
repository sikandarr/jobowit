package com.jobowit.myob.domainservice;

import java.util.List;

import com.anahata.myob.api.domain.v2.EntityPage;
import com.anahata.myob.api.domain.v2.contact.Contact;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ContactPage extends EntityPage<Contact>
{
	public List<Contact> Items;
}
