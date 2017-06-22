package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the job_type database table.
 * 
 */
@Entity
@Table(name="job_type")
@NamedQuery(name="JobType.findAll", query="SELECT j FROM JobType j")
public class JobType implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="job_type_id", unique=true, nullable=false)
	private int jobTypeId;

	@Column(nullable=false, length=45)
	private String description;

	//bi-directional many-to-one association to Job
	@OneToMany(mappedBy="jobType1")
	private List<Job> jobs1;

	//bi-directional many-to-one association to Job
	@OneToMany(mappedBy="jobType2")
	private List<Job> jobs2;

	//bi-directional many-to-one association to JobStatus
	@OneToMany(mappedBy="jobType")
	private List<JobStatus> jobStatuses;

	public JobType() {
	}

	public int getJobTypeId() {
		return this.jobTypeId;
	}

	public void setJobTypeId(int jobTypeId) {
		this.jobTypeId = jobTypeId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Job> getJobs1() {
		return this.jobs1;
	}

	public void setJobs1(List<Job> jobs1) {
		this.jobs1 = jobs1;
	}

	public Job addJobs1(Job jobs1) {
		getJobs1().add(jobs1);
		jobs1.setJobType1(this);

		return jobs1;
	}

	public Job removeJobs1(Job jobs1) {
		getJobs1().remove(jobs1);
		jobs1.setJobType1(null);

		return jobs1;
	}

	public List<Job> getJobs2() {
		return this.jobs2;
	}

	public void setJobs2(List<Job> jobs2) {
		this.jobs2 = jobs2;
	}

	public Job addJobs2(Job jobs2) {
		getJobs2().add(jobs2);
		jobs2.setJobType2(this);

		return jobs2;
	}

	public Job removeJobs2(Job jobs2) {
		getJobs2().remove(jobs2);
		jobs2.setJobType2(null);

		return jobs2;
	}

	public List<JobStatus> getJobStatuses() {
		return this.jobStatuses;
	}

	public void setJobStatuses(List<JobStatus> jobStatuses) {
		this.jobStatuses = jobStatuses;
	}

	public JobStatus addJobStatus(JobStatus jobStatus) {
		getJobStatuses().add(jobStatus);
		jobStatus.setJobType(this);

		return jobStatus;
	}

	public JobStatus removeJobStatus(JobStatus jobStatus) {
		getJobStatuses().remove(jobStatus);
		jobStatus.setJobType(null);

		return jobStatus;
	}

}