package com.jobowit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class JobowitApplication
{
	private static final Logger log = LoggerFactory.getLogger(JobowitApplication.class);

	public static void main(String[] args)
	{
		SpringApplication.run(JobowitApplication.class, args);
	}

}
