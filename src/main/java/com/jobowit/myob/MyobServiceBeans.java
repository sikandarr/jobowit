package com.jobowit.myob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.anahata.myob.api.service.CustomerService;
import com.anahata.myob.api.service.ServiceInvoiceService;
import com.anahata.myob.api.service.SupplierService;
import com.anahata.myob.api.service.generalledger.AccountService;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.jobowit.myob.service.ContactService;
import com.jobowit.myob.service.ItemBillService;
import com.jobowit.myob.service.ItemService;

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
	
	@Bean
	public AccountService getAccountService() throws Exception
	{
		AccountService accountService = new AccountService();
		accountService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return accountService;
	}
	
	@Bean
	public TaxCodeService getTaxCodeService() throws Exception
	{
		TaxCodeService taxCodeService = new TaxCodeService();
		taxCodeService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return taxCodeService;
	}
	
	@Bean
	public  ServiceInvoiceService getServiceInvoiceService() throws Exception
	{
		ServiceInvoiceService serviceInvoiceService = new ServiceInvoiceService();
		serviceInvoiceService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return serviceInvoiceService;
	}
	
	@Bean
	public  ItemBillService getItemBillService() throws Exception
	{
		ItemBillService itemBillService = new ItemBillService();
		itemBillService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return itemBillService;
	}
	
	@Bean
	public  ItemService getItemService() throws Exception
	{
		ItemService itemService = new ItemService();
		itemService.setEndPointProvider(myobEndPointProviderServiceImpl);
		return itemService;
	}
}
