package com.jobowit;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.Locale;

public class SimpleMain
{
	public static void main(String[] args) throws Exception
	{
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 9, 22), LocalTime.of(8, 30))));
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 9, 23), LocalTime.of(8, 30))));
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 9, 24), LocalTime.of(8, 30))));
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 9, 25), LocalTime.of(8, 30))));
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 9, 20), LocalTime.of(8, 30))));
		System.out.println(logicalDay(LocalDateTime.of(LocalDate.of(2017, 10, 5), LocalTime.of(8, 30))));
		
	}
	
	public static String logicalDay(LocalDateTime startDtm)
	{
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm");
		LocalDate today = LocalDate.now(ZoneId.of("Australia/Adelaide"));
		LocalDate schedule = startDtm.toLocalDate();
		TemporalField wom = WeekFields.of(Locale.getDefault()).weekOfMonth();
		int daysBetween = (int) java.time.temporal.ChronoUnit.DAYS.between(today, schedule);
		int weeksBetween = today.get(wom) - schedule.get(wom);
		int monthsBetween = today.getMonthValue() - schedule.getMonthValue();

		if (daysBetween == 0)
			return "Today at " + startDtm.format(formatter);
		if (daysBetween == 1)
			return "Tomorrow at " + startDtm.format(formatter);
		if (daysBetween == -1)
			return "Yesterday at " + startDtm.format(formatter);
		
		if (daysBetween > 1 && daysBetween < 7)
			return String.format("%ta at " + startDtm.format(formatter), schedule);
		
		if (daysBetween < 0 && daysBetween > -7)
			return "Last " + String.format("%ta", schedule);
		
		if (monthsBetween == 0)
		{
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
			return String.format("%tb", schedule);
		}
		if (today.getYear() > schedule.getYear())
			return "Last year";
		else return "Next year";
	}
}
