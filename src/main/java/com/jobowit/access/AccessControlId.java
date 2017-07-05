package com.jobowit.access;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class AccessControlId implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Column(name="staff_id")
	public int staffId;
	@Column(name="table_name")
	String tableName;
	@Column(name = "role_name")
	String roleName;
	
	@Override
	public String toString()
	{
		return tableName + "-" + roleName + "-" + staffId;
	}
}
