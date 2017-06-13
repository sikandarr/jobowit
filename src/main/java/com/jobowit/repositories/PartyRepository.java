package com.jobowit.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobowit.domain.Party;

@Repository
public interface PartyRepository  extends JpaRepository<Party, Long>
{
	List<Party> findByContactName(String contactName);
	Party findByName(String name);
}
