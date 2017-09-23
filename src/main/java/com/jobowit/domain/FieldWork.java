package com.jobowit.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "field_work")
@Data
public class FieldWork implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "field_work_id", unique = true, nullable = false)
	private int fieldWorkId;

	@Column(name = "start_dtm", nullable = false, columnDefinition = "DATETIME")
	private LocalDateTime startDtm;

	@Column(name = "finish_dtm", nullable = false, columnDefinition = "DATETIME")
	private LocalDateTime finishDtm;

	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;

	@ManyToOne
	@JoinColumn(name = "field_staff_id", nullable = false)
	private Staff staff;

	public String getStaffName()
	{
		return this.getStaff().getName();
	}
}