package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.JobStatus;
import com.jobowit.domain.JobType;

@RepositoryRestResource
public interface JobStatusRepository extends PagingAndSortingRepository<JobStatus, Integer>
{
	JobStatus findOneByStatusAndJobType(String status, JobType type);
}
