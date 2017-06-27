package com.jobowit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;

@SpringBootApplication
public class JobowitApplication
{
	public static void main(String[] args)
	{
		System.out.println("Starting Jobowit; please wait for confirmation...");
		SpringApplication.run(JobowitApplication.class, args);
		System.out.println("application started");
	}
	
	@Bean 
	public ProjectionFactory getProjectionFactory()
	{
		return new SpelAwareProxyProjectionFactory();
	}

}
