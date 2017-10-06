package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Party;
import com.jobowit.helpers.AppLogger;
import com.jobowit.helpers.EditedFields;
import com.jobowit.repositories.CommentRepository;
import com.jobowit.repositories.PartyRepository;
import com.jobowit.repositories.StaffRepository;

@Component
@RepositoryEventHandler(Party.class)
@Transactional
public class PartyEventHandler
{
	static Logger log = Logger.getLogger(PartyEventHandler.class.getName());

	private String editedFields;

	@Autowired
	EntityManager em;

	@Autowired
	StaffRepository staffRepo;

	@Autowired
	PartyRepository partyRepo;

	@Autowired
	CommentRepository commentRepo;

	@HandleBeforeCreate
	public void handleBeforeCreates(Party p)
	{
	}

	@HandleAfterCreate
	public void handleAfterCreates(Party p)
	{
		em.refresh(p);
		AppLogger.createComment("Created new " + p.getType(), p);
	}

	@HandleBeforeSave
	public void handleBeforeSave(Party p)
	{
		em.detach(p);
		Party oldParty = partyRepo.findOne(p.getPartyId());
		editedFields = EditedFields.determine(oldParty, p);
	}

	@HandleAfterSave
	public void hadleAfterSave(Party p)
	{
		if (editedFields != null && !editedFields.isEmpty())
			AppLogger.createComment(editedFields, p);
	}

}
