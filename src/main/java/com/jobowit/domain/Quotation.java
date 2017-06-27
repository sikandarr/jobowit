package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.util.List;

/**
 * The persistent class for the quotation database table.
 * 
 */
@Entity
@Table(name = "quotation")
@NamedQuery(name = "Quotation.findAll", query = "SELECT q FROM Quotation q")
public class Quotation implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quotation_id", unique = true, nullable = false)
	private int quotationId;

	@Column(nullable = false)
	private boolean billable;

	// bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	@JsonManagedReference
	private Job job;

	// bi-directional many-to-one association to QuotationLineItem
	@OneToMany(mappedBy = "quotation")
	private List<QuotationLineItem> quotationLineItems;

	public Quotation()
	{
	}

	public int getQuotationId()
	{
		return this.quotationId;
	}

	public void setQuotationId(int quotationId)
	{
		this.quotationId = quotationId;
	}

	public boolean getBillable()
	{
		return this.billable;
	}

	public void setBillable(boolean billable)
	{
		this.billable = billable;
	}

	public Job getJob()
	{
		return this.job;
	}

	public void setJob(Job job)
	{
		this.job = job;
	}

	public List<QuotationLineItem> getQuotationLineItems()
	{
		return this.quotationLineItems;
	}

	public void setQuotationLineItems(List<QuotationLineItem> quotationLineItems)
	{
		this.quotationLineItems = quotationLineItems;
	}

	public QuotationLineItem addQuotationLineItem(QuotationLineItem quotationLineItem)
	{
		getQuotationLineItems().add(quotationLineItem);
		quotationLineItem.setQuotation(this);

		return quotationLineItem;
	}

	public QuotationLineItem removeQuotationLineItem(QuotationLineItem quotationLineItem)
	{
		getQuotationLineItems().remove(quotationLineItem);
		quotationLineItem.setQuotation(null);

		return quotationLineItem;
	}

}