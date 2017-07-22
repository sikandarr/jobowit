package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import com.jobowit.domain.JobType;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface JobTypeRepository extends PagingAndSortingRepository<JobType, String>
{

}