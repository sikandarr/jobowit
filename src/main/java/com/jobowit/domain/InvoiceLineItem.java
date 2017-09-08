package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
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

	private double unitPrice;

	private String myobAccount;

	private String myobTaxCode;

	@ManyToOne
	@JoinColumn(name = "invoice_id", nullable = false)
	private Invoice invoice;
}