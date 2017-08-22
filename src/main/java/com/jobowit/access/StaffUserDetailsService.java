package com.jobowit.access;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jobowit.repositories.StaffUserRepository;

@Service
public class StaffUserDetailsService implements UserDetailsService
{
	@Autowired
	private StaffUserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		StaffUser user = userRepository.findByUsername(username);
		if (user == null)
		{
			throw new UsernameNotFoundException("Username " + username + " not found");
		}
		return user;
	}
}