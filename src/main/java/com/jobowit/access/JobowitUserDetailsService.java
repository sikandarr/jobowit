package com.jobowit.access;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jobowit.repositories.StaffRepository;

@Service("userDetailsService")
public class JobowitUserDetailsService implements UserDetailsService
{
	@Autowired
	private StaffRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		JobowitUser user = userRepository.findByUserUsername(username).getUser();
		if (user == null)
		{
			throw new UsernameNotFoundException("Username " + username + " not found");
		}
		return user;
	}
}