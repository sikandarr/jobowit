package com.jobowit.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "resource_id")
public class ResourceId implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "id_string", unique = true, nullable = false)
	private String id;
	
	public ResourceId(String id)
	{
		this.id = id;
	}
	
	public ResourceId(){}
}
