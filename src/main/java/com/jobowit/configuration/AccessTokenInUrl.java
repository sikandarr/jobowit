package com.jobowit.configuration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.httpclient.HttpStatus;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class AccessTokenInUrl extends HandlerInterceptorAdapter
{
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
	{	
		if (request.getParameter("access_token") != null)
		{
			response.getWriter().println("Not allowed");
			response.setStatus(HttpStatus.SC_BAD_REQUEST);
			return false;
		}
		return true;
	}
}
