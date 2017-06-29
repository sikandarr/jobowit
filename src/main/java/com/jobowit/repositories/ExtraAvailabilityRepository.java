package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.ExtraAvailability;

@RepositoryRestResource
public interface ExtraAvailabilityRepository extends PagingAndSortingRepository<ExtraAvailability, Integer>
{

}
