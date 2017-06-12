package com.jobowit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.jobowit.domain.BusinessAccount;
import com.jobowit.service.BusinessAccountService;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;

@SpringBootApplication
public class JobowitApplication
{
	//private static final Logger log = LoggerFactory.getLogger(JobowitApplication.class);

	public static void main(String[] args)
	{
		SpringApplication.run(JobowitApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner demo(BusinessAccountService bas) {
		return (args) -> 
		{
			bas.saveBusinessAccount(new BusinessAccount("AJX Company Pvt Ltd", "John Flamigo"));
			for (BusinessAccount bAccounts : bas.findAllBusinessAccounts())
			{
				System.out.println(bAccounts.toString());
			}
		};
	}

}
