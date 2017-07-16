package com.jobowit.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.Party;

@RepositoryRestResource
@CrossOrigin
public interface PartyRepository  extends JpaRepository<Party, Long>
{
	List<Party> findByContactNameContaining(@Param("name") String contactName);
	Party findByNameContaining(@Param("name") String name);
	Party findOneByPartyId(Long id);
	Optional<Party> findOneByUuid(String uuid);
}
