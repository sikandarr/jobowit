package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

/**
 * The persistent class for the job_type database table.
 * 
 */
@Entity
@Table(name = "job_type")
@NamedQuery(name = "JobType.findAll", query = "SELECT j FROM JobType j")
public class JobType implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_type_id", unique = true, nullable = false)
	private int jobTypeId;

	@Column(nullable = false, length = 45)
	private String description;

	// bi-directional many-to-one association to Job
	@OneToMany(mappedBy = "initialType")
	@JsonIgnore
	private List<Job> initialJobs;

	// bi-directional many-to-one association to Job
	@OneToMany(mappedBy = "currentType")
	@JsonIgnore
	private List<Job> currentJobs;

	// bi-directional many-to-one association to JobStatus
	@OneToMany(mappedBy = "jobType")
	@JsonIgnore
	private List<JobStatus> jobStatuses;

	public JobType()
	{
	}

	public int getJobTypeId()
	{
		return this.jobTypeId;
	}

	public void setJobTypeId(int jobTypeId)
	{
		this.jobTypeId = jobTypeId;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public List<Job> getInitialJobs()
	{
		return this.initialJobs;
	}

	public void setInitialJobs(List<Job> initialJobs)
	{
		this.initialJobs = initialJobs;
	}

	public Job addInitialJobs(Job job)
	{
		getInitialJobs().add(job);
		job.setInitialType(this);

		return job;
	}

	public Job removeInitialJobs(Job job)
	{
		getInitialJobs().remove(job);
		job.setInitialType(null);

		return job;
	}

	public List<Job> getCurrentJobs()
	{
		return this.currentJobs;
	}

	public void setCurrentJobs(List<Job> currentJobs)
	{
		this.currentJobs = currentJobs;
	}

	public Job addCurrentJobs(Job job)
	{
		getCurrentJobs().add(job);
		job.setCurrentType(this);

		return job;
	}

	public Job removeCurrentJobs(Job job)
	{
		getCurrentJobs().remove(job);
		job.setCurrentType(null);

		return job;
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