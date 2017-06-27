package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.Date;


/**
 * The persistent class for the field_work database table.
 * 
 */
@Entity
@Table(name="field_work")
@NamedQuery(name="FieldWork.findAll", query="SELECT f FROM FieldWork f")
public class FieldWork implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="field_work_id", unique=true, nullable=false)
	private int fieldWorkId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="finish_dtm", nullable=false)
	private Date finishDtm;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="start_dtm", nullable=false)
	private Date startDtm;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_id", nullable=false)
	@JsonManagedReference
	private Job job;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="field_staff_id", nullable=false)
	@JsonManagedReference
	private Staff staff;

	public FieldWork() {
	}

	public int getFieldWorkId() {
		return this.fieldWorkId;
	}

	public void setFieldWorkId(int fieldWorkId) {
		this.fieldWorkId = fieldWorkId;
	}

	public Date getFinishDtm() {
		return this.finishDtm;
	}

	public void setFinishDtm(Date finishDtm) {
		this.finishDtm = finishDtm;
	}

	public Date getStartDtm() {
		return this.startDtm;
	}

	public void setStartDtm(Date startDtm) {
		this.startDtm = startDtm;
	}

	public Job getJob() {
		return this.job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public Staff getStaff() {
		return this.staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

}