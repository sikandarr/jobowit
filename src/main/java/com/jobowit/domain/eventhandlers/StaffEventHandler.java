package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Staff;

@Component
@RepositoryEventHandler(Staff.class)
@Transactional
public class StaffEventHandler
{	
	@Autowired
	EntityManager em;

	@HandleAfterCreate
	public void handleAfterCreates(Staff s)
	{
		em.refresh(s);
	}
}