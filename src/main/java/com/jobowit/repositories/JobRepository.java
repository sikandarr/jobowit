package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jobowit.domain.Job;

@RepositoryRestResource
public interface JobRepository extends PagingAndSortingRepository<Job, Integer>
{

}
