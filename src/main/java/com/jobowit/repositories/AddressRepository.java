package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Address;

@RepositoryRestResource
public interface AddressRepository extends PagingAndSortingRepository<Address, Integer>
{

}