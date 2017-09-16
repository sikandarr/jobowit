package com.jobowit.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import lombok.Data;

/**
 * The persistent class for the invoice_line_item database table.
 * 
 */
@Entity
@Table(name = "invoice_line_item")
@Data
public class InvoiceLineItem implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "invoice_line_item_id", unique = true, nullable = false)
	private int invoiceLineItemId;

	@Column(columnDefinition = "MEDIUMTEXT")
	private String description;

	private int quantity;

	@NotNull
	@Column(precision = 10, scale = 2)
	private BigDecimal unitPrice;

	private String myobAccount;

	private String myobTaxCode;

	@ManyToOne
	@JoinColumn(name = "invoice_id", nullable = false)
	private Invoice invoice;
	
	public BigDecimal getTotal()
	{
		return unitPrice.multiply(new BigDecimal(quantity));
	}
}