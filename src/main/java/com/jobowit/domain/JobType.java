package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

/**
 * The persistent class for the job_type database table.
 * 
 */
@Entity
@Table(name = "job_type")
public class JobType implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_type", nullable = false, length = 45)
	private String jobType;

	// bi-directional many-to-one association to JobStatus
	@OneToMany(mappedBy = "jobType")
	private List<JobStatus> jobStatuses;

	public JobType()
	{
	}

	public String getJobType()
	{
		return jobType;
	}

	public void setJobType(String jobType)
	{
		this.jobType = jobType;
	}

	public List<JobStatus> getJobStatuses()
	{
		return this.jobStatuses;
	}

	public void setJobStatuses(List<JobStatus> jobStatuses)
	{
		this.jobStatuses = jobStatuses;
	}

	public JobStatus addJobStatus(JobStatus jobStatus)
	{
		getJobStatuses().add(jobStatus);
		jobStatus.setJobType(this);

		return jobStatus;
	}

	public JobStatus removeJobStatus(JobStatus jobStatus)
	{
		getJobStatuses().remove(jobStatus);
		jobStatus.setJobType(null);

		return jobStatus;
	}

}