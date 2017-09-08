package com.jobowit.domain;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "operation_staff_in_job")
@Getter @Setter
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "operationStaffInJobId")
public class OperationStaffInJob implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "operation_staff_in_job_id", unique = true, nullable = false)
	private int operationStaffInJobId;

	@ManyToOne
	@JoinColumn(name = "job_id", nullable = false)
	private Job job;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;
	
	@Column(name = "comission_percentage")
	private BigDecimal comissionPercentage;
	
	@ManyToOne
	@JoinColumn(name = "staff_job_role_id", nullable = false)
	private StaffJobRole staffJobRole;

	public OperationStaffInJob()
	{
	}
	
	public String getStaffName()
	{
		return staff.getName();
	}
	
	public String getRoleName()
	{
		return staffJobRole.getRoleName();
	}
}