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

import com.jobowit.domain.Bill;
import com.jobowit.domain.BillLineItem;
import com.jobowit.repositories.BillLineItemRepository;

@Component
@RepositoryEventHandler(Bill.class)
@Transactional
public class BillEventHandler
{
	static Logger log = Logger.getLogger(BillEventHandler.class.getName());

	@Autowired
	EntityManager em;

	@Autowired
	private BillLineItemRepository billLineItemRepo;

	@HandleBeforeCreate
	public void handleBeforeCreates(Bill b)
	{
		if (b.getBillLineItems() == null)
			throw new IllegalArgumentException("at least one line item is required for a bill");
	}

	@HandleAfterCreate
	public void handleAfterCreate(Bill b)
	{
		List<BillLineItem> lineItems = b.getBillLineItems();
		for (BillLineItem lineItem : lineItems)
		{
			lineItem.setBill(b);
			billLineItemRepo.save(lineItem);
		}
		em.refresh(b);
	}

	@HandleBeforeSave
	public void handleBeforeSave(Bill b)
	{
		List<BillLineItem> lineItems = b.getBillLineItems();
		
		if (lineItems == null)
			throw new IllegalArgumentException("at least one line item is required for a bill");
		
		for (BillLineItem lineItem : lineItems)
		{
			if (lineItem.getBill() == null)
			{
				lineItem.setBill(b);
				billLineItemRepo.save(lineItem);
			}
		}
	}

	@HandleAfterSave
	public void handleAfterSave(Bill b)
	{
		List<BillLineItem> lineItems = b.getBillLineItems();
		List<BillLineItem> oldLineItems = billLineItemRepo.findByBillBillId(b.getBillId());
		if (oldLineItems.size() > lineItems.size())
		{
			for (BillLineItem oldLineItem : oldLineItems)
			{
				boolean found = false;
				for (BillLineItem lineItem : lineItems)
				{
					if (oldLineItem.getLineItemId() == lineItem.getLineItemId())
						found = true;
				}
				if (!found)
					billLineItemRepo.delete(oldLineItem);
			}
		}
	}

}
