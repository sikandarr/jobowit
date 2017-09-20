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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Comment;
import com.jobowit.domain.Party;
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
		Comment c = new Comment();
		c.setComment("Created new " + p.getType());
		c.setStaffUser(SecurityContextHolder.getContext().getAuthentication() != null
				? staffRepo.findByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName())
				: staffRepo.findOne(1));
		c.setParty(p);
		c.setLogMessage(true);
		commentRepo.save(c);
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
		{
			Comment c = new Comment();
			c.setComment(editedFields);
			c.setParty(p);
			c.setStaffUser(SecurityContextHolder.getContext().getAuthentication() != null
					? staffRepo.findByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName())
					: staffRepo.findOne(1));
			c.setLogMessage(true);
			commentRepo.save(c);
		}
	}

}
