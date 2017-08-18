package com.jobowit.controller;

import java.util.List;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.generalledger.Account;
import com.anahata.myob.api.domain.v2.generalledger.TaxCode;
import com.anahata.myob.api.domain.v2.inventory.Item;
import com.anahata.myob.api.domain.v2.sale.ServiceInvoice;
import com.anahata.myob.api.service.ServiceInvoiceService;
import com.anahata.myob.api.service.generalledger.AccountService;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.jobowit.myob.MyobBillService;
import com.jobowit.myob.MyobInvoiceService;
import com.jobowit.myob.MyobSyncService;
import com.jobowit.myob.service.ContactService;
import com.jobowit.myob.service.ItemService;

@RestController
public class MyobController
{	
	@Autowired
	private BeanFactory beanFactory;
	
	@Autowired
	private MyobSyncService myobSyncService;
	
	@Autowired
	MyobInvoiceService myobInvoiceService;
	
	@Autowired
	MyobBillService myobBillService;

	@GetMapping("/myob/cs")
	public ResponseEntity<List<Contact>> handleCotactService()
	{
		ContactService cs = beanFactory.getBean(ContactService.class);
		return ResponseEntity.ok().body(cs.findAll());

	}
	
	@GetMapping("/myob/accounts")
	public ResponseEntity<List<Account>> handleAccountService()
	{
		AccountService as = beanFactory.getBean(AccountService.class);
		return ResponseEntity.ok().body(as.findAll());

	}
	
	@GetMapping("/myob/taxCodes")
	public ResponseEntity<List<TaxCode>> handleTaxCodeService()
	{
		TaxCodeService ts = beanFactory.getBean(TaxCodeService.class);
		return ResponseEntity.ok().body(ts.findAll());
	}
	
	@GetMapping("/myob/items")
	public ResponseEntity<List<Item>> handleItemService()
	{
		ItemService ts = beanFactory.getBean(ItemService.class);
		return ResponseEntity.ok().body(ts.findAll());
	}
	
	@GetMapping("/myob/invoices/{uuid}")
	public ResponseEntity<ServiceInvoice> handleInvoiceService(@PathVariable String uuid)
	{
		ServiceInvoiceService ts = beanFactory.getBean(ServiceInvoiceService.class);
		return ResponseEntity.ok().body(ts.find(uuid));
	}
	
	@GetMapping("/myob/invoices")
	public ResponseEntity<List<ServiceInvoice>> handleInvoiceService()
	{
		ServiceInvoiceService ts = beanFactory.getBean(ServiceInvoiceService.class);
		return ResponseEntity.ok().body(ts.findAll());
	}
	
	@GetMapping("/myob/syncContacts")
	public ResponseEntity<String> handleSyncContacts()
	{
		 myobSyncService.syncAllContacts();
		 return ResponseEntity.ok().body("Success");
	}
	
	@GetMapping("/api/invoices/{id}/exportToMyob")
	public ResponseEntity<String> handleInvoiceExport(@PathVariable int id)
	{
		return ResponseEntity.ok().body(myobInvoiceService.export(id));
	}
	
	@GetMapping("/api/bills/{id}/exportToMyob")
	public ResponseEntity<String> handleBillExport(@PathVariable int id)
	{
		return ResponseEntity.ok().body(myobBillService.export(id));
	}
}
