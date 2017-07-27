package com.jobowit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.web.bind.annotation.RestController;
import com.jobowit.domain.Party;
import com.jobowit.domain.UploadedFile;
import com.jobowit.domain.projections.PartyProjection;

@SpringBootApplication
@RestController
@EntityScan(basePackageClasses =
	{ JobowitApplication.class, Jsr310JpaConverters.class })
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
				resource.add(new Link(resource.getId().getHref() + "/invoices").withRel("invoices"));
				return resource;
			}
		};
	}
	
	@Bean
	public ResourceProcessor<Resource<UploadedFile>> uploadedFileProcessor()
	{
		return new ResourceProcessor<Resource<UploadedFile>>()
		{
			@Override
			public Resource<UploadedFile> process(Resource<UploadedFile> resource)
			{
				resource.add(new Link(resource.getId().getHref() + "/download").withRel("download"));
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

	/*
	 * @RequestMapping("/user") public Principal user(Principal user) { return
	 * user; }
	 */

}
