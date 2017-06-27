package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


/**
 * The persistent class for the operation_staff_in_job database table.
 * 
 */
@Entity
@Table(name="operation_staff_in_job")
@NamedQuery(name="OperationStaffInJob.findAll", query="SELECT o FROM OperationStaffInJob o")
public class OperationStaffInJob implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="operation_staff_in_job_id", unique=true, nullable=false)
	private int operationStaffInJobId;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_id", nullable=false)
	@JsonManagedReference
	private Job job;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="operation_staff_id", nullable=false)
	@JsonManagedReference
	private Staff staff;

	public OperationStaffInJob() {
	}

	public int getOperationStaffInJobId() {
		return this.operationStaffInJobId;
	}

	public void setOperationStaffInJobId(int operationStaffInJobId) {
		this.operationStaffInJobId = operationStaffInJobId;
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