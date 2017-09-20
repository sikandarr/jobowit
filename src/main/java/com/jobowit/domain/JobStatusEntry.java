package com.jobowit.domain;

import java.sql.Date;
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
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;

@Entity
@Table(name = "job_status_entry")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobStatusEntryId")
@Data
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
	
	@Column(name = "entry_dtm", insertable=false, updatable=false)
	private Timestamp entryDtm;
	
	@Column
	private Date followUpDt;
}
