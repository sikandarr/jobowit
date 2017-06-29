package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.OperationStaffInJob;

@RepositoryRestResource
public interface OperationStaffInJobRepository extends PagingAndSortingRepository<OperationStaffInJob, Integer>
{

}
