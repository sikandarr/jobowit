package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "staff_job_role")
@Getter @Setter
public class StaffJobRole implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "role_id", unique = true, nullable = false)
	private int roleId;

	@Column(name = "role_name", nullable = false, length = 45)
	private String roleName;
}