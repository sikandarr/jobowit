package com.jobowit.controller;

import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jobowit.domain.Staff;
import com.jobowit.domain.access.JobowitUser;
import com.jobowit.repositories.JobowitUserRepository;

@RestController
public class UserEndpoint
{
	@Autowired
	JobowitUserRepository userRepo;
	
	@RequestMapping("/user")
	public Map<String, Object> user(Principal user)
	{
		JobowitUser u = userRepo.findByUsername(user.getName());
		Staff s = u.getStaff();
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
	
	@GetMapping("/checkUsername")
	public ResponseEntity<String> handleUsernameAvailable(@RequestParam("username") String username)
	{
		if(!username.matches("^[a-z][a-z0-9_\\-.]{3,15}[a-z0-9]$"))
			return ResponseEntity.ok("Not a valid user name");
		
		if(userRepo.findByUsername(username) == null)
			return ResponseEntity.ok("Available");
		else
			return ResponseEntity.ok("Not Available");
	}
}
