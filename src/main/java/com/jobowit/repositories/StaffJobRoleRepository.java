package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.StaffJobRole;

@RepositoryRestResource
@CrossOrigin
public interface StaffJobRoleRepository extends PagingAndSortingRepository<StaffJobRole, Integer>
{

}
