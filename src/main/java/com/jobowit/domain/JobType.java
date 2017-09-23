package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.util.List;

/**
 * The persistent class for the job_type database table.
 * 
 */
@Entity
@Table(name = "job_type")
@Data
public class JobType implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_type", nullable = false, length = 45)
	private String jobType;

	@OneToMany(mappedBy = "jobType")
	private List<JobStatus> jobStatuses;

}