package com.jobowit.repositories.views;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jobowit.domain.views.Cost;

@RepositoryRestResource
@CrossOrigin
@RequestMapping(method = RequestMethod.GET)
public interface CostRepository extends PagingAndSortingRepository<Cost, Integer>
{
	
}
