package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Locale;

/**
 * The persistent class for the job_schedule database table.
 * 
 */
@Entity
@Table(name = "job_schedule")
public class JobSchedule implements Serializable, Comparable<JobSchedule>
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_schedule_id", unique = true, nullable = false)
	private int jobScheduleId;

	@Column(name = "start_dtm", columnDefinition="DATETIME", nullable = false)
	private LocalDateTime startDtm;
	
	@Column(name = "finish_dtm", columnDefinition="DATETIME", nullable = false)
	private LocalDateTime finishDtm;

	// bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;

	// bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name = "field_staff_id", nullable = false)
	private Staff staff;

	public JobSchedule()
	{
	}

	public int getJobScheduleId()
	{
		return this.jobScheduleId;
	}

	public void setJobScheduleId(int jobScheduleId)
	{
		this.jobScheduleId = jobScheduleId;
	}

	public String getStartDtm()
	{
		return this.startDtm.toString();
	}

	public void setStartDtm(LocalDateTime startDtm)
	{
		this.startDtm = startDtm;
	}
	
	public String getFinishDtm()
	{
		return this.finishDtm.toString();
	}

	public void setFinishDtm(LocalDateTime finishDtm)
	{
		this.finishDtm = finishDtm;
	}

	public void setJob(Job job)
	{
		this.job = job;
	}

	public Staff getStaff()
	{
		return this.staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}
	
	public String getLogicalDay()
	{
		LocalDate today = LocalDate.now();
		LocalDate schedule = startDtm.toLocalDate();
		TemporalField woy = WeekFields.of(Locale.getDefault()).weekOfWeekBasedYear();
		int daysBetween = (int) java.time.temporal.ChronoUnit.DAYS.between(today, schedule);
		int weeksBetween = today.get(woy) - schedule.get(woy);
		int monthsBetween = today.getMonthValue() - schedule.getMonthValue();
		
		if (daysBetween == 0) return "Today";
		if (daysBetween == 1) return "Tomorrow";
		if (daysBetween == -1) return "Yesterday";
		if (weeksBetween == 0 && daysBetween < 0) return "Last " + schedule.getDayOfWeek().toString();;
		if (weeksBetween == 0 && daysBetween > 0) return "Coming " + schedule.getDayOfWeek().toString();
		if (weeksBetween == -1) return "Next Week";
		if (weeksBetween == 1) return "Last Week";
		if (monthsBetween == -1) return "Next Month";
		if (monthsBetween == 1) return "Last Month";

		return "";
	}

	@Override
	public int compareTo(JobSchedule o)
	{
		return this.getStartDtm().compareTo(o.getStartDtm());
	}
}