package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the job_status database table.
 * 
 */
@Entity
@Table(name = "job_status")
@NamedQuery(name = "JobStatus.findAll", query = "SELECT j FROM JobStatus j")
public class JobStatus implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_status_id", unique = true, nullable = false)
	private int jobStatusId;

	@Column(name="description", nullable = false, length = 45)
	private String status;
	
	@Column(name="is_active")
	private boolean isActive;

	// bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name = "job_type_id", nullable = false)
	private JobType jobType;

	public JobStatus()
	{
	}

	public int getJobStatusId()
	{
		return this.jobStatusId;
	}

	public void setJobStatusId(int jobStatusId)
	{
		this.jobStatusId = jobStatusId;
	}

	public String getStatus()
	{
		return this.status;
	}

	public void setDescription(String status)
	{
		this.status = status;
	}

	public JobType getJobType()
	{
		return this.jobType;
	}

	public void setJobType(JobType jobType)
	{
		this.jobType = jobType;
	}

	public boolean isActive()
	{
		return isActive;
	}

	public void setActive(boolean isAnActiveStatus)
	{
		this.isActive = isAnActiveStatus;
	}

}