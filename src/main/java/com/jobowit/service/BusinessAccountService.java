package com.jobowit.service;

import com.jobowit.domain.BusinessAccount;
import com.jobowit.repositories.BusinessAccountRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("BusinessAccountService")
@Transactional
public class BusinessAccountService
{
	@Autowired
	private BusinessAccountRepository businessAccountRepository;

	public BusinessAccount findById(Long id)
	{
		return businessAccountRepository.findOne(id);
	}

	public BusinessAccount findByName(String name)
	{
		return businessAccountRepository.findByName(name);
	}

	public void saveBusinessAccount(BusinessAccount businessAccount)
	{
		businessAccountRepository.save(businessAccount);
	}

	public void updateBusinessAccount(BusinessAccount businessAccount)
	{
		saveBusinessAccount(businessAccount);
	}

	public void deleteBusinessAccountById(Long id)
	{
		businessAccountRepository.delete(id);
	}

	public void deleteAllBusinessAccounts()
	{
		businessAccountRepository.deleteAll();
	}

	public List<BusinessAccount> findAllBusinessAccounts()
	{
		return businessAccountRepository.findAll();
	}

	public boolean isBusinessAccountExist(BusinessAccount businessAccount)
	{
		return findByName(businessAccount.getName()) != null;
	}

}
