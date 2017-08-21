package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.jobowit.domain.MyobSyncDates;

@RepositoryRestResource(exported=false)
public interface MyobSyncDatesRepository extends PagingAndSortingRepository<MyobSyncDates, Long>
{
}
