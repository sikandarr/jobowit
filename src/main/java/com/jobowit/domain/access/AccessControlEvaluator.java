package com.jobowit.domain.access;

import java.io.Serializable;
import java.util.List;

import org.springframework.security.access.PermissionEvaluator;
import org.springframework.security.core.Authentication;

public class AccessControlEvaluator implements PermissionEvaluator
{
	@Override
	public boolean hasPermission(Authentication auth, Object targetDomainObject, Object permission)
	{
		if ((auth == null) || (targetDomainObject == null) || !(permission instanceof String)) return false;
		JobowitUser user = (JobowitUser) auth.getPrincipal();
		List<AccessControl> roleGrantedAuthority = user.getAccessRole().getAccessControl();
		
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
		JobowitUser user = (JobowitUser) auth.getPrincipal();
		System.out.println(user.getId() + " " + targetId + " " + targetType + " " + permission);
		return false;
	}
}
