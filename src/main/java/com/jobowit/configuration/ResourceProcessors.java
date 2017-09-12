package com.jobowit.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.PagedResources;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;

import com.jobowit.domain.Bill;
import com.jobowit.domain.Invoice;
import com.jobowit.domain.Party;
import com.jobowit.domain.UploadedFile;

@Configuration
public class ResourceProcessors
{
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
	public ResourceProcessor<PagedResources<Resource<Party>>> partyProcessor()
	{
		return new ResourceProcessor<PagedResources<Resource<Party>>>()
		{
			@Override
			public PagedResources<Resource<Party>> process(PagedResources<Resource<Party>> pagedResources)
			{
				String selfLink = pagedResources.getId().getHref();
				selfLink = selfLink.substring(0, selfLink.indexOf('{'));
				pagedResources.add(new Link(selfLink + "/customerReport/pdf").withRel("downloads"));
				pagedResources.add(new Link(selfLink + "/supplierReport/pdf").withRel("downloads"));
				return pagedResources;
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
	public ResourceProcessor<Resource<Invoice>> addLinksToInvoice()
	{
		return new ResourceProcessor<Resource<Invoice>>()
		{
			@Override
			public Resource<Invoice> process(Resource<Invoice> resource)
			{
				resource.add(new Link(resource.getId().getHref() + "/exportToMyob").withRel("myob"));
				resource.add(new Link(resource.getId().getHref() + "/pdf").withRel("downloads"));
				return resource;
			}
		};
	}

	@Bean
	public ResourceProcessor<Resource<Bill>> addMyobExportLinkBill()
	{
		return new ResourceProcessor<Resource<Bill>>()
		{
			@Override
			public Resource<Bill> process(Resource<Bill> resource)
			{
				resource.add(new Link(resource.getId().getHref() + "/exportToMyob").withRel("myob"));
				return resource;
			}
		};
	}
}
