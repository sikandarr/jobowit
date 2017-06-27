package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;


/**
 * The persistent class for the sales_staff_in_job database table.
 * 
 */
@Entity
@Table(name="sales_staff_in_job")
@NamedQuery(name="SalesStaffInJob.findAll", query="SELECT s FROM SalesStaffInJob s")
public class SalesStaffInJob implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sales_staff_in_job_id", unique=true, nullable=false)
	private int salesStaffInJobId;

	@Column(name="commision_percentage")
	private float commisionPercentage;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_id", nullable=false)
	@JsonManagedReference
	private Job job;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="sales_staff_id", nullable=false)
	@JsonManagedReference
	private Staff staff;

	public SalesStaffInJob() {
	}

	public int getSalesStaffInJobId() {
		return this.salesStaffInJobId;
	}

	public void setSalesStaffInJobId(int salesStaffInJobId) {
		this.salesStaffInJobId = salesStaffInJobId;
	}

	public float getCommisionPercentage() {
		return this.commisionPercentage;
	}

	public void setCommisionPercentage(float commisionPercentage) {
		this.commisionPercentage = commisionPercentage;
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