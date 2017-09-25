package com.jobowit.domain.access;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jobowit.repositories.JobowitUserRepository;

@Service("userDetailsService")
public class JobowitUserDetailsService implements UserDetailsService
{
	@Autowired
	private JobowitUserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		JobowitUser user = userRepository.findByUsername(username);
		if (user == null)
		{
			throw new UsernameNotFoundException("Username " + username + " not found");
		}
		return user;
	}
}