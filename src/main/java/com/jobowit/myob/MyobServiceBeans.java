package com.jobowit.myob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.service.CompanyFileService;
import com.anahata.myob.api.service.CustomerService;
import com.anahata.myob.api.service.SupplierService;
import com.jobowit.myob.service.ContactService;

@Configuration
public class MyobServiceBeans
{	
	@Autowired
	MyobEndPointProviderServiceImpl myobEndPointProviderServiceImpl;
	
	@Bean
	public ContactService getContactService() throws Exception
	{
		ContactService contactService = new ContactService();
		contactService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return contactService;
	}
	
	@Bean
	public CustomerService getCustomerService() throws Exception
	{
		CustomerService customerService = new CustomerService();
		customerService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return customerService;
	}
	
	@Bean
	public SupplierService getSupplierService() throws Exception
	{
		SupplierService supplierService = new SupplierService();
		supplierService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return supplierService;
	}
}
