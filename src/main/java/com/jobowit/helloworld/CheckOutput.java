package com.jobowit.helloworld;

import com.jobowit.domain.Party;

public class CheckOutput
{
	public static void main(String[] args)
	{
		/*String ATOM = "[a-z0-9!#$%&'*+/=?^_`{|}~-]";
		String DOMAIN = "(" + ATOM + "+(\\." + ATOM + "+)+";
		String IP_DOMAIN = "\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\]";

		String PATTERN = "^" + ATOM + "+(\\." + ATOM + "+)*@" + DOMAIN + "|" + IP_DOMAIN + ")$";
		System.out.println(PATTERN);*/
		
		Party p = new Party();
		p.setEmail("sikandar");
		System.out.println(p.getEmail());
	}
}
