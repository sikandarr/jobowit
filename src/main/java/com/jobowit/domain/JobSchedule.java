package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import java.sql.Timestamp;


/**
 * The persistent class for the job_schedule database table.
 * 
 */
@Entity
@Table(name="job_schedule")
@NamedQuery(name="JobSchedule.findAll", query="SELECT j FROM JobSchedule j")
public class JobSchedule implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="job_schedule_id", unique=true, nullable=false)
	private int jobScheduleId;

	@Column(name="finish_dtm")
	private Timestamp finishDtm;

	@Column(name="start_dtm")
	private Timestamp startDtm;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_id", nullable=false)
	private Job job;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="field_staff_id", nullable=false)
	private Staff staff;

	public JobSchedule() {
	}

	public int getJobScheduleId() {
		return this.jobScheduleId;
	}

	public void setJobScheduleId(int jobScheduleId) {
		this.jobScheduleId = jobScheduleId;
	}

	public Timestamp getFinishDtm() {
		return this.finishDtm;
	}

	public void setFinishDtm(Timestamp finishDtm) {
		this.finishDtm = finishDtm;
	}

	public Timestamp getStartDtm() {
		return this.startDtm;
	}

	public void setStartDtm(Timestamp startDtm) {
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