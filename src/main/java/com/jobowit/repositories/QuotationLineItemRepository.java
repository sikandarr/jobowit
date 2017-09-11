package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.QuotationLineItem;
import com.jobowit.helpers.ByParent;

@RepositoryRestResource(exported=false)
@CrossOrigin
public interface QuotationLineItemRepository extends PagingAndSortingRepository<QuotationLineItem, Integer>
{
	@ByParent(id = "quotationId")
	List<QuotationLineItem> findByQuotationQuotationId(int id);
}
