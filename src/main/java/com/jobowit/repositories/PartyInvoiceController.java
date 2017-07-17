package com.jobowit.repositories;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.Resources;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

import com.jobowit.domain.Invoice;
import com.jobowit.domain.Job;

@RepositoryRestController
public class PartyInvoiceController
{

	private final JobRepository jobRepository;

	@Autowired
	public PartyInvoiceController(JobRepository jrepo)
	{
		jobRepository = jrepo;
	}

	@Autowired
	private EntityLinks entityLinks;
	@Autowired
	private Environment env;

	@RequestMapping(method = RequestMethod.GET, value = "/parties/{id}/invoices")
	public @ResponseBody ResponseEntity<?> getInvoices(@PathVariable String id)
	{
		List<Job> jobs = jobRepository.findByCustomerUuid(id);
		List<Resource<Invoice>> invoices = new ArrayList<Resource<Invoice>>();
		for (Job job : jobs)
		{
			List<Invoice> jobInvoices = job.getInvoices();
			for (Invoice invoice : jobInvoices)
			{
				Resource<Invoice> resource = new Resource<Invoice>(invoice);
				resource.add(new Link(entityLinks.linkFor(Invoice.class) + "/" + invoice.getInvoiceId()).withSelfRel());
				invoices.add(resource);
			}
		}
		Resources<Resource<Invoice>> resources = new Resources<Resource<Invoice>>(invoices);
		String baseUri = env.getProperty("spring.data.rest.basePath") != null ? env.getProperty("spring.data.rest.basePath") : "";
		String[] uri = linkTo(methodOn(PartyInvoiceController.class).getInvoices(id)).withSelfRel().getHref().split("/");
		String selfUri = uri[0] + "//" + uri[2] + baseUri + "/" + uri[3] + "/" + uri[4] + "/" + uri[5];
		resources.add(new Link(selfUri).withSelfRel());
		return ResponseEntity.ok(resources);
	}

}
