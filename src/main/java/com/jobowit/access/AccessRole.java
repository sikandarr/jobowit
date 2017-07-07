package com.jobowit.access;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "access_role")
public class AccessRole implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "role_name")
	private String roleName;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "accessRole")
	private List<AccessControl> accessControl;
	
	public String getRoleName()
	{
		return roleName;
	}
	public void setRoleName(String roleName)
	{
		this.roleName = roleName;
	}
	
	public List<AccessControl> getAccessControl()
	{
		return accessControl;
	}

	public void setAccessControl(List<AccessControl> accessControl)
	{
		this.accessControl = accessControl;
	}
	
	public AccessControl addAccessControl(AccessControl accessControl)
	{
		getAccessControl().add(accessControl);
		accessControl.setAccessRole(this);
		return accessControl;
	}
	
	public AccessControl removeAccessControl(AccessControl accessControl)
	{
		getAccessControl().remove(accessControl);
		accessControl.setAccessRole(null);
		return accessControl;
	}
}
