package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Job;
import com.jobowit.domain.projections.JobProjection;

@RepositoryRestResource(excerptProjection = JobProjection.class)
public interface JobRepository extends PagingAndSortingRepository<Job, Integer>
{
	List<Job> findByCustomerPartyId(Long id);
}
