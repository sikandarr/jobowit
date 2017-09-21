package com.jobowit.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.jobowit.domain.Staff;
import com.jobowit.repositories.custom.StaffRepositoryCustom;

@RepositoryRestResource
@CrossOrigin
public interface StaffRepository extends PagingAndSortingRepository<Staff, Integer>, StaffRepositoryCustom
{
	@Override
	// @PreAuthorize("isAuthenticated() and hasPermission('Staff', 'read')")
	Page<Staff> findAll(Pageable pageable);

	@RestResource(path = "findByUsername", rel="findByUsername")
	Staff findByUserUsername(@Param ("username") String username);

	//@PostAuthorize("isAuthenticated() and (returnObject.uuid == principal.staffUuid or hasPermission('Staff', 'read'))")
	Staff findByUuid(String uuid);

	@RestResource(path = "findByOperationsRoleName", rel = "findByOperationsRoleName")
	List<Staff> findByStaffRolesStaffJobRoleRoleName(@Param("role") String role);

	@RestResource(path = "findByOperationsRoleId", rel = "findByOperationsRoleId")
	List<Staff> findByStaffRolesStaffJobRoleRoleId(@Param("id") int id);

	@Query(nativeQuery = true, value = "SELECT s.* FROM jobowit_db.staff s "
			+ "LEFT JOIN staff_not_available na ON na.staff_id = s.staff_id "
			+ "INNER JOIN staff_role sr ON sr.staff_id = s.staff_id "
			+ "WHERE ISNULL(na.non_availability_id) AND sr.role_id = 2;")
	List<Staff> findAvailableFieldWorkers();

	// dummy query to expose the search method
	// stackoverflow: https://stackoverflow.com/questions/25201306
	@Query(nativeQuery = true, value = "SELECT 1;")
	List<Staff> findBySchedule(@Param("sDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime startDtm,
			@Param("fDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime finishDtm);
}
