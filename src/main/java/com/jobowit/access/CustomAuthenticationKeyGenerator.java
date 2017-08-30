package com.jobowit.access;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.security.oauth2.common.exceptions.InvalidClientException;
import org.springframework.security.oauth2.common.util.OAuth2Utils;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.OAuth2Request;
import org.springframework.security.oauth2.provider.token.AuthenticationKeyGenerator;

public class CustomAuthenticationKeyGenerator implements AuthenticationKeyGenerator
{
	private static final String CLIENT_ID = "client_id";

	private static final String SCOPE = "scope";

	private static final String USERNAME = "username";

	@Override
	public String extractKey(OAuth2Authentication authentication)
	{
		System.out.println("CUSTOM_AUTHENTICATION_KEY_GENERATOR");
		Map<String, String> values = new LinkedHashMap<String, String>();
		OAuth2Request authorizationRequest = authentication.getOAuth2Request();
		
		if (!authentication.isClientOnly())
		{
			values.put(USERNAME, authentication.getName());
		}
		values.put(CLIENT_ID, authorizationRequest.getClientId());
		
		if (authorizationRequest.getScope() != null)
		{
			values.put(SCOPE, OAuth2Utils.formatParameterList(authorizationRequest.getScope()));
		}

		String deviceId = authorizationRequest.getRequestParameters().get("device_id");
		
		if (deviceId != null && !deviceId.isEmpty())
		{
			values.put("device_id", deviceId);
		}
		else
		{
			throw new InvalidClientException("Device ID is required");
		}

		MessageDigest digest;
		try
		{
			digest = MessageDigest.getInstance("MD5");
		}
		catch (NoSuchAlgorithmException e)
		{
			throw new IllegalStateException("MD5 algorithm not available.  Fatal (should be in the JDK).");
		}

		try
		{
			byte[] bytes = digest.digest(values.toString().getBytes("UTF-8"));
			System.out.println(values.toString());
			return String.format("%032x", new BigInteger(1, bytes));
		}
		catch (UnsupportedEncodingException e)
		{
			throw new IllegalStateException("UTF-8 encoding not available.  Fatal (should be in the JDK).");
		}
	}
}