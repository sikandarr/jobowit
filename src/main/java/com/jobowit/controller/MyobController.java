package com.jobowit.controller;

import java.util.List;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.generalledger.Account;
import com.anahata.myob.api.domain.v2.generalledger.TaxCode;
import com.anahata.myob.api.service.generalledger.AccountService;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.jobowit.myob.MyobSyncService;
import com.jobowit.myob.service.ContactService;

@RestController
public class MyobController
{	
	@Autowired
	private BeanFactory beanFactory;
	
	@Autowired
	private MyobSyncService myobSyncService;

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
	
	@GetMapping("/myob/syncContacts")
	public ResponseEntity<String> handleSyncContacts()
	{
		 myobSyncService.syncAllContacts();
		 return ResponseEntity.ok().body("Success");
	}
}
