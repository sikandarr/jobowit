package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.RecurringAvailability;

@RepositoryRestResource
public interface RecurringAvailabilityRepository extends PagingAndSortingRepository<RecurringAvailability, Integer>
{

}
