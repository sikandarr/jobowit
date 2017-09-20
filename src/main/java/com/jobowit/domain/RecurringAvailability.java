package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "recurring_availability")
@Data
public class RecurringAvailability implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recurring_availability_id", unique = true, nullable = false)
	private int recurringAvailabilityId;

	@Column(name = "from_tm", nullable = false, columnDefinition = "TIME")
	private LocalTime fromTm;

	@Column(name = "to_tm", nullable = false, columnDefinition = "TIME")
	private LocalTime toTm;

	@Column(nullable = false, length = 1, columnDefinition = "enum")
	private String weekday;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;
	
	public boolean isAvailableBetween(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		String day = startDtm.getDayOfWeek().name().toLowerCase();
		String weekday = this.getWeekday().toLowerCase();
		
		if (!weekday.equals(day))
			return false;
		else
		{
			if (startDtm.toLocalTime().isBefore(fromTm) || startDtm.toLocalTime().isAfter(toTm))
				return false;
			
			if (finishDtm.toLocalTime().isBefore(fromTm) || finishDtm.toLocalTime().isAfter(toTm))
				return false;
		}
		return true;
	}

}