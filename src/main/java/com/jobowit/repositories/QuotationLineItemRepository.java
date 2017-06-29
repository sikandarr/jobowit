package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.QuotationLineItem;

@RepositoryRestResource
public interface QuotationLineItemRepository extends PagingAndSortingRepository<QuotationLineItem, Integer>
{

}
