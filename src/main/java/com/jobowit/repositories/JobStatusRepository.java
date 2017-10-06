package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.jobowit.domain.JobStatus;
import com.jobowit.domain.JobType;

@RepositoryRestResource
@CrossOrigin
public interface JobStatusRepository extends PagingAndSortingRepository<JobStatus, Integer>
{
	JobStatus findOneByJobTypeAndInitial(JobType type, char initial);
	JobStatus findByStatusAndJobType(String status, JobType type);
}
