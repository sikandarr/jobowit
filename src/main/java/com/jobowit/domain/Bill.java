package com.jobowit.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

@Entity
@Table(name = "bill")
@Data
public class Bill implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "bill_id", unique = true, nullable = false)
	private int billId;

	private Date billDt;

	private Date dueDt;

	@Column(name = "supplier_ref", length = 45)
	private String supplierRef;

	private boolean taxInclusive;

	private String myobUid;

	private String myobFreightTaxCode;

	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;

	@ManyToOne
	@JoinColumn(name = "supplier_id", nullable = false)
	private Party supplier;

	@OneToMany(mappedBy = "bill")
	private List<BillLineItem> billLineItems;
	
	public BigDecimal getTotalAmount()
	{
		if (this.getBillLineItems() != null || this.getBillLineItems().size() !=0)
			return this.getBillLineItems().stream().map(i -> i.getPurchasePrice()).reduce(BigDecimal.ZERO, BigDecimal::add);
		return BigDecimal.ZERO;
	}
}