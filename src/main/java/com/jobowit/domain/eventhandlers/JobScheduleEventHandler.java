package com.jobowit.domain.eventhandlers;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterCreate;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

import org.apache.log4j.Logger;

import com.jobowit.domain.JobSchedule;
import com.jobowit.helpers.AppLogger;
import com.jobowit.repositories.CommentRepository;
import com.jobowit.repositories.JobStatusRepository;
import com.jobowit.repositories.StaffRepository;

@Component
@RepositoryEventHandler(JobSchedule.class)
@Transactional
public class JobScheduleEventHandler
{
	static Logger log = Logger.getLogger(JobScheduleEventHandler.class.getName());

	@Autowired
	StaffRepository staffRepo;

	@Autowired
	CommentRepository commentRepo;

	@Autowired
	private JobStatusRepository statusRepo;

	@HandleBeforeCreate
	public void handleBeforeCreate(JobSchedule js)
	{
		if (js.getStartDtm().isAfter(js.getFinishDtm()))
			throw new IllegalArgumentException("startime time cannot be after finishtime");

		if (!js.getStaff().isAvailableBetween(js.getStartDtm(), js.getFinishDtm()))
			throw new IllegalArgumentException(js.getStaff().getName() + " is not available for this schedule");
	}

	@HandleAfterCreate
	public void handleAfterCreate(JobSchedule js)
	{
		AppLogger.createStatusEntry(statusRepo.findByStatusAndJobType("Scheduled", js.getJob().getCurrentType()),
				js.getJob(), js.forComment());
	}

}
