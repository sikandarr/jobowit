package com.jobowit.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.Quotation;

@RepositoryRestResource
@CrossOrigin
public interface QuotationRepository extends PagingAndSortingRepository<Quotation, Integer>
{

}
