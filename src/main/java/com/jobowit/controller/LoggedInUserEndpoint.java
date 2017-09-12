package com.jobowit.controller;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobowit.domain.Staff;
import com.jobowit.domain.access.JobowitUser;
import com.jobowit.repositories.StaffRepository;

@RestController
public class LoggedInUserEndpoint
{
	@Autowired
	StaffRepository staffRepo;
	
	@RequestMapping("/user")
	public Map<String, Object> user(Principal user)
	{
		Staff s = staffRepo.findByUserUsername(user.getName());
		JobowitUser u = s.getUser();
		Map<String, Object> map = new LinkedHashMap<>();
		map.put("username", user.getName());
		map.put("name", s.getName());
		map.put("firstname", s.getName().split(" ")[0]);
		map.put("initials", s.getInitials());
		map.put("email", s.getEmail());
		map.put("bgcolor", s.getBgColor());
		map.put("uid", s.getUuid());
		map.put("permissions", u.getAccessRole());
		return map;
	}
}
