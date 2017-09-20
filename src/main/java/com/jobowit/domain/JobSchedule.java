package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Locale;

/**
 * The persistent class for the job_schedule database table.
 * 
 */
@Entity
@Table(name = "job_schedule")
@Data
public class JobSchedule implements Serializable, Comparable<JobSchedule>
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_schedule_id", unique = true, nullable = false)
	private int jobScheduleId;

	@Column(name = "start_dtm", columnDefinition = "DATETIME", nullable = false)
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime startDtm;

	@Column(name = "finish_dtm", columnDefinition = "DATETIME", nullable = false)
	@DateTimeFormat(iso = ISO.DATE_TIME)
	private LocalDateTime finishDtm;

	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	@JsonIgnore
	private Job job;

	@ManyToOne
	@JoinColumn(name = "field_staff_id", nullable = false)
	private Staff staff;

	public String getLogicalDay()
	{
		LocalDate today = LocalDate.now(ZoneId.of("Australia/Adelaide"));
		LocalDate schedule = startDtm.toLocalDate();
		TemporalField wom = WeekFields.of(Locale.getDefault()).weekOfMonth();
		int daysBetween = (int) java.time.temporal.ChronoUnit.DAYS.between(today, schedule);
		int weeksBetween = today.get(wom) - schedule.get(wom);
		int monthsBetween = today.getMonthValue() - schedule.getMonthValue();

		if (daysBetween == 0)
			return "Today";
		if (daysBetween == 1)
			return "Tomorrow";
		if (daysBetween == -1)
			return "Yesterday";
		if (monthsBetween == 0)
		{
			if (weeksBetween == 0)
				return "Last " + schedule.getDayOfWeek().toString();
			if (weeksBetween == 0)
				return "Coming " + schedule.getDayOfWeek().toString();
			if (weeksBetween == -1)
				return "Next Week";
			if (weeksBetween == 1)
				return "Last Week";
		}
		if (monthsBetween == -1)
			return "Next Month";
		if (monthsBetween == 1)
			return "Last Month";
		if (today.getYear() == schedule.getYear())
		{
			return schedule.getMonth().toString();
		}
		if (today.getYear() > schedule.getYear())
			return "Last year";
		else return "Next year";
	}

	public boolean isPast()
	{
		LocalDateTime now = LocalDateTime.now(ZoneId.of("Australia/Adelaide"));
		return now.isAfter(finishDtm);
	}

	public boolean hasConflict(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		if (finishDtm.isBefore(this.startDtm) || startDtm.isAfter(this.finishDtm))
			return false;
		return true;
	}

	@Override
	public int compareTo(JobSchedule o)
	{
		return this.getStartDtm().compareTo(o.getStartDtm());
	}
}