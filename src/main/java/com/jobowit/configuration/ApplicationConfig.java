package com.jobowit.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.handler.MappedInterceptor;

@Configuration
public class ApplicationConfig
{
	@Bean
	public MappedInterceptor myMappedInterceptor()
	{
		return new MappedInterceptor(new String[]
			{ "/**" }, new AccessTokenInUrl());
	}
}
