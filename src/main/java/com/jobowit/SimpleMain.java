package com.jobowit;

import com.jobowit.domain.Address;

public class SimpleMain
{
	public static void main(String[] args) throws Exception
	{
		Address a = new Address("8 willsmore street:beverley:gujarat:5009:australia");
		System.out.println(a);
		System.out.println(a.getCountry());
		a.setStreet1("10 wilssmore street");
		a.setCity("beverley");
		a.setPostCode("5009");
		a.setState("vic");
		a.setCountry("australia");
		System.out.println(a);
		System.out.println(a.getCountry());
	}
}
