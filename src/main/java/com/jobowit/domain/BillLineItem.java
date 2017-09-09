package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Data;

import java.math.BigDecimal;

/**
 * The persistent class for the bill_line_item database table.
 * 
 */
@Entity
@Table(name = "bill_line_item")
@Data
public class BillLineItem implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "line_item_id", unique = true, nullable = false)
	private int lineItemId;

	@Column(columnDefinition = "MEDIUMTEXT")
	private String description;

	private int quantity;

	@Column(name = "sell_price", precision = 10, scale = 2)
	private BigDecimal sellPrice;

	@Column(name = "unit_price", precision = 10, scale = 2)
	private BigDecimal unitPrice;
	
	@Column(precision = 10, scale = 2, insertable=false, updatable=false)
	private BigDecimal purchasePrice;
	
	private String myobTaxCode;
	
	private String myobItem;

	@ManyToOne
	@JoinColumn(name = "bill_id", nullable = false)
	private Bill bill;

}