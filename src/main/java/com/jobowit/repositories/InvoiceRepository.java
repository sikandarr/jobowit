package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Invoice;

@RepositoryRestResource
public interface InvoiceRepository extends PagingAndSortingRepository<Invoice, Integer>
{

}
