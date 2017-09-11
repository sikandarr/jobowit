package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.math.BigDecimal;

@Entity
@Table
@Data
public class QuotationLineItem implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "line_item_id", unique = true, nullable = false)
	private int lineItemId;

	@Column(columnDefinition = "MEDIUMTEXT")
	private String details;
	
	private int quantity;

	@Column(name = "unit_price", precision = 10, scale = 2)
	private BigDecimal unitPrice;
	
	@Column(precision = 10, scale = 2, insertable=false, updatable=false)
	private BigDecimal amount;

	@ManyToOne
	@JoinColumn(name = "quotation_id", nullable = false)
	private Quotation quotation;

}