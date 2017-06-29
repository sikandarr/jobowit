package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.StaffRole;

@RepositoryRestResource
public interface StaffRoleRepository extends PagingAndSortingRepository<StaffRole, Integer>
{

}
