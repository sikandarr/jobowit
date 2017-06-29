package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.StaffJobRole;

@RepositoryRestResource
public interface StaffJobRoleRepository extends PagingAndSortingRepository<StaffJobRole, Integer>
{

}
