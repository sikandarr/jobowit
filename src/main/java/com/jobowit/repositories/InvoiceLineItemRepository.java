package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.InvoiceLineItem;

@RepositoryRestResource
public interface InvoiceLineItemRepository extends PagingAndSortingRepository<InvoiceLineItem, Integer>
{

}
