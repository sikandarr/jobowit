package com.jobowit;

import com.jobowit.utils.Encryption;

public class SimpleMain
{
	public static void main(String[] args) throws Exception
	{
		Encryption e = new Encryption();
		System.out.println(e.encrypt("Random String"));
		System.out.println(e.decrypt(e.encrypt("Random String")));
	}
}
