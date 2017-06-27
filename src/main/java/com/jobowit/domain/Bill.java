package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import java.sql.Timestamp;
import java.util.List;


/**
 * The persistent class for the bill database table.
 * 
 */
@Entity
@Table(name="bill")
@NamedQuery(name="Bill.findAll", query="SELECT b FROM Bill b")
public class Bill implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="bill_id", unique=true, nullable=false)
	private int billId;

	@Column(name="bill_dt")
	private Timestamp billDt;

	@Column(name="due_dt")
	private Timestamp dueDt;

	@Column(length=45)
	private String ref;

	@Column(name="tax_inclusive")
	private boolean taxInclusive;

	//bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name="job_id", nullable=false)
	@JsonManagedReference
	private Job job;

	//bi-directional many-to-one association to Party
	@ManyToOne
	@JoinColumn(name="supplier_id", nullable=false)
	@JsonManagedReference
	private Party supplier;

	//bi-directional many-to-one association to BillLineItem
	@OneToMany(mappedBy="bill")
	private List<BillLineItem> billLineItems;

	public Bill() {
	}

	public int getBillId() {
		return this.billId;
	}

	public void setBillId(int billId) {
		this.billId = billId;
	}

	public Timestamp getBillDt() {
		return this.billDt;
	}

	public void setBillDt(Timestamp billDt) {
		this.billDt = billDt;
	}

	public Timestamp getDueDt() {
		return this.dueDt;
	}

	public void setDueDt(Timestamp dueDt) {
		this.dueDt = dueDt;
	}

	public String getRef() {
		return this.ref;
	}

	public void setRef(String ref) {
		this.ref = ref;
	}

	public boolean getTaxInclusive() {
		return this.taxInclusive;
	}

	public void setTaxInclusive(boolean taxInclusive) {
		this.taxInclusive = taxInclusive;
	}

	public Job getJob() {
		return this.job;
	}

	public void setJob(Job job) {
		this.job = job;
	}

	public Party getSupplier() {
		return this.supplier;
	}

	public void setSupplier(Party supplier) {
		this.supplier = supplier;
	}

	public List<BillLineItem> getBillLineItems() {
		return this.billLineItems;
	}

	public void setBillLineItems(List<BillLineItem> billLineItems) {
		this.billLineItems = billLineItems;
	}

	public BillLineItem addBillLineItem(BillLineItem billLineItem) {
		getBillLineItems().add(billLineItem);
		billLineItem.setBill(this);

		return billLineItem;
	}

	public BillLineItem removeBillLineItem(BillLineItem billLineItem) {
		getBillLineItems().remove(billLineItem);
		billLineItem.setBill(null);

		return billLineItem;
	}

}