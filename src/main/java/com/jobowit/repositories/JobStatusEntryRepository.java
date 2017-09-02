package com.jobowit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.jobowit.domain.JobStatusEntry;

@RepositoryRestResource
@CrossOrigin
public interface JobStatusEntryRepository extends PagingAndSortingRepository<JobStatusEntry, Integer>
{
	@Query(nativeQuery=true, value="SELECT * FROM job_status_entry where DATE(entry_dtm) = DATE(NOW())")
	@RestResource(path="todaysStatusEntries", rel="todaysStatusEntries")
	List<JobStatusEntry> findTodaysStatusEntries();
}
