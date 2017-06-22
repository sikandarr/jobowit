package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the extra_availability database table.
 * 
 */
@Entity
@Table(name="extra_availability")
@NamedQuery(name="ExtraAvailability.findAll", query="SELECT e FROM ExtraAvailability e")
public class ExtraAvailability implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="extra_availability_id", unique=true, nullable=false)
	private int extraAvailabilityId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="availability_from_dtm")
	private Date availabilityFromDtm;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="availability_to_dtm")
	private Date availabilityToDtm;

	//bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name="staff_id", nullable=false)
	private Staff staff;

	public ExtraAvailability() {
	}

	public int getExtraAvailabilityId() {
		return this.extraAvailabilityId;
	}

	public void setExtraAvailabilityId(int extraAvailabilityId) {
		this.extraAvailabilityId = extraAvailabilityId;
	}

	public Date getAvailabilityFromDtm() {
		return this.availabilityFromDtm;
	}

	public void setAvailabilityFromDtm(Date availabilityFromDtm) {
		this.availabilityFromDtm = availabilityFromDtm;
	}

	public Date getAvailabilityToDtm() {
		return this.availabilityToDtm;
	}

	public void setAvailabilityToDtm(Date availabilityToDtm) {
		this.availabilityToDtm = availabilityToDtm;
	}

	public Staff getStaff() {
		return this.staff;
	}

	public void setStaff(Staff staff) {
		this.staff = staff;
	}

}