package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the non_availability database table.
 * 
 */
@Entity
@Table(name="non_availability")
@NamedQuery(name="NonAvailability.findAll", query="SELECT n FROM NonAvailability n")
public class NonAvailability implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="non_availability_id", unique=true, nullable=false)
	private int nonAvailabilityId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="not_available_from_dtm")
	private Date notAvailableFromDtm;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="not_available_to_dtm")
	private Date notAvailableToDtm;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="staff_id", nullable=false)
	private Staff staff;

	public NonAvailability() {
	}

	public int getNonAvailabilityId() {
		return this.nonAvailabilityId;
	}

	public void setNonAvailabilityId(int nonAvailabilityId) {
		this.nonAvailabilityId = nonAvailabilityId;
	}

	public Date getNotAvailableFromDtm() {
		return this.notAvailableFromDtm;
	}

	public void setNotAvailableFromDtm(Date notAvailableFromDtm) {
		this.notAvailableFromDtm = notAvailableFromDtm;
	}

	public Date getNotAvailableToDtm() {
		return this.notAvailableToDtm;
	}

	public void setNotAvailableToDtm(Date notAvailableToDtm) {
		this.notAvailableToDtm = notAvailableToDtm;
	}

	public Staff getStaff() {
		return this.staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

}