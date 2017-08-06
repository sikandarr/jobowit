package com.jobowit.myob;

import java.io.IOException;
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
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.jobowit.domain.MyobToken;
import com.jobowit.repositories.MyobTokenRepository;

public class MyobTest2
{
	MyobTokenRepository myobTokenRepo;

	public MyobTest2(MyobTokenRepository myobTokenRepo)
	{
		this.myobTokenRepo = myobTokenRepo;
	}

	public void run(String code)
	{
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost post = new HttpPost("https://secure.myob.com/oauth2/v1/authorize");

		// Create some NameValuePair for HttpPost parameters
		List<NameValuePair> arguments = new ArrayList<>(3);
		arguments.add(new BasicNameValuePair("client_id", "vzbha48uyde74m4xtd9xuduz"));
		arguments.add(new BasicNameValuePair("client_secret", "kckU3f6SJbKhe6MNrBTzYKSm"));
		arguments.add(new BasicNameValuePair("scope", "CompanyFile"));
		arguments.add(new BasicNameValuePair("code", code));
		arguments.add(new BasicNameValuePair("redirect_uri", "http://localhost:8081/myob"));
		arguments.add(new BasicNameValuePair("grant_type", "authorization_code"));

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
	}
}
