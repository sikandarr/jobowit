package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.Staff;

@RepositoryRestResource
@CrossOrigin
public interface StaffRepository extends PagingAndSortingRepository<Staff, Integer>
{
	@Override
	@PreAuthorize("isAuthenticated() and hasPermission('Staff', 'read')")
	Page<Staff> findAll(Pageable pageable);
	
	Staff findByUserUsername(String username);
	
	@PostAuthorize("isAuthenticated() and (returnObject.uuid == principal.staffUuid or hasPermission('Staff', 'read'))")
	Staff findByUuid(String uuid);
	
	@RestResource(path="findByOperationsRoleName", rel="findByOperationsRoleName")
	List<Staff> findByStaffRolesStaffJobRoleRoleName(@Param("role") String role);
	
	@RestResource(path="findByOperationsRoleId", rel="findByOperationsRoleId")
	List<Staff> findByStaffRolesStaffJobRoleRoleId(@Param("id") int id);
}
