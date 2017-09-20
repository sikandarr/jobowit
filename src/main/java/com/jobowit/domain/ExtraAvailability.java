package com.jobowit.domain;

import java.io.Serializable;
import java.time.LocalDateTime;
import javax.persistence.*;
import lombok.Data;

@Entity
@Table(name = "extra_availability")
@Data
public class ExtraAvailability implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "extra_availability_id", unique = true, nullable = false)
	private int extraAvailabilityId;

	@Column(name = "availability_from_dtm", columnDefinition = "DATETIME", nullable = false)
	private LocalDateTime fromDtm;

	@Column(name = "availability_to_dtm", columnDefinition = "DATETIME", nullable = false)
	private LocalDateTime toDtm;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;

	public boolean isAvailableBetween(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		if (startDtm.isBefore(fromDtm) || startDtm.isAfter(toDtm))
			return false;

		if (finishDtm.isBefore(fromDtm) || finishDtm.isAfter(toDtm))
			return false;
		
		return true;
	}

}