package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Comment;
import com.jobowit.helpers.AppLogger;

@Component
@RepositoryEventHandler(Comment.class)
@Transactional
public class CommentEventHandler
{
	static Logger log = Logger.getLogger(CommentEventHandler.class.getName());
	
	@HandleBeforeCreate
	public void handleBeforeCreate(Comment c)
	{
		c.setStaffUser(AppLogger.loggedInStaff());
	}

}
