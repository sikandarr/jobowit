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

import com.jobowit.domain.JobStatus;
import com.jobowit.domain.Quotation;
import com.jobowit.domain.QuotationLineItem;
import com.jobowit.helpers.AppLogger;
import com.jobowit.helpers.ManageOneToMany;
import com.jobowit.repositories.JobStatusRepository;

@Component
@RepositoryEventHandler(Quotation.class)
@Transactional
public class QuotationEventHandler
{
	static Logger log = Logger.getLogger(QuotationEventHandler.class.getName());

	@Autowired
	EntityManager em;

	@Autowired
	private JobStatusRepository statusRepo;

	@HandleBeforeCreate
	public void handleBeforeCreates(Quotation q)
	{

	}

	@HandleAfterCreate
	public void handleAfterCreate(Quotation q)
	{
		ManageOneToMany.addChildren(q, q.getLineItems());
		em.refresh(q);
		if (q.getJob().getCurrentType().getJobTypeId() == 2)
		{
			JobStatus status = statusRepo.findByStatusAndJobType("Scoped", q.getJob().getCurrentType());
			AppLogger.createStatusEntry(status, q.getJob(), "Added new Quotation");
		}
		else AppLogger.createComment("Added new Quotation: " + q.getQuotationNumber(), q.getJob());
			
	}

	@HandleBeforeSave
	public void handleBeforeSave(Quotation q)
	{
		List<QuotationLineItem> lineItems = q.getLineItems();

		if (lineItems == null)
			throw new IllegalArgumentException("at least one line item is required for an invoice");

		ManageOneToMany.addChildren(q, lineItems);
	}

	@HandleAfterSave
	public void handleAfterSave(Quotation q)
	{
		ManageOneToMany.syncChildren(q, q.getLineItems());
		AppLogger.createComment("Edited Quotation: " + q.getQuotationNumber(), q.getJob());
	}

}
