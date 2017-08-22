package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.access.StaffUser;

@RepositoryRestResource
@CrossOrigin
public interface StaffUserRepository extends PagingAndSortingRepository<StaffUser, Integer>
{
	StaffUser findByUsername(String username);
	StaffUser findByUsernameAndPassword(String username, String password);
}
