package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Party;

@Component
@RepositoryEventHandler(Party.class)
@Transactional
public class PartyEventHandler
{
	@Autowired
	EntityManager em;

	@HandleAfterCreate
	public void handleAfterCreates(Party p)
	{
		em.refresh(p);
	}
}
