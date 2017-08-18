package com.jobowit.myob;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.anahata.myob.api.domain.v2.contact.CardLink;
import com.anahata.myob.api.domain.v2.generalledger.Account;
import com.anahata.myob.api.domain.v2.generalledger.AccountLink;
import com.anahata.myob.api.domain.v2.generalledger.TaxCode;
import com.anahata.myob.api.domain.v2.generalledger.TaxCodeLink;
import com.anahata.myob.api.domain.v2.sale.ServiceInvoice;
import com.anahata.myob.api.domain.v2.sale.ServiceInvoiceLine;
import com.anahata.myob.api.service.ServiceInvoiceService;
import com.anahata.myob.api.service.generalledger.AccountService;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.jobowit.domain.Invoice;
import com.jobowit.domain.InvoiceLineItem;
import com.jobowit.domain.Party;
import com.jobowit.repositories.InvoiceRepository;

@Component
public class MyobInvoiceService
{
	@Autowired
	private InvoiceRepository invoiceRepo;

	@Autowired
	private ServiceInvoiceService serviceInvoiceService;

	@Autowired
	private AccountService accountService;

	@Autowired
	private TaxCodeService taxCodeService;

	public String export(int invoiceId)
	{
		Invoice i = invoiceRepo.findOne(invoiceId);
		if (i.getMyobUid() == null || i.getMyobUid().equals(""))
		{
			ServiceInvoice myobServiceInvoice = create(i);
			myobServiceInvoice = serviceInvoiceService.create(myobServiceInvoice);
			i.setMyobUid(myobServiceInvoice.getUID());
			invoiceRepo.save(i);
			return "Success! Invoice exported";
		}
		return "Invoice already exported";
	}

	public ServiceInvoice create(Invoice i)
	{
		ServiceInvoice si = new ServiceInvoice();
		si.setDate(i.getInvoiceDt());
		CardLink customer = new CardLink();
		Party p = i.getJob().getCustomer();
		customer.setUID(p.getMyobUid());
		si.setCustomer(customer);
		si.setLines(createLines(i.getInvoiceLineItems()));
		return si;
	}

	public ArrayList<ServiceInvoiceLine> createLines(List<InvoiceLineItem> invoiceLineItems)
	{
		ArrayList<ServiceInvoiceLine> lines = new ArrayList<ServiceInvoiceLine>();
		for (InvoiceLineItem item : invoiceLineItems)
		{
			ServiceInvoiceLine line = new ServiceInvoiceLine();
			line.setDescription(item.getDescription());
			line.setTotal(new BigDecimal(item.getUnitPrice() * item.getQuantity()));

			String accountUid = item.getMyobAccount();
			Account account = accountService.find(accountUid);
			AccountLink accountLink = new AccountLink();
			accountLink.setUID(account.getUID());
			line.setAccount(accountLink);

			String taxCodeUid = item.getMyobTaxCode();
			TaxCode taxCode = taxCodeService.find(taxCodeUid);
			TaxCodeLink taxCodeLink = new TaxCodeLink();
			taxCodeLink.setUID(taxCode.getUID());
			line.setTaxCode(taxCodeLink);
			lines.add(line);
		}

		return lines;
	}

}
