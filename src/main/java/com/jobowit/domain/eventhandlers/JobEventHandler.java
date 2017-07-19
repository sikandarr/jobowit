package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Job;
import com.jobowit.domain.JobType;
import com.jobowit.domain.ResourceId;
import com.jobowit.repositories.JobStatusRepository;
import com.jobowit.repositories.ResourceIdRepository;
import com.jobowit.utils.RandomString;

@Component
@RepositoryEventHandler(Job.class)
@Transactional
public class JobEventHandler
{
	@Autowired
	private JobStatusRepository statusRepo;
	
	@Autowired
	private ResourceIdRepository ridRepo;
	
	@Autowired
	EntityManager em;
	
	@HandleBeforeCreate
	public void handleBeforeCreates(Job job)
	{
		JobType type = job.getInitialType();
		job.setCurrentType(type);
		if (job.getJobStatus() == null)
			if (type.getJobType().equalsIgnoreCase("Quote Request"))
				job.setJobStatus(statusRepo.findOneByStatus("Awaiting Scope"));
			else job.setJobStatus(statusRepo.findOneByStatus("Awaiting Schedule"));
		
		String id = null;
		for(;;)
		{	
			id = RandomString.generate(6);
			ResourceId rid = ridRepo.findOne(id);
			if (rid == null)
			break;
		}
		ResourceId rid = new ResourceId(id);
		ridRepo.save(rid);
		job.setJobNumber(id);
	}
	
	@HandleAfterCreate
	public void handleAfterCreate(Job job)
	{
		em.refresh(job);
	}
	
}
