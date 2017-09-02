package com.jobowit.utils;

import java.security.InvalidKeyException;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import org.springframework.stereotype.Component;

@Component
public class Encryption
{
	KeyPair myPair = null;

	public Encryption() throws NoSuchAlgorithmException
	{
		KeyPairGenerator kpg = KeyPairGenerator.getInstance("RSA");
		myPair = kpg.generateKeyPair();
	}

	public String encrypt(String m) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException,
			IllegalBlockSizeException, BadPaddingException
	{
		Cipher c = Cipher.getInstance("RSA");
		c.init(Cipher.ENCRYPT_MODE, myPair.getPublic());
		byte[] encryptedBytes = c.doFinal(m.getBytes());
		return new String(Base64.getEncoder().encode(encryptedBytes));
	}

	public String decrypt(String m) throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException,
			IllegalBlockSizeException, BadPaddingException
	{
		byte[] encryptedBytes = Base64.getDecoder().decode(m);
		Cipher c = Cipher.getInstance("RSA");
		c.init(Cipher.DECRYPT_MODE, myPair.getPrivate());
		byte[] recoveredBytes = c.doFinal(encryptedBytes);
		return new String(recoveredBytes);
	}
}
