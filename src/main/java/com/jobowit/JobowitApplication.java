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
			partyService.saveParty(new Party("AJX Company Pvt Ltd", "John Flamigo"));
			partyService.saveParty(new Party("Bushra General Trading", "Mearaj Bhagad"));
			partyService.saveParty(new Party("Aprium General Trading", "Rais Bhagad"));
			for (Party parties : partyService.findAllParties())
			{
				System.out.println(parties.toString());
			}
		};
	}

}
