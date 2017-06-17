package com.jobowit;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import com.jobowit.domain.Party;
import com.jobowit.service.PartyService;

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
	public CommandLineRunner demo(PartyService partyService) {
		return (args) -> 
		{
			Party p1 = new Party("AJX Company Pvt Ltd", "John Flamigo");
			p1.setPhone("1234567");
			Party p2 = new Party("Bushra General Trading", "Mearaj Bhagad");
			p2.setPhone("89101112");
			Party p3 = new Party("Aprium General Trading", "Rais Bhagad");
			p3.setPhone("13141516");
			partyService.saveParty(p1);
			partyService.saveParty(p2);
			partyService.saveParty(p3);
			for (Party parties : partyService.findAllParties())
			{
				System.out.println(parties.toString());
			}
		};
	}

}
