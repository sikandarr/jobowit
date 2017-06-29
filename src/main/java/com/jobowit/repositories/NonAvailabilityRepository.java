package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.NonAvailability;

@RepositoryRestResource
public interface NonAvailabilityRepository extends PagingAndSortingRepository<NonAvailability, Integer>
{

}
