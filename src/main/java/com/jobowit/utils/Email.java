package com.jobowit.utils;

import java.util.Properties;

import javax.annotation.PostConstruct;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jobowit.domain.EmailSetting;
import com.jobowit.repositories.EmailSettingRepositories;

@Component
public class Email
{
	private static EmailSettingRepositories es;
	@Autowired EmailSettingRepositories es0;
	
	@PostConstruct
	private void initStatic()
	{
		es = this.es0;
	}
	
	public static void send(String subject, String text, String toAddress) throws Exception
	{
		EmailSetting e = es.findTop1();

		final String username = e.getEmailAddress();
		final String password = e.getPassword();

		Properties prop = new Properties();
		prop.put("mail.smtp.auth", "true");
		prop.put("mail.smtp.host", e.getSmtpHost());
		prop.put("mail.smtp.port", "" + e.getSmtpPort());
		prop.put("mail.smtp.starttls.enable", "" + e.isSmtpStarttlsEnable());
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
			message.setFrom(new InternetAddress("sikandar@bhagad.com", "Exalted Property Services"));
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toAddress));
			message.setSubject(subject);
			message.setText(text);
			message.setContent(text, "text/html; charset=utf-8");
			Transport.send(message);
		}
		catch (MessagingException ex)
		{
			throw new RuntimeException(ex);
		}
	}
}
