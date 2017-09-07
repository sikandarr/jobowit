package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.StaffJobRole;

@RepositoryRestResource
@CrossOrigin
public interface StaffJobRoleRepository extends PagingAndSortingRepository<StaffJobRole, Integer>
{
	@Query(nativeQuery=true, value="SELECT * FROM jobowit_db.staff_job_role where role_name != 'Field Work';")
	List<StaffJobRole> findAllExceptFieldWork();
}
