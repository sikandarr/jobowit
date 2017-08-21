package com.jobowit;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.anahata.myob.api.domain.v2.sale.ServiceInvoice;
import com.google.gson.GsonBuilder;

public class SimpleMain
{
	public static void main(String[] args) throws FileNotFoundException
	{
		final String DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss";

		final GsonBuilder GSON_BUILDER = new GsonBuilder().setDateFormat(DATE_FORMAT).setPrettyPrinting().serializeNulls();
		
		String json = new Scanner(new File("C:\\Projects\\myob.json")).useDelimiter("\\Z").next();
		ServiceInvoice item = GSON_BUILDER.create().fromJson(json, ServiceInvoice.class);
		System.out.println(item.toString());
	}
}
