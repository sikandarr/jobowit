package com.jobowit.access;

import java.util.Collection;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.Staff;

@Entity
@Table(name = "staff_user")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class StaffUser implements UserDetails
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", unique = true, nullable = false)
	private int id;
	
	private String username;
	
	private String password;
	
	@OneToOne
	@JoinColumn(name = "access_role", nullable = false)
	private AccessRole accessRole;
	
	private boolean enabled;
	
	@OneToOne
	@JoinColumn(name = "staff_id", nullable = false)
	Staff staff;
	
	public StaffUser(){}
	
	public StaffUser (Staff staff)
	{
		this.staff = staff;
	}

	public Staff getStaff()
	{
		return staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		return accessRole.getAccessControl();
	}

	@Override
	public String getPassword()
	{
		return password;
	}

	@Override
	public String getUsername()
	{
		return username;
	}

	@Override
	public boolean isAccountNonExpired()
	{
		return true;
	}

	@Override
	public boolean isAccountNonLocked()
	{
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired()
	{
		return true;
	}

	@Override
	public boolean isEnabled()
	{
		return enabled;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public AccessRole getAccessRole()
	{
		return accessRole;
	}

	public void setAccessRole(AccessRole accessRole)
	{
		this.accessRole = accessRole;
	}

	public void setUsername(String username)
	{
		this.username = username;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
	}

}
