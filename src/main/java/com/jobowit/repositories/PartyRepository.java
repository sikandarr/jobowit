package com.jobowit.repositories;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.Party;

@RepositoryRestResource
@CrossOrigin
public interface PartyRepository  extends PagingAndSortingRepository<Party, Long>
{
	List<Party> findByContactNameContaining(@Param("name") String contactName);
	Party findByNameContaining(@Param("name") String name);
	Optional<Party> findByUuid(String uuid);
	Optional<Party> findByMyobUid(String uuid);
	@Query(nativeQuery=true, value="SELECT UPDATE_TIME FROM information_schema.tables WHERE TABLE_SCHEMA = 'jobowit_db' AND TABLE_NAME = 'party'")
	Timestamp lastUpdateTime();
	@Query(nativeQuery=true, value="SELECT * FROM jobowit_db.party LIMIT 0, 10;")
	List<Party> findTop10();
}
