package com.jobowit.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jobowit.domain.MyobToken;

@RepositoryRestResource(exported=false)
public interface MyobTokenRepository extends PagingAndSortingRepository<MyobToken, Integer>
{
	@Query(nativeQuery=true, value="SELECT * FROM myob_token ORDER BY id desc LIMIT 1")
	MyobToken findLatest();
}
