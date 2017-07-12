package com.jobowit;

import java.util.Locale;

public class SimpleMain
{
	public static void main(String[] args)
	{
		for (String s : Locale.getISOCountries())
			System.out.println(s);
	}
}
