package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.math.BigDecimal;


/**
 * The persistent class for the quotation_line_item database table.
 * 
 */
@Entity
@Table(name="quotation_line_item")
@NamedQuery(name="QuotationLineItem.findAll", query="SELECT q FROM QuotationLineItem q")
public class QuotationLineItem implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="line_item_id", unique=true, nullable=false)
	private int lineItemId;

	@Lob
	private String details;

	@Column(name="unit_price", precision=10, scale=2)
	private BigDecimal unitPrice;

	//bi-directional many-to-one association to Quotation
	@ManyToOne
	@JoinColumn(name="quotation_id", nullable=false)
	private Quotation quotation;

	public QuotationLineItem() {
	}

	public int getLineItemId() {
		return this.lineItemId;
	}

	public void setLineItemId(int lineItemId) {
		this.lineItemId = lineItemId;
	}

	public String getDetails() {
		return this.details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public BigDecimal getUnitPrice() {
		return this.unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Quotation getQuotation() {
		return this.quotation;
	}

	public void setQuotation(Quotation quotation) {
		this.quotation = quotation;
	}

}