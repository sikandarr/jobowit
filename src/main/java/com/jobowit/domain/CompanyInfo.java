package com.jobowit.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

@Entity
@DynamicUpdate
@Table(name = "company")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Getter @Setter
public class CompanyInfo
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false, columnDefinition = "enum")
	String id;
	
	@Column
	String name;
	
	@Column
	String addressLine1;
	
	@Column
	String addressLine2;
	
	@Column
	String phone1;
	
	@Column
	String phone2;
	
	@Column
	String email;
	
	@Column(columnDefinition = "mediumblob")
	@Lob
	private byte[] logo;
}
