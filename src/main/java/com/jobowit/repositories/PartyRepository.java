package com.jobowit.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jobowit.domain.BusinessAccount;

@Repository
public interface BusinessAccountRepository  extends JpaRepository<BusinessAccount, Long>
{
	List<BusinessAccount> findByContactName(String contactName);
	BusinessAccount findByName(String name);
}
