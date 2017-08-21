package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.Staff;

@RepositoryRestResource
@CrossOrigin
public interface StaffRepository extends PagingAndSortingRepository<Staff, Integer>
{
	Staff findByUsername(String username);
	Staff findByUsernameAndPassword(String username, String password);
}
