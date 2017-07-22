package com.jobowit.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Job;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource
public interface JobRepository extends PagingAndSortingRepository<Job, Integer>
{
	List<Job> findByCustomerPartyId(Long id);
	List<Job> findByCustomerUuid(String id);
	Optional<Job> findByUuid (String uuid);
}
