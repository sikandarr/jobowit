package com.jobowit.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Getter @Setter
public class MyobCredentials implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Id @Column(unique = true, nullable = false, columnDefinition = "enum") 
	private String id;
	private String username;
	private String password;
}
