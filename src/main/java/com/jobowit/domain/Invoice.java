package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the invoice database table.
 * 
 */
@Entity
@Table(name="invoice")
@NamedQuery(name="Invoice.findAll", query="SELECT i FROM Invoice i")
public class Invoice implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="invoice_id", unique=true, nullable=false)
	private int invoiceId;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_job_id", nullable=false)
	private Job job;

	//bi-directional many-to-one association to InvoiceLineItem
	@OneToMany(mappedBy="invoice")
	private List<InvoiceLineItem> invoiceLineItems;

	public Invoice() {
	}

	public int getInvoiceId() {
		return this.invoiceId;
	}

	public void setInvoiceId(int invoiceId) {
		this.invoiceId = invoiceId;
	}

	public Job getJob() {
		return this.job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public List<InvoiceLineItem> getInvoiceLineItems() {
		return this.invoiceLineItems;
	}

	public void setInvoiceLineItems(List<InvoiceLineItem> invoiceLineItems) {
		this.invoiceLineItems = invoiceLineItems;
	}

	public InvoiceLineItem addInvoiceLineItem(InvoiceLineItem invoiceLineItem) {
		getInvoiceLineItems().add(invoiceLineItem);
		invoiceLineItem.setInvoice(this);

		return invoiceLineItem;
	}

	public InvoiceLineItem removeInvoiceLineItem(InvoiceLineItem invoiceLineItem) {
		getInvoiceLineItems().remove(invoiceLineItem);
		invoiceLineItem.setInvoice(null);

		return invoiceLineItem;
	}

}