package com.jobowit;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class SimpleMain
{
	public static void main(String[] args) throws Exception
	{
		System.out.println("application started at "
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("MMM dd, yyyy HH:mm")));
	}
}
