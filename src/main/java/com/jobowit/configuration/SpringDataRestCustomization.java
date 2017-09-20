package com.jobowit.configuration;

import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

import com.jobowit.domain.Job;
import com.jobowit.domain.Party;
import com.jobowit.domain.Staff;
import com.jobowit.domain.UploadedFile;
import com.jobowit.domain.access.AccessRole;
import com.jobowit.repositories.JobRepository;
import com.jobowit.repositories.PartyRepository;
import com.jobowit.repositories.StaffRepository;
import com.jobowit.repositories.UploadedFileRepository;

@Component
public class SpringDataRestCustomization extends RepositoryRestConfigurerAdapter
{

	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config)
	{
		config.withEntityLookup().forRepository(PartyRepository.class, Party::getUuid, PartyRepository::findByUuid);
		config.withEntityLookup().forRepository(JobRepository.class, Job::getUuid, JobRepository::findByUuid);
		config.withEntityLookup().forRepository(UploadedFileRepository.class, UploadedFile::getUuid, UploadedFileRepository::findByUuid);
		config.withEntityLookup().forRepository(StaffRepository.class, Staff::getUuid, StaffRepository::findByUuid);
		config.setBasePath("/api");
		config.exposeIdsFor(AccessRole.class);
	}
}