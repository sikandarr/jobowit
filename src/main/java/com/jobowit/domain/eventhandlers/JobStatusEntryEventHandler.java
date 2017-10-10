package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Job;
import com.jobowit.domain.JobStatus;
import com.jobowit.domain.JobStatusEntry;
import com.jobowit.helpers.AppLogger;
import com.jobowit.repositories.JobRepository;
import com.jobowit.repositories.JobStatusRepository;
import com.jobowit.repositories.JobTypeRepository;

@Component
@RepositoryEventHandler(JobStatusEntry.class)
@Transactional
public class JobStatusEntryEventHandler
{
	static Logger log = Logger.getLogger(JobStatusEntryEventHandler.class.getName());

	@Autowired
	private JobTypeRepository typeRepo;
	
	@Autowired
	private JobRepository jobRepo;
	
	@Autowired
	private JobStatusRepository statusRepo;

	@HandleBeforeCreate
	public void handleBeforeCreate(JobStatusEntry jse)
	{
		jse.setStaff(AppLogger.loggedInStaff());
	}

	@HandleAfterCreate
	public void handleAfterCreate(JobStatusEntry jse)
	{
		Job job = jse.getJob();
		String comment = "Changed status to: " + jse.getStatus().getStatus() + "<br /><strong>"
				+ ((jse.getComment() == null || jse.getComment().isEmpty()) ? ""
						: "Comment: </strong>" + jse.getComment());
		AppLogger.createComment(comment, job);
		
		if (jse.getStatus().getStatus() == "Customer Accepted" && job.getCurrentType().getJobTypeId() == 2)
		{
			job.setCurrentType(typeRepo.findOne(1));
			jobRepo.save(job);
			JobStatus status = statusRepo.findByStatusAndJobType("Awaiting Scope", job.getCurrentType());
			AppLogger.createStatusEntry(status, job, "Changed Quote Request to Service Request");
		}
	}

}
