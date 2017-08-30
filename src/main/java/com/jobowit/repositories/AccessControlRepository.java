package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jobowit.domain.access.AccessControl;

@RepositoryRestResource
public interface AccessControlRepository extends PagingAndSortingRepository<AccessControl, Integer>
{

}
