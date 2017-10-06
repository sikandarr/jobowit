package com.jobowit.domain.eventhandlers;

import javax.persistence.EntityManager;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeSave;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.Job;
import com.jobowit.domain.JobEmailText;
import com.jobowit.domain.JobStatus;
import com.jobowit.domain.JobType;
import com.jobowit.domain.ResourceId;
import com.jobowit.helpers.AppLogger;
import com.jobowit.helpers.EditedFields;
import com.jobowit.repositories.CommentRepository;
import com.jobowit.repositories.JobEmailTextRepository;
import com.jobowit.repositories.JobRepository;
import com.jobowit.repositories.JobStatusRepository;
import com.jobowit.repositories.ResourceIdRepository;
import com.jobowit.repositories.StaffRepository;
import com.jobowit.utils.Email;
import com.jobowit.utils.RandomString;
import com.jobowit.utils.Parser;

@Component
@RepositoryEventHandler(Job.class)
@Transactional
public class JobEventHandler
{
	static Logger log = Logger.getLogger(JobEventHandler.class.getName());
	private String editedFields;

	@Autowired
	private JobStatusRepository statusRepo;

	@Autowired
	private ResourceIdRepository ridRepo;

	@Autowired
	private JobEmailTextRepository jetRepo;

	@Autowired
	StaffRepository staffRepo;

	@Autowired
	JobRepository jobRepo;

	@Autowired
	CommentRepository commentRepo;

	@Autowired
	EntityManager em;

	@HandleBeforeCreate
	public void handleBeforeCreates(Job job)
	{
		job.setCurrentType(job.getInitialType());
		String id = null;
		for (;;)
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
		JobType type = job.getInitialType();
		JobStatus status = statusRepo.findOneByJobTypeAndInitial(type, 'Y');
		AppLogger.createStatusEntry(status, job, "Created new " + type.getJobType());
		em.refresh(job);

		JobEmailText jet = jetRepo.findOne("Primary");
		try
		{
			Email.send(Parser.jobEmail(jet.getSubject(), job), Parser.jobEmail(jet.getBody(), job), job.getEmail());
		}
		catch (Exception e)
		{
			log.warn("could not send email for new job: " + e.getMessage());
		}
	}

	@HandleBeforeSave
	public void handleBeforeSave(Job job)
	{
		em.detach(job);
		Job oldJob = jobRepo.findOne(job.getJobId());
		editedFields = EditedFields.determine(oldJob, job);
	}

	@HandleAfterSave
	public void handleAfterSave(Job job)
	{
		if (editedFields != null && !editedFields.isEmpty())
			AppLogger.createComment(editedFields, job);

	}

}
