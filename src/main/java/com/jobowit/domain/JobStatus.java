package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "job_status")
@Data
public class JobStatus implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_status_id", unique = true, nullable = false)
	private int jobStatusId;

	@Column(name = "status_desc", nullable = false, length = 45)
	private String status;

	@Column(name = "indicates_active_job")
	private boolean isActive;
	
	@Column(columnDefinition="ENUM('Y')")
	private String initial;

	@ManyToOne
	@JoinColumn(name = "job_type", nullable = false)
	private JobType jobType;
}