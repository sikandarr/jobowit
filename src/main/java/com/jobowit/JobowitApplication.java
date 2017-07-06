package com.jobowit;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.web.bind.annotation.RestController;
import com.jobowit.domain.Party;
import com.jobowit.domain.projections.PartyProjection;
import com.jobowit.repositories.PartyInvoiceController;

@SpringBootApplication
@RestController
public class JobowitApplication
{
	public static void main(String[] args)
	{
		System.out.println("Starting Jobowit; please wait for confirmation...");
		SpringApplication.run(JobowitApplication.class, args);
		System.out.println("application started");
	}

	@Bean
	public ProjectionFactory getProjectionFactory()
	{
		return new SpelAwareProxyProjectionFactory();
	}

	@Bean
	public ResourceProcessor<Resource<Party>> personProcessor()
	{
		return new ResourceProcessor<Resource<Party>>()
		{
			@Override
			public Resource<Party> process(Resource<Party> resource)
			{
				Party p = resource.getContent();
				resource.add(
						linkTo(methodOn(PartyInvoiceController.class).getInvoices(p.getPartyId())).withRel("invoices"));
				return resource;
			}
		};
	}

	@Bean
	public ResourceProcessor<Resource<PartyProjection>> partyProjectionProcessor()
	{
		return new ResourceProcessor<Resource<PartyProjection>>()
		{
			@Override
			public Resource<PartyProjection> process(Resource<PartyProjection> resource)
			{
				resource.add(new Link(resource.getId().getHref() + "/invoices").withRel("invoices"));
				return resource;
			}
		};
	}

	/*@RequestMapping("/user")
	public Principal user(Principal user)
	{
		return user;
	}*/

}
