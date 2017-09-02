package com.jobowit.utils;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.jobowit.domain.CompanyInfo;
import com.jobowit.domain.Job;
import com.jobowit.repositories.CompanyInfoRepository;

@Component
public class Parser
{
	private static CompanyInfoRepository compInfoRepo;

	@Autowired
	private CompanyInfoRepository compInfoRepo0;

	@PostConstruct
	private void initStaticDao()
	{
		compInfoRepo = this.compInfoRepo0;
	}

	public static String jobEmail(String text, Job j)
	{
		/*
		 * %customer_name%
		 * %job_number%
		 * %job_description%
		 * %job_contact%
		 * %job_phones%
		 * %job_email%
		 * %job_address%
		 * %company_name%
		 * %company_address1%
		 * %company_address2%
		 * %company_phone1%
		 * %company_phone2%
		 * %company_email%
		 */
		CompanyInfo company = compInfoRepo.findOne("Primary");
		
		text = text.replaceAll("%customer_name%", j.getCustomerName());
		text = text.replaceAll("%job_number%", j.getJobNumber());
		text = text.replaceAll("%job_description%", j.getDescription());
		text = text.replaceAll("%job_contact%", (j.getContactName() == null || j.getContactName().isEmpty()) ? "" : j.getContactName());
		String phone = (j.getPhone() == null || j.getPhone().isEmpty()) ? "" : j.getPhone();
		String mobile = (j.getMobile() == null || j.getMobile().isEmpty()) ? "" : j.getMobile();
		text = text.replaceAll("%job_phones%", phone + (phone.equals("") ? mobile : ", " + mobile)); 
		text = text.replaceAll("%job_email%", (j.getEmail() == null || j.getEmail().isEmpty()) ? "" : j.getEmail());
		text = text.replaceAll("%job_address%", (j.getAddressStr() == null || j.getAddressStr().isEmpty()) ? "" : j.getAddressStr());
		
		text = text.replaceAll("%company_name%", company.getName() == null || company.getName().isEmpty() ? "" : company.getName());
		text = text.replaceAll("%company_email%", company.getEmail() == null || company.getEmail().isEmpty() ? "" : company.getEmail());
		text = text.replaceAll("%company_address1%", company.getAddressLine1() == null || company.getAddressLine1().isEmpty() ? "" : company.getAddressLine1());
		text = text.replaceAll("%company_address2%", company.getAddressLine2() == null || company.getAddressLine2().isEmpty() ? "" : company.getAddressLine2());
		text = text.replaceAll("%company_phone1%", company.getPhone1() == null || company.getPhone1().isEmpty() ? "" : company.getPhone1());
		text = text.replaceAll("%company_phone2%", company.getPhone2() == null || company.getPhone2().isEmpty() ? "" : company.getPhone2());
		
		return text;
		
		
	}
}
