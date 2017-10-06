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
import javax.validation.constraints.Pattern;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.Staff;

import lombok.Data;

@Entity
@Table(name = "user")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Data
public class JobowitUser implements UserDetails
{
	private static final long serialVersionUID = 1L;
	
	@OneToOne(optional=false)
	@JoinColumn(name = "staff_id", nullable = false)
	Staff staff;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id", unique = true, nullable = false)
	private int id;
	
	@Column(unique = true, nullable = false)
	@Pattern(regexp = "^[a-z][a-z0-9_\\-.]{3,15}[a-z0-9]$", message = "Username is not valid")
	private String username;
	
	private String password;
	
	@OneToOne
	@JoinColumn(name = "access_role_id", nullable = false)
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

	@JsonProperty
	public void setPassword(String password)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		this.password = encoder.encode(password);
	}
	
	public String getStaffUuid()
	{
		return this.staff.getUuid();
	}

}
