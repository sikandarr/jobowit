package com.jobowit.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Party;

@RepositoryRestResource
public interface PartyRepository  extends JpaRepository<Party, Long>
{
	List<Party> findByContactName(String contactName);
	Party findByName(String name);
}
