package com.jobowit.configuration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class AccessTokenInUrl extends HandlerInterceptorAdapter
{
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
	{	
		if (request.getParameter("access_token") != null)
		{
			response.getWriter().println("Not allowed");
			response.setStatus(404);
			return false;
		}
		return true;
	}
}
