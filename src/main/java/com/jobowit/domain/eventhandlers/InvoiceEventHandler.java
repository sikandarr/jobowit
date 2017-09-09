package com.jobowit.domain.eventhandlers;

import java.util.List;

import javax.persistence.EntityManager;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
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
	private InvoiceLineItemRepository invoiceLineItemRepo;

	@HandleBeforeCreate
	public void handleBeforeCreates(Invoice i)
	{
		if (i.getInvoiceLineItems() == null)
			throw new IllegalArgumentException("at least one line item is required for an invoice");

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
		List<InvoiceLineItem> lineItems = i.getInvoiceLineItems();
		for (InvoiceLineItem lineItem : lineItems)
		{
			lineItem.setInvoice(i);
			invoiceLineItemRepo.save(lineItem);
		}
		em.refresh(i);
	}

	@HandleBeforeSave
	public void handleBeforeSave(Invoice i)
	{
		List<InvoiceLineItem> lineItems = i.getInvoiceLineItems();
		
		if (lineItems == null)
			throw new IllegalArgumentException("at least one line item is required for an invoice");
		
		for (InvoiceLineItem lineItem : lineItems)
		{
			if (lineItem.getInvoice() == null)
			{
				lineItem.setInvoice(i);
				invoiceLineItemRepo.save(lineItem);
			}
		}
	}

	@HandleAfterSave
	public void handleAfterSave(Invoice i)
	{
		List<InvoiceLineItem> lineItems = i.getInvoiceLineItems();
		List<InvoiceLineItem> oldLineItems = invoiceLineItemRepo.findByInvoiceInvoiceId(i.getInvoiceId());
		if (oldLineItems.size() > lineItems.size())
		{
			for (InvoiceLineItem oldLineItem : oldLineItems)
			{
				boolean found = false;
				for (InvoiceLineItem lineItem : lineItems)
				{
					if (oldLineItem.getInvoiceLineItemId() == lineItem.getInvoiceLineItemId())
						found = true;
				}
				if (!found)
					invoiceLineItemRepo.delete(oldLineItem);
			}
		}
	}

}
