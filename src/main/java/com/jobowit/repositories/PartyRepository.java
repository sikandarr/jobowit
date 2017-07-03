package com.jobowit.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jobowit.domain.Party;
import com.jobowit.domain.projections.PartyProjection;

@RepositoryRestResource(excerptProjection = PartyProjection.class)
public interface PartyRepository  extends JpaRepository<Party, Integer>
{
	List<Party> findByContactNameContaining(@Param("name") String contactName);
	Party findByNameContaining(@Param("name") String name);
	Party findOneByPartyId(Integer id);
}
