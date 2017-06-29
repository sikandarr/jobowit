package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.jobowit.domain.Quotation;

@RepositoryRestResource
public interface QuotationRepository extends PagingAndSortingRepository<Quotation, Integer>
{

}
