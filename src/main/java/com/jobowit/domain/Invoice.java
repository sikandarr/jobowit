package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

import java.util.List;

/**
 * The persistent class for the invoice database table.
 * 
 */
@Entity
@Table(name = "invoice")
public class Invoice implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_id", unique = true, nullable = false)
	private int invoiceId;

	// bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;
	
	@Column(name = "description", columnDefinition = "MEDIUMTEXT")
	private String description;
	
	@Column(name = "invoice_dt")
	private Date invoiceDt;
	
	@Column(name="invoice_due_dt")
	private Date invoiceDueDate;
	
	private String myobUid;

	// bi-directional many-to-one association to InvoiceLineItem
	@OneToMany(mappedBy = "invoice")
	private List<InvoiceLineItem> invoiceLineItems;

	public Invoice()
	{
	}

	public int getInvoiceId()
	{
		return this.invoiceId;
	}

	public void setInvoiceId(int invoiceId)
	{
		this.invoiceId = invoiceId;
	}

	public Job getJob()
	{
		return this.job;
	}

	public void setJob(Job job)
	{
		this.job = job;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public Date getInvoiceDt()
	{
		return invoiceDt;
	}

	public void setInvoiceDt(Date invoiceDt)
	{
		this.invoiceDt = invoiceDt;
	}

	public Date getInvoiceDueDate()
	{
		return invoiceDueDate;
	}

	public void setInvoiceDueDate(Date invoiceDueDate)
	{
		this.invoiceDueDate = invoiceDueDate;
	}

	public String getMyobUid()
	{
		return myobUid;
	}

	public void setMyobUid(String myobUid)
	{
		this.myobUid = myobUid;
	}

	public List<InvoiceLineItem> getInvoiceLineItems()
	{
		return this.invoiceLineItems;
	}

	public void setInvoiceLineItems(List<InvoiceLineItem> invoiceLineItems)
	{
		this.invoiceLineItems = invoiceLineItems;
	}

	public InvoiceLineItem addInvoiceLineItem(InvoiceLineItem invoiceLineItem)
	{
		getInvoiceLineItems().add(invoiceLineItem);
		invoiceLineItem.setInvoice(this);

		return invoiceLineItem;
	}

	public InvoiceLineItem removeInvoiceLineItem(InvoiceLineItem invoiceLineItem)
	{
		getInvoiceLineItems().remove(invoiceLineItem);
		invoiceLineItem.setInvoice(null);

		return invoiceLineItem;
	}
	
	public Double getTotalAmount()
	{
		if (this.getInvoiceLineItems() != null || this.getInvoiceLineItems().size() !=0)
			return this.getInvoiceLineItems().stream().mapToDouble(i -> i.getUnitPrice()).sum();
		return 0d;
	}

}