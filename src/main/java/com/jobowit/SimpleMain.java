package com.jobowit;

import com.jobowit.utils.RandomString;

public class SimpleMain
{
	public static void main(String[] args)
	{
		for (int i=0; i<5000; i++)
		{
			System.out.println(RandomString.generate(6));
		}
	}
}
