package com.jobowit.access;

import java.io.Serializable;

import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

public class AccessControlEvaluator implements PermissionEvaluator
{
	@Override
	public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission)
	{
		if ((auth == null) || (targetDomainObject == null) || !(permission instanceof String)) return false;
		for (GrantedAuthority grantedAuth : auth.getAuthorities())
			if (grantedAuth.getAuthority().startsWith(targetDomainObject.toString().toUpperCase())
					&& grantedAuth.getAuthority().contains(permission.toString().toUpperCase()))
				return true;
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
