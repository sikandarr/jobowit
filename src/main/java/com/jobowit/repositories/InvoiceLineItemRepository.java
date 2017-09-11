package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.InvoiceLineItem;
import com.jobowit.helpers.ByParent;

@RepositoryRestResource(exported=false)
@CrossOrigin
public interface InvoiceLineItemRepository extends PagingAndSortingRepository<InvoiceLineItem, Integer>
{
	@ByParent(id = "invoiceId")
	List<InvoiceLineItem> findByInvoiceInvoiceId(int id);
}
