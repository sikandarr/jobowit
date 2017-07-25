package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.JobStatusEntry;

@RepositoryRestResource
public interface JobStatusEntryRepository extends PagingAndSortingRepository<JobStatusEntry, Integer>
{

}
