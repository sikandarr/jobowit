package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.JobStatusEntry;
import com.jobowit.helpers.AppLogger;
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
		jse.setStaff(AppLogger.loggedInStaff());
	}

	@HandleAfterCreate
	public void handleAfterCreate(JobStatusEntry jse)
	{
		String comment = "Changed status to: " + jse.getStatus().getStatus() + "<br /><strong>"
				+ ((jse.getComment() == null || jse.getComment().isEmpty()) ? ""
						: "Comment: </strong>" + jse.getComment());
		AppLogger.createComment(comment, jse.getJob());
	}

}
