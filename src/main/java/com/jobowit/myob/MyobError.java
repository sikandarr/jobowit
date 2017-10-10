package com.jobowit.myob;

public class MyobError
{
	private String message;
	private String resolution;
	public static final String AUTH_URL = "https://secure.myob.com/oauth2/account/authorize?client_id=vzbha48uyde74m4xtd9xuduz&"
			+ "redirect_uri=http%3A%2F%2Fjobowit.com%3A8081%2Fmyob&response_type=code&scope=CompanyFile";
	private String authUrl;

	public MyobError(String message, String resolution, String url)
	{
		this.message = message;
		this.resolution = resolution;
		this.authUrl = url;
	}

	public String getMessage()
	{
		return message;
	}

	public String getResolution()
	{
		return resolution;
	}

	public String getAuthUrl()
	{
		return authUrl;
	}
}
