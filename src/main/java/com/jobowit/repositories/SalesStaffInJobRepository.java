package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.SalesStaffInJob;

@RepositoryRestResource
public interface SalesStaffInJobRepository extends PagingAndSortingRepository<SalesStaffInJob, Integer>
{

}
