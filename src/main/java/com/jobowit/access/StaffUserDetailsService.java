package com.jobowit.access;

/*import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.jobowit.domain.Staff;
import com.jobowit.repositories.StaffRepository;

@Service
public class StaffUserDetailsService implements UserDetailsService
{
	@Autowired
	private StaffRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		Staff staff = userRepository.findByUsername(username);
		if (staff == null)
		{
			throw new UsernameNotFoundException("Username " + username + " not found");
		}
		return staff;
	}
}*/