package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

/**
 * The persistent class for the staff_role database table.
 * 
 */
@Entity
@Table(name = "staff_role")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "staffRoleId")
public class StaffRole implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "staff_role_id", unique = true, nullable = false)
	private int staffRoleId;

	// bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;

	// bi-directional many-to-one association to StaffJobRole
	@ManyToOne
	@JoinColumn(name = "role_id", nullable = false)
	private StaffJobRole staffJobRole;

	public StaffRole()
	{
	}

	public int getStaffRoleId()
	{
		return this.staffRoleId;
	}

	public void setStaffRoleId(int staffRoleId)
	{
		this.staffRoleId = staffRoleId;
	}

	public Staff getStaff()
	{
		return this.staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}

	public StaffJobRole getStaffJobRole()
	{
		return this.staffJobRole;
	}

	public void setStaffJobRole(StaffJobRole staffJobRole)
	{
		this.staffJobRole = staffJobRole;
	}
	
	public String getRoleName()
	{
		return this.staffJobRole.getRoleName();
	}

}