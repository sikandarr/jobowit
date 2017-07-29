package com.jobowit.myob;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

public class MyobTest2
{
	public static void main(String[] args)
	{
		HttpClient client = HttpClientBuilder.create().build();
		HttpPost post = new HttpPost("https://secure.myob.com/oauth2/v1/authorize");
		
		String code = "8-5Q!IAAAAKBI_STDKwx3fOW51Zo5xmhnMCbQvugNobQN4N3vdus7AQEAAAEx8abRjbNh9PjOHQ0VU3orSIY3nlUESpnT4x-A3I-Y80bs_gDI-LBOoIliOz_vB2mDspV9gMkQ1UlbXMkkOSzkS76nvab6FZIM6fKs-ls2CoiXy6y_lRu3gCGzjVX-gtWdI41m7s7ki0sLNnS3Y1lPfYenYvzP6hepV8v7saJe-NIcYAdeYmYErK5pj8x2zQZrLTKzk2gpbSFAuvcyc2jNWWgpGgPwimFW3l4ERVjW4U0pqwWTn9OLmRElkRMBh-9Y_9xi_0lZSL6lyc2J0SP9RQ4869FK935wJ8ztNrONQEU9nvKCKuXeAes9mN_p7pGfYZpQRJ-4VdHtwt2gduBA"; 

		// Create some NameValuePair for HttpPost parameters
		List<NameValuePair> arguments = new ArrayList<>(3);
		arguments.add(new BasicNameValuePair("client_id", "vzbha48uyde74m4xtd9xuduz"));
		arguments.add(new BasicNameValuePair("client_secret", "kckU3f6SJbKhe6MNrBTzYKSm"));
		arguments.add(new BasicNameValuePair("scope", "la.global"));
		arguments.add(new BasicNameValuePair("code", code));
		arguments.add(new BasicNameValuePair("redirect_uri", "http://jobowit.com:4200/parties"));
		arguments.add(new BasicNameValuePair("grant_type", "authorization_code"));

		try
		{
			post.setEntity(new UrlEncodedFormEntity(arguments));
			HttpResponse response = client.execute(post);

			// Print out the response message
			System.out.println(EntityUtils.toString(response.getEntity()));
		}
		catch (IOException e)
		{
			e.printStackTrace();
		}
	}
}
