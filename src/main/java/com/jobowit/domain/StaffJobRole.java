package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the staff_job_role database table.
 * 
 */
@Entity
@Table(name="staff_job_role")
@NamedQuery(name="StaffJobRole.findAll", query="SELECT s FROM StaffJobRole s")
public class StaffJobRole implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="role_id", unique=true, nullable=false)
	private int roleId;

	@Column(name="role_name", nullable=false, length=45)
	private String roleName;

	//bi-directional many-to-one association to StaffRole
	@OneToMany(mappedBy="staffJobRole")
	private List<StaffRole> staffRoles;

	public StaffJobRole() {
	}

	public int getRoleId() {
		return this.roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return this.roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public List<StaffRole> getStaffRoles() {
		return this.staffRoles;
	}

	public void setStaffRoles(List<StaffRole> staffRoles) {
		this.staffRoles = staffRoles;
	}

	public StaffRole addStaffRole(StaffRole staffRole) {
		getStaffRoles().add(staffRole);
		staffRole.setStaffJobRole(this);

		return staffRole;
	}

	public StaffRole removeStaffRole(StaffRole staffRole) {
		getStaffRoles().remove(staffRole);
		staffRole.setStaffJobRole(null);

		return staffRole;
	}

}