package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.MyobCode;

@RepositoryRestResource(exported=false)
public interface MyobCodeRepository extends PagingAndSortingRepository<MyobCode, Integer>
{

}
