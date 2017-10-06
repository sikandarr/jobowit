package com.jobowit.domain.access;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;

@Entity
@Table(name = "access_role")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "roleName")
@Data
public class AccessRole implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "access_role_id", unique = true, nullable = false)
	private int accessRoleId; 
	
	private String roleName;
	
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "accessRole")
	private List<AccessControl> accessControl;
}
