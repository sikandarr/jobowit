package com.jobowit;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.TimeZone;

public class SimpleMain
{
	public static void main(String[] args) throws Exception
	{
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Kolkata"));
		System.out.print(LocalTime.of(5, 0));
	}
}
