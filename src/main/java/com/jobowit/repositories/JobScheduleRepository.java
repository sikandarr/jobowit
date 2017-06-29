package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.JobSchedule;

@RepositoryRestResource
public interface JobScheduleRepository extends PagingAndSortingRepository<JobSchedule, Integer>
{

}
