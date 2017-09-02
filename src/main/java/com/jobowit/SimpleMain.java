package com.jobowit;

public class SimpleMain
{
	public static void main(String[] args)
	{
		String t = "Job# %job_number%";
		t = t.replaceAll("%job_number%", "CXTLI");
		System.out.println(t);
	}
}
