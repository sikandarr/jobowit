package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Comment;
import com.jobowit.domain.JobStatusEntry;
import com.jobowit.repositories.CommentRepository;
import com.jobowit.repositories.StaffRepository;

@Component
@RepositoryEventHandler(JobStatusEntry.class)
@Transactional
public class JobStatusEntryEventHandler
{
	static Logger log = Logger.getLogger(JobStatusEntryEventHandler.class.getName());
	
	@Autowired
	StaffRepository staffRepo;
	
	@Autowired
	CommentRepository commentRepo;
	
	@HandleBeforeCreate
	public void handleBeforeCreate(JobStatusEntry jse)
	{
		jse.setStaff(SecurityContextHolder.getContext().getAuthentication() != null
				? staffRepo.findByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName())
				: staffRepo.findOne(1));
	}

	@HandleAfterCreate
	public void handleAfterCreate(JobStatusEntry jse)
	{
		Comment c = new Comment();
		c.setComment("Changed status to: " + jse.getStatus().getStatus() + "<br /><strong>" + "Comment: </strong>" + jse.getComment());
		c.setJob(jse.getJob());
		c.setStaffUser(jse.getStaff());
		c.setLogMessage(true);
		commentRepo.save(c);
	}

}
