package com.jobowit.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.domain.v2.generalledger.Account;
import com.anahata.myob.api.domain.v2.generalledger.TaxCode;
import com.anahata.myob.api.domain.v2.inventory.Item;
import com.anahata.myob.api.domain.v2.sale.ServiceInvoice;
import com.anahata.myob.api.service.ServiceInvoiceService;
import com.anahata.myob.api.service.generalledger.AccountService;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.jobowit.repositories.MyobTokenRepository;
import com.jobowit.domain.MyobToken;
import com.jobowit.exception.MyobAccessException;
import com.jobowit.exception.MyobServiceException;
import com.jobowit.myob.MyobBillService;
import com.jobowit.myob.MyobError;
import com.jobowit.myob.MyobInvoiceService;
import com.jobowit.myob.MyobService;
import com.jobowit.myob.MyobSyncService;
import com.jobowit.myob.domainservice.ContactService;
import com.jobowit.myob.domainservice.ItemService;

@RestController
public class MyobController
{	
	
	@Autowired
	private MyobTokenRepository myobTokenRepo;
	
	@Autowired
	private MyobService m;
	
	@Autowired
	private MyobSyncService myobSyncService;
	
	@Autowired
	MyobInvoiceService myobInvoiceService;
	
	@Autowired
	MyobBillService myobBillService;
	
	@GetMapping("/myob")
	public ResponseEntity<String> handleMyobCode(@RequestParam("code") String code)
	{
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost post = new HttpPost("https://secure.myob.com/oauth2/v1/authorize");
		List<NameValuePair> arguments = new ArrayList<>(3);
		arguments.add(new BasicNameValuePair("client_id", "vzbha48uyde74m4xtd9xuduz"));
		arguments.add(new BasicNameValuePair("client_secret", "kckU3f6SJbKhe6MNrBTzYKSm"));
		arguments.add(new BasicNameValuePair("scope", "CompanyFile"));
		arguments.add(new BasicNameValuePair("code", code));
		arguments.add(new BasicNameValuePair("redirect_uri", "http://localhost:8081/myob"));
		arguments.add(new BasicNameValuePair("grant_type", "authorization_code"));
		
		ObjectMapper om = new ObjectMapper();
		om.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
		om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

		try
		{
			post.setEntity(new UrlEncodedFormEntity(arguments));
			HttpResponse response = client.execute(post);
			MyobToken myobToken = om.readValue(response.getEntity().getContent(), MyobToken.class);
			myobToken.setCreatedOn(new Timestamp(new Date().getTime()));
			myobTokenRepo.save(myobToken);
		}
		catch (Exception e)
		{
			throw new MyobServiceException("Couldn't process the code");
		}
		return ResponseEntity.ok().body("Success");
	}

	@GetMapping("/myob/cs")
	public ResponseEntity<List<Contact>> handleCotactService()
	{
		return ResponseEntity.ok().body(m.getService(ContactService.class).findAll());
	}
	
	@GetMapping("/myob/accounts")
	public ResponseEntity<List<Account>> handleAccountService()
	{
		return ResponseEntity.ok().body(m.getService(AccountService.class).findAll());
	}
	
	@GetMapping("/myob/taxCodes")
	public ResponseEntity<List<TaxCode>> handleTaxCodeService()
	{
		return ResponseEntity.ok().body(m.getService(TaxCodeService.class).findAll());
	}
	
	@GetMapping("/myob/items")
	public ResponseEntity<List<Item>> handleItemService()
	{
		return ResponseEntity.ok().body(m.getService(ItemService.class).findAll());
	}
	
	@GetMapping("/myob/invoices/{uuid}")
	public ResponseEntity<ServiceInvoice> handleInvoiceService(@PathVariable String uuid)
	{
		return ResponseEntity.ok().body(m.getService(ServiceInvoiceService.class).find(uuid));
	}
	
	@GetMapping("/myob/invoices")
	public ResponseEntity<List<ServiceInvoice>> handleInvoiceService()
	{
		return ResponseEntity.ok().body(m.getService(ServiceInvoiceService.class).findAll());
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
	
	@GetMapping("/myob/serviceStatus")
	public ResponseEntity<String> handleMyobServiceStatus()
	{
		try
		{
			m.getMyobEndPointProvider();
			return ResponseEntity.ok().body("+OK Connected");
		}
		catch (Exception e)
		{
			return ResponseEntity.ok().body("Not connected: " + e.getMessage());
		}
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<MyobError> handleExceptions(RuntimeException e)
	{
		if (e instanceof MyobAccessException)
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
				.body(new MyobError(e.getMessage(), "Try authorizing", MyobError.AUTH_URL));
		else
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new MyobError(e.getMessage(), "none", "none"));
	}
}