package com.jobowit.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.jobowit.domain.Party;

public interface PartyRepository  extends PagingAndSortingRepository<Party, Long>
{
	@Override
	//@PreAuthorize("isAuthenticated() and hasPermission('Party', 'read')")
	Page<Party> findAll(Pageable pageable);
	
	List<Party> findByContactNameContaining(@Param("name") String contactName);
	
	//@PreAuthorize("hasPermission(returnObject, 'read')")
	Party findByNameContaining(@Param("name") String name);
	
	Party findOneByPartyId(Long id);
	
	Optional<Party> findByMyobUid(String myobUid);
	
	@Query(nativeQuery=true, value="SELECT * FROM jobowit_db.party LIMIT 0, 2;")
	List<Party> findTop2();
	
	Optional<Party> findByUuid(String uuid);
	
	List<Party> findByType(@Param("type") String type);
}
