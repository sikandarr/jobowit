package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the job_status database table.
 * 
 */
@Entity
@Table(name="job_status")
@NamedQuery(name="JobStatus.findAll", query="SELECT j FROM JobStatus j")
public class JobStatus implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="job_status_id", unique=true, nullable=false)
	private int jobStatusId;

	@Column(nullable=false, length=45)
	private String description;

	//bi-directional many-to-one association to Job
	@OneToMany(mappedBy="jobStatus")
	private List<Job> jobs;

	//bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name="job_type_id", nullable=false)
	private JobType jobType;

	public JobStatus() {
	}

	public int getJobStatusId() {
		return this.jobStatusId;
	}

	public void setJobStatusId(int jobStatusId) {
		this.jobStatusId = jobStatusId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Job> getJobs() {
		return this.jobs;
	}

	public void setJobs(List<Job> jobs) {
		this.jobs = jobs;
	}

	public Job addJob(Job job) {
		getJobs().add(job);
		job.setJobStatus(this);

		return job;
	}

	public Job removeJob(Job job) {
		getJobs().remove(job);
		job.setJobStatus(null);

		return job;
	}

	public JobType getJobType() {
		return this.jobType;
	}

	public void setJobType(JobType jobType) {
		this.jobType = jobType;
	}

}