package com.jobowit.helpers;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Comment;
import com.jobowit.domain.Job;
import com.jobowit.domain.JobStatus;
import com.jobowit.domain.JobStatusEntry;
import com.jobowit.domain.Staff;
import com.jobowit.repositories.CommentRepository;
import com.jobowit.repositories.JobStatusEntryRepository;
import com.jobowit.repositories.StaffRepository;

@Component
public class AppLogger
{
	private static CommentRepository commentRepo;
	private static StaffRepository staffRepo;
	private static JobStatusEntryRepository jseRepo;

	@Autowired
	private CommentRepository commentRepo0;

	@Autowired
	private StaffRepository staffRepo0;

	@Autowired
	private JobStatusEntryRepository jseRepo0;

	@PostConstruct
	private void initStatic()
	{
		commentRepo = this.commentRepo0;
		staffRepo = this.staffRepo0;
		jseRepo = this.jseRepo0;
	}

	public static void createComment(String message, Job job)
	{
		Comment comment = new Comment();
		comment.setComment(message);
		comment.setJob(job);
		comment.setStaffUser(loggedInStaff());
		comment.setLogMessage(true);
		commentRepo.save(comment);
	}

	public static void createStatusEntry(JobStatus status, Job job, String comment)
	{
		JobStatusEntry jse = new JobStatusEntry();
		jse.setStatus(status);
		jse.setStaff(loggedInStaff());
		jse.setJob(job);
		if (comment != null)
			jse.setComment(comment);
		jseRepo.save(jse);
		String c = ((comment == null ? ""
				: comment + "<br /><br />" + "<strong>Auto status: </strong>" + status.getStatus()));
		createComment(c, job);
	}

	public static Staff loggedInStaff()
	{
		return SecurityContextHolder.getContext().getAuthentication() != null
				? staffRepo.findByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName())
				: staffRepo.findOne(1);
	}
}
