package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;

import com.jobowit.domain.Party;
import com.jobowit.domain.projections.PartyProjection;

@RepositoryRestResource(excerptProjection = PartyProjection.class)
public interface PartyRepository  extends JpaRepository<Party, Integer>
{
	@Override
	@PreAuthorize("isAuthenticated() and hasPermission('Party', 'read')")
	Page<Party> findAll(Pageable pageable);
	
	List<Party> findByContactNameContaining(@Param("name") String contactName);
	@PreAuthorize("hasPermission(returnObject, 'read')")
	Party findByNameContaining(@Param("name") String name);
	Party findOneByPartyId(Integer id);
}
