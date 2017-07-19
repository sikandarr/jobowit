package com.jobowit.configuration;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Job;
import com.jobowit.domain.Party;
import com.jobowit.domain.Staff;
import com.jobowit.repositories.JobRepository;
import com.jobowit.repositories.PartyRepository;
import com.jobowit.repositories.StaffRepository;

@Component
public class SpringDataRestCustomization extends RepositoryRestConfigurerAdapter
{

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config)
	{
		config.withEntityLookup().forRepository(PartyRepository.class, Party::getUuid, PartyRepository::findByUuid);
		config.withEntityLookup().forRepository(JobRepository.class, Job::getUuid, JobRepository::findByUuid);
		config.withEntityLookup().forRepository(StaffRepository.class, Staff::getUsername, StaffRepository::findByUsername);

		config.getCorsRegistry().addMapping("*").allowedOrigins("*").allowedMethods("*")
				.allowedHeaders("header1", "header2", "header3").exposedHeaders("header1", "header2")
				.allowCredentials(false).maxAge(3600);
	}
}