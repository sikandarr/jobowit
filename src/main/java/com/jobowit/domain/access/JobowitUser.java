package com.jobowit.domain.access;

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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.Staff;

@Entity
@Table(name = "user")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class JobowitUser implements UserDetails
{
	private static final long serialVersionUID = 1L;
	
	@OneToOne(mappedBy = "user")
	@JsonIgnore
	Staff staff;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", unique = true, nullable = false)
	private int id;
	
	@Column(unique = true, nullable = false)
	private String username;
	
	private String password;
	
	@OneToOne
	@JoinColumn(name = "access_role", nullable = false)
	private AccessRole accessRole;
	
	private boolean enabled;
	
	public JobowitUser(){}

	@Override
	@JsonIgnore
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		return accessRole.getAccessControl();
	}

	@Override
	@JsonIgnore
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
	@JsonIgnore
	public boolean isAccountNonExpired()
	{
		return true;
	}

	@Override
	@JsonIgnore
	public boolean isAccountNonLocked()
	{
		return true;
	}

	@Override
	@JsonIgnore
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

	@JsonProperty
	public void setPassword(String password)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		this.password = encoder.encode(password);
	}

	public void setEnabled(boolean enabled)
	{
		this.enabled = enabled;
	}
	
	public String getStaffUuid()
	{
		return this.staff.getUuid();
	}

}
