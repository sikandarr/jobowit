package com.jobowit.domain.views;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.jobowit.domain.Invoice;
import com.jobowit.domain.Job;
import com.jobowit.domain.Staff;

import lombok.Data;

@Entity
@Table
@Data
public class Comission implements Serializable
{
	private static final long serialVersionUID = 1L;
	private @Id String id;
	private @ManyToOne @JoinColumn(name = "job_id") Job job;
	private @ManyToOne @JoinColumn(name = "staff_id") Staff staff;
	private @ManyToOne @JoinColumn(name = "invoice_id") Invoice invoice;
	private String staffName;
	private String roleName;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal invoiceAmount;
	private @Column(name = "comission_p", precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal comissionP;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal comissionAmount;
}
