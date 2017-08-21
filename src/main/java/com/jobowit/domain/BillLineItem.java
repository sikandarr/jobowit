package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import java.math.BigDecimal;

/**
 * The persistent class for the bill_line_item database table.
 * 
 */
@Entity
@Table(name = "bill_line_item")
@NamedQuery(name = "BillLineItem.findAll", query = "SELECT b FROM BillLineItem b")
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
	
	private String myobTaxCode;
	
	private String myobItem;

	// bi-directional many-to-one association to Bill
	@ManyToOne
	@JoinColumn(name = "bill_id", nullable = false)
	private Bill bill;

	public BillLineItem()
	{
	}

	public int getLineItemId()
	{
		return this.lineItemId;
	}

	public void setLineItemId(int lineItemId)
	{
		this.lineItemId = lineItemId;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public int getQuantity()
	{
		return this.quantity;
	}

	public void setQuantity(int quantity)
	{
		this.quantity = quantity;
	}

	public BigDecimal getSellPrice()
	{
		return this.sellPrice;
	}

	public void setSellPrice(BigDecimal sellPrice)
	{
		this.sellPrice = sellPrice;
	}

	public BigDecimal getUnitPrice()
	{
		return this.unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice)
	{
		this.unitPrice = unitPrice;
	}

	public String getMyobTaxCode()
	{
		return myobTaxCode;
	}

	public void setMyobTaxCode(String taxCodeUid)
	{
		this.myobTaxCode = taxCodeUid;
	}

	public String getMyobItem()
	{
		return myobItem;
	}

	public void setMyobItem(String myobItem)
	{
		this.myobItem = myobItem;
	}

	public Bill getBill()
	{
		return this.bill;
	}

	public void setBill(Bill bill)
	{
		this.bill = bill;
	}

}