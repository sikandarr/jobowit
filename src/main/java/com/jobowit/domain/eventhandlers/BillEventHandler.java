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
import com.jobowit.helpers.AppLogger;
import com.jobowit.helpers.ManageOneToMany;

@Component
@RepositoryEventHandler(Bill.class)
@Transactional
public class BillEventHandler
{
	static Logger log = Logger.getLogger(BillEventHandler.class.getName());

	@Autowired
	EntityManager em;

	@HandleBeforeCreate
	public void handleBeforeCreates(Bill b)
	{
		if (b.getBillLineItems() == null)
			throw new IllegalArgumentException("at least one line item is required for a bill");
	}

	@HandleAfterCreate
	public void handleAfterCreate(Bill b)
	{
		ManageOneToMany.addChildren(b, b.getBillLineItems());
		em.refresh(b);
		AppLogger.createComment("Created new Bill", b.getJob());
	}

	@HandleBeforeSave
	public void handleBeforeSave(Bill b)
	{
		List<BillLineItem> lineItems = b.getBillLineItems();
		
		if (lineItems == null)
			throw new IllegalArgumentException("at least one line item is required for a bill");
		
		ManageOneToMany.addChildren(b, lineItems);
	}

	@HandleAfterSave
	public void handleAfterSave(Bill b)
	{
		ManageOneToMany.syncChildren(b, b.getBillLineItems());
		AppLogger.createComment("Edited Bill", b.getJob());
	}

}
