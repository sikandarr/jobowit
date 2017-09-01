package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Staff;
import com.jobowit.utils.RandomColor;

@Component
@RepositoryEventHandler(Staff.class)
@Transactional
public class StaffEventHandler
{	
	@Autowired
	EntityManager em;
	
	@HandleBeforeCreate
	public void handleBeforeCreates(Staff s)
	{
		if (s.getInitials() == null || s.getInitials().isEmpty())
		{
			String initials = s.getName().substring(0, 2);
			String[] names = s.getName().split(" ");
			if (names.length > 1)
				initials = "" + names[0].charAt(0) + names[1].charAt(0);
			s.setInitials(initials.toUpperCase());
		}
		
		s.setBgColor(RandomColor.generate());
		
	}

	@HandleAfterCreate
	public void handleAfterCreates(Staff s)
	{
		em.refresh(s);
	}
}