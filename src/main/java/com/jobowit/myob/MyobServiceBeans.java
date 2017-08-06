package com.jobowit.myob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.service.CompanyFileService;
import com.jobowit.myob.service.ContactService;

@Configuration
public class MyobServiceBeans
{	
	@Autowired
	MyobEndPointProviderServiceImpl myobEndPointProviderServiceImpl;
	
	public CompanyFileService getCompanyFileService()
	{
		CompanyFileService companyFileService = new CompanyFileService();
		companyFileService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return companyFileService;
	}
	
	public CompanyFile getCompanyFile() throws Exception
	{
		return getCompanyFileService().findAll()[0];
	}
	
	@Bean
	public ContactService getContactService() throws Exception
	{
		myobEndPointProviderServiceImpl.setUid(getCompanyFile().getId());
		ContactService contactService = new ContactService();
		contactService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return contactService;
	}
}
