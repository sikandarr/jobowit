package com.jobowit.controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Date;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.domain.v2.contact.Contact;
import com.anahata.myob.api.service.CompanyFileService;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.jobowit.domain.MyobToken;
import com.jobowit.myob.MyobService;
import com.jobowit.myob.service.ContactService;
import com.jobowit.repositories.MyobTokenRepository;

@RestController
public class MyobController
{
	@Autowired
	private MyobTokenRepository myobTokenRepo;
	
	@Autowired
	private BeanFactory beanFactory;
	
	@Autowired
	private MyobService myobService;

	@GetMapping("/myob/cfs")
	public CompanyFile[] handleCompanyFileService() throws Exception
	{
		CompanyFileService cfs = beanFactory.getBean(CompanyFileService.class);
		return cfs.findAll();
	}

	@GetMapping("/myob/refresh")
	public ResponseEntity<String> handleMyobRefreshToken()
	{
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost post = new HttpPost("https://secure.myob.com/oauth2/v1/authorize");
		MyobToken t = myobTokenRepo.findLatest();

		// Create some NameValuePair for HttpPost parameters
		List<NameValuePair> arguments = new ArrayList<>(3);
		arguments.add(new BasicNameValuePair("client_id", "vzbha48uyde74m4xtd9xuduz"));
		arguments.add(new BasicNameValuePair("client_secret", "kckU3f6SJbKhe6MNrBTzYKSm"));
		arguments.add(new BasicNameValuePair("refresh_token", t.getRefreshToken()));
		arguments.add(new BasicNameValuePair("grant_type", "refresh_token"));

		try
		{
			post.setEntity(new UrlEncodedFormEntity(arguments));
			HttpResponse response = client.execute(post);
			ObjectMapper om = new ObjectMapper();
			om.setPropertyNamingStrategy(PropertyNamingStrategy.SNAKE_CASE);
			om.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			MyobToken myobToken = om.readValue(response.getEntity().getContent(), MyobToken.class);
			myobToken.setCreatedOn(new Timestamp(new Date().getTime()));
			myobTokenRepo.save(myobToken);
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
		return ResponseEntity.ok().body("Success");
	}

	@GetMapping("/myob/api")
	public void handleMyobApiRequest() throws ClientProtocolException, IOException
	{
		MyobToken t = myobTokenRepo.findLatest();
		HttpClient client = HttpClientBuilder.create().build();
		HttpGet post = new HttpGet("https://api.myob.com/accountright/");
		post.addHeader("Authorization", "Bearer " + t.getAccessToken());
		post.addHeader("x-myobapi-cftoken", "" + Base64.getEncoder().encode(("Administrator" + ":" + "").getBytes()));
		post.addHeader("x-myobapi-key", "vzbha48uyde74m4xtd9xuduz");
		post.addHeader("x-myobapi-version", "v2");
		post.addHeader("Content-Type", "text/json");
		System.out.println(client.execute(post));
	}

	@GetMapping("/myob/cs")
	public ResponseEntity<List<Contact>> handleCotactService()
	{
		ContactService cs = beanFactory.getBean(ContactService.class);
		return ResponseEntity.ok().body(cs.find("Type eq 'Customer' or Type eq 'Supplier'", null, null, null));

	}
	
	@GetMapping("/myob/syncContacts")
	public ResponseEntity<String> handleSyncContacts()
	{
		 myobService.syncContacts();
		 return ResponseEntity.ok().body("Success");
	}
}
