package com.jobowit.utils;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class Email
{
	public static void send(String subject, String text)
	{

		final String username = "sikandar@bhagad.com";
		final String password = "23865278";

		Properties prop = new Properties();
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.host", "smtp.zoho.com");
		prop.put("mail.smtp.port", "587");
		prop.put("mail.smtp.starttls.enable", "true");
		// prop.put("mail.debug", "true");

		Session session = Session.getInstance(prop, new javax.mail.Authenticator()
		{
			protected PasswordAuthentication getPasswordAuthentication()
			{
				return new PasswordAuthentication(username, password);
			}
		});

		try
		{
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress("sikandar@bhagad.com"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("xsikandar@gmail.com"));
			message.setSubject(subject);
			message.setText(text);
			Transport.send(message);
		}
		catch (MessagingException e)
		{
			throw new RuntimeException(e);
		}
	}
}
