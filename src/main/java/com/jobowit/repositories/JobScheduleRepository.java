package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.JobSchedule;

@RepositoryRestResource
@CrossOrigin
public interface JobScheduleRepository extends PagingAndSortingRepository<JobSchedule, Integer>
{

}
