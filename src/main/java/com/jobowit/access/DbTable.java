package com.jobowit.access;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="db_table")
public class DbTable implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Id
	@Column(name="table_name")
	String tableName;
}
