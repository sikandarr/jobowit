package com.jobowit.domain.access;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="db_table")
public class ProtectedResource implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name="table_name")
	String name;
	
	public String getName()
	{
		return name;
	}
}
