package com.jobowit.domain.eventhandlers;

import java.util.List;

import javax.persistence.EntityManager;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Invoice;
import com.jobowit.domain.InvoiceLineItem;
import com.jobowit.domain.ResourceId;
import com.jobowit.repositories.InvoiceLineItemRepository;
import com.jobowit.repositories.ResourceIdRepository;
import com.jobowit.utils.RandomString;

@Component
@RepositoryEventHandler(Invoice.class)
@Transactional
public class InvoiceEventHandler
{
	static Logger log = Logger.getLogger(InvoiceEventHandler.class.getName());

	@Autowired
	EntityManager em;
	
	@Autowired
	private ResourceIdRepository ridRepo;
	
	@Autowired
	private InvoiceLineItemRepository invoiceLiRepo;

	@HandleBeforeCreate
	public void handleBeforeCreates(Invoice i)
	{
		String id = null;
		for (;;)
		{
			id = RandomString.generate(6);
			ResourceId rid = ridRepo.findOne(id);
			if (rid == null)
				break;
		}
		ResourceId rid = new ResourceId(id);
		ridRepo.save(rid);
		i.setInvoiceNumber(id);
	}

	@HandleAfterCreate
	public void handleAfterCreate(Invoice i)
	{
		List<InvoiceLineItem> ils = i.getInvoiceLineItems();
		for(InvoiceLineItem il : ils)
		{
			il.setInvoice(i);
			invoiceLiRepo.save(il);
		}
		em.refresh(i);
	}

	@HandleBeforeSave
	public void handleBeforeSave(Invoice i)
	{

	}

}
