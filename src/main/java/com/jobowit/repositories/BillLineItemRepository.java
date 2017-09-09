package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.BillLineItem;

@RepositoryRestResource(exported=false)
@CrossOrigin
public interface BillLineItemRepository extends PagingAndSortingRepository<BillLineItem, Integer>
{
	List<BillLineItem> findByBillBillId(int id);
}
