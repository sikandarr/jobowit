package com.jobowit.repositories.custom;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.jobowit.domain.Staff;
import com.jobowit.repositories.StaffRepository;

public class StaffRepositoryImpl implements StaffRepositoryCustom
{
	@Autowired
	StaffRepository staffRepo;

	@Override
	public List<Staff> findBySchedule(LocalDateTime startDtm, LocalDateTime finishDtm)
	{
		List<Staff> fieldWorkers = staffRepo.findByStaffRolesStaffJobRoleRoleId(2);
		List<Staff> availableWorkers = new ArrayList<Staff>();
		for (Staff worker : fieldWorkers)
			if (worker.isAvailableBetween(startDtm, finishDtm))
				availableWorkers.add(worker);
		return availableWorkers;
	}
}
