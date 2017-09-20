package com.jobowit.domain;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.Data;

/**
 * The persistent class for the non_availability database table.
 * 
 */
@Entity
@Table(name = "non_availability")
@Data
public class NonAvailability implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "non_availability_id", unique = true, nullable = false)
	private int nonAvailabilityId;

	@Column(name = "not_available_from_dtm", columnDefinition = "DATETIME", nullable = false)
	private LocalDateTime fromDtm;

	@Column(name = "not_available_to_dtm", columnDefinition = "DATETIME", nullable = false)
	private LocalDateTime toDtm;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;

	public boolean isAvailableBetween(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		if ((startDtm.isAfter(fromDtm) && startDtm.isBefore(toDtm))
				|| (finishDtm.isAfter(fromDtm) && finishDtm.isBefore(toDtm)))
			return false;
		return true;
	}

}