package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Job;

@RepositoryRestResource
public interface JobRepository extends PagingAndSortingRepository<Job, Integer>
{
	List<Job> findByCustomerPartyId(Integer partyId);
}
