package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.BillLineItem;

@RepositoryRestResource
public interface BillLineItemRepository extends PagingAndSortingRepository<BillLineItem, Integer>
{

}