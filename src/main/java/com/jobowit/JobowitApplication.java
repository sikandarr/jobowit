package com.jobowit;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

@SpringBootApplication
@EntityScan(basePackageClasses =
	{ JobowitApplication.class, Jsr310JpaConverters.class })
public class JobowitApplication
{
	public static void main(String[] args)
	{
		System.out.println("Starting Jobowit; please wait for confirmation...");
		SpringApplication.run(JobowitApplication.class, args);
		System.out.println("application started at "
				+ LocalDateTime.now().format(DateTimeFormatter.ofPattern("MMM dd, yyyy HH:mm")));
	}
}
