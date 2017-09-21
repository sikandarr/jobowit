package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Comment;
import com.jobowit.repositories.StaffRepository;

@Component
@RepositoryEventHandler(Comment.class)
@Transactional
public class CommentEventHandler
{
	static Logger log = Logger.getLogger(CommentEventHandler.class.getName());
	
	@Autowired
	StaffRepository staffRepo;
	
	@HandleBeforeCreate
	public void handleBeforeCreate(Comment c)
	{
		c.setStaffUser(SecurityContextHolder.getContext().getAuthentication() != null
				? staffRepo.findByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName())
				: staffRepo.findOne(1));
	}

}