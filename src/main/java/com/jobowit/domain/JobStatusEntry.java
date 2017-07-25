package com.jobowit.domain;

import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "job_status_entry")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobStatusEntryId")
public class JobStatusEntry
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_status_entry_id", unique = true, nullable = false)
	private int JobStatusEntryId;
	
	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "job_id")
	private Job job;
	
	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "job_status")
	private JobStatus status;
	
	@ManyToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "staff_id")
	private Staff staff;
	
	@Column(columnDefinition = "TEXT")
	private String comment;
	
	@Column(name = "entry_dtm", insertable=false)
	private Timestamp entryDtm;

	public int getJobStatusEntryId()
	{
		return JobStatusEntryId;
	}

	public void setJobStatusEntryId(int jobStatusEntryId)
	{
		JobStatusEntryId = jobStatusEntryId;
	}

	public Job getJob()
	{
		return job;
	}

	public void setJob(Job job)
	{
		this.job = job;
	}

	public JobStatus getStatus()
	{
		return status;
	}

	public void setStatus(JobStatus status)
	{
		this.status = status;
	}

	public Staff getStaff()
	{
		return staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}

	public String getComment()
	{
		return comment;
	}

	public void setComment(String comment)
	{
		this.comment = comment;
	}

	public Timestamp getEntryDtm()
	{
		return entryDtm;
	}

	@JsonIgnore
	public void setEntryDtm(Timestamp entryDtm)
	{
		this.entryDtm = entryDtm;
	}
}
