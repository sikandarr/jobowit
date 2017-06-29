package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Bill;

@RepositoryRestResource
public interface BillRepository extends PagingAndSortingRepository<Bill, Integer>
{

}
