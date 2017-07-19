package com.jobowit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController
{

	/* This reflects the static routing config of frontend */
	@RequestMapping(value =
		{ "/", "/parties", "/parties/**" })
	public String index()
	{
		return "index";
	}
}
