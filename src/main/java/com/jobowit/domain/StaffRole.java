package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;

@Entity
@Table(name = "staff_role")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "staffRoleId")
@Data
public class StaffRole implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "staff_role_id", unique = true, nullable = false)
	private int staffRoleId;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staff;

	@ManyToOne
	@JoinColumn(name = "role_id", nullable = false)
	private StaffJobRole staffJobRole;
	
	public String getRoleName()
	{
		return this.staffJobRole.getRoleName();
	}

}