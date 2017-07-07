package com.jobowit.access;

import java.io.Serializable;
import java.util.List;

import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import com.jobowit.domain.Staff;

public class AccessControlEvaluator implements PermissionEvaluator
{
	
	// TODO: implement the function with a SINGLE List returned from auth.getAuthorities and in ONE loop.
	@Override
	public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission)
	{
		if ((auth == null) || (targetDomainObject == null) || !(permission instanceof String)) return false;
		Staff user = ((StaffUser) auth.getPrincipal()).getStaff();
		List<AccessControl> roleGrantedAuthority = user.getAccessRole().getAccessControl();
		// user level permission overrides role level permissions
		for (GrantedAuthority grantedAuth : auth.getAuthorities())
		{
			if (grantedAuth.getAuthority().startsWith(targetDomainObject.toString().toUpperCase()))
			{
				if (grantedAuth.getAuthority().contains(permission.toString().toUpperCase())) return true;
				else return false;
			}
		}
		// this should only be avaluated if the user level for-loop completed undecided
		for (AccessControl accessControl : roleGrantedAuthority)
		{
			if (accessControl.getAuthority().startsWith(targetDomainObject.toString().toUpperCase())
					&& accessControl.getAuthority().contains(permission.toString().toUpperCase()))
				return true;
		}
		return false;
	}

	@Override
	public boolean hasPermission(Authentication auth, Serializable targetId, String targetType, Object permission)
	{
		if ((auth == null) || (targetType == null) || !(permission instanceof String))
		{
			return false;
		}
		return false;
	}
}
