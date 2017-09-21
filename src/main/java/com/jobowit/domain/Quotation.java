package com.jobowit.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

import javax.persistence.*;

import lombok.Data;

import java.util.List;

@Entity
@Table(name = "quotation")
@Data
public class Quotation implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "quotation_id", unique = true, nullable = false)
	private int quotationId;
	
	private Date quotationDt;
	
	private int quotationNumber;

	private boolean billable;

	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;

	@OneToMany(mappedBy = "quotation")
	private List<QuotationLineItem> lineItems;
	
	public BigDecimal getTotalAmount()
	{
		if (this.getLineItems() != null || this.getLineItems().size() !=0)
			return this.getLineItems().stream().map(i -> i.getAmount()).reduce(BigDecimal.ZERO, BigDecimal::add);
		return BigDecimal.ZERO;
	}

}