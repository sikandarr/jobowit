package com.jobowit.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.jobowit.domain.EmailSetting;

public interface EmailSettingRepositories extends PagingAndSortingRepository<EmailSetting, Integer>
{
	@Query(nativeQuery=true, value="SELECT * FROM email_setting LIMIT 0 , 1;")
	EmailSetting findTop1();
}
