package com.jobowit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobowit.domain.access.JobowitUser;

public interface JobowitUserRepository extends JpaRepository<JobowitUser, Integer>
{
	JobowitUser findByUsername(String username);
}
