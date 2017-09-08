package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.*;

import lombok.Data;
import java.util.List;

@Entity
@Table(name = "invoice")
@Data
public class Invoice implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_id", unique = true, nullable = false)
	private int invoiceId;

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
	
	private String invoiceNumber;

	@OneToMany(mappedBy = "invoice")
	private List<InvoiceLineItem> invoiceLineItems;

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
	
	@Override
	public String toString()
	{
		return this.getDescription();
	}

}