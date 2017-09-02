package com.jobowit.utils;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EncryptionService
{
	private static Encryption e;
	
	@Autowired
	Encryption e0;
	
	@PostConstruct
	private void initStatic()
	{
		e = this.e0;
	}
	
	public static String encrypt(String m) throws Exception
	{
		return e.encrypt(m);
	}
	
	public static String decrypt(String m) throws Exception
	{
		return e.decrypt(m);
	}
}
