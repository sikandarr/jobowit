package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.UploadedFile;

@Component
@RepositoryEventHandler(UploadedFile.class)
@Transactional
public class FileUploadEventHandler
{
	@Autowired
	EntityManager em;
	
	@HandleBeforeCreate
	public void handleBeforeCreates(UploadedFile u)
	{
		System.out.println("OK");
	}
	
	@HandleAfterCreate
	public void handleAfterCreate(UploadedFile u)
	{
		em.refresh(u);
		System.out.println(u.getUuid());
	}

}
