package com.jobowit.access;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.jobowit.domain.Staff;

public class StaffUser implements UserDetails
{
	private static final long serialVersionUID = 1L;
	Staff staff;
	
	public StaffUser (Staff staff)
	{
		this.staff = staff;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities()
	{
		return staff.getAccessControl();
	}

	@Override
	public String getPassword()
	{
		return staff.getPassword();
	}

	@Override
	public String getUsername()
	{
		return staff.getUsername();
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
		return true;
	}

}
