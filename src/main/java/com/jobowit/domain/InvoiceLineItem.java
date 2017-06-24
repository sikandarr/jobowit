package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the invoice_line_item database table.
 * 
 */
@Entity
@Table(name="invoice_line_item")
@NamedQuery(name="InvoiceLineItem.findAll", query="SELECT i FROM InvoiceLineItem i")
public class InvoiceLineItem implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="invoice_line_item_id", unique=true, nullable=false)
	private int invoiceLineItemId;

	@Column(columnDefinition = "MEDIUMTEXT")
	private String description;

	private int quantity;

	@Column(name="unit_price")
	private double unitPrice;

	//bi-directional many-to-one association to Invoice
	@ManyToOne
	@JoinColumn(name="invoice_id", nullable=false)
	private Invoice invoice;

	public InvoiceLineItem() {
	}

	public int getInvoiceLineItemId() {
		return this.invoiceLineItemId;
	}

	public void setInvoiceLineItemId(int invoiceLineItemId) {
		this.invoiceLineItemId = invoiceLineItemId;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public double getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Invoice getInvoice() {
		return this.invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

}