package com.jobowit.access;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "access_role")
public class AccessRole implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name = "role_name")
	String roleName;
}
