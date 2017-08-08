package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.sql.Time;

/**
 * The persistent class for the recurring_availability database table.
 * 
 */
@Entity
@Table(name = "recurring_availability")
@NamedQuery(name = "RecurringAvailability.findAll", query = "SELECT r FROM RecurringAvailability r")
public class RecurringAvailability implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recurring_availability_id", unique = true, nullable = false)
	private int recurringAvailabilityId;

	@Column(name = "from_tm", nullable = false)
	private Time fromTm;

	@Column(name = "to_tm", nullable = false)
	private Time toTm;

	@Column(nullable = false, length = 1, columnDefinition = "enum")
	private String weekday;

	// bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;

	public RecurringAvailability()
	{
	}

	public int getRecurringAvailabilityId()
	{
		return this.recurringAvailabilityId;
	}

	public void setRecurringAvailabilityId(int recurringAvailabilityId)
	{
		this.recurringAvailabilityId = recurringAvailabilityId;
	}

	public Time getFromTm()
	{
		return this.fromTm;
	}

	public void setFromTm(Time fromTm)
	{
		this.fromTm = fromTm;
	}

	public Time getToTm()
	{
		return this.toTm;
	}

	public void setToTm(Time toTm)
	{
		this.toTm = toTm;
	}

	public String getWeekday()
	{
		return this.weekday;
	}

	public void setWeekday(String weekday)
	{
		this.weekday = weekday;
	}

	public Staff getStaff()
	{
		return this.staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}

}