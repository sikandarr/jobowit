package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.jobowit.domain.JobType;

public interface JobTypeRepository extends PagingAndSortingRepository<JobType, Integer>
{

}