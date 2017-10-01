package com.jobowit.domain.views;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.jobowit.domain.Job;

import lombok.Data;

@Entity
@Table(name="job_cost")
@Data
public class Cost implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	private int jobId;
	
	@OneToOne @JoinColumn(name = "job_id") private Job job;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal labor;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal material;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal comission;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal totalCost;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal revenue;
	private @Column(precision = 10, scale = 2, columnDefinition = "DECIMAL(14,2)") BigDecimal profit;
}
