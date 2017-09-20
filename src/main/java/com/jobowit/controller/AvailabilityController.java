package com.jobowit.controller;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jobowit.domain.Staff;
import com.jobowit.repositories.StaffRepository;

@RestController
public class AvailabilityController
{
	@Autowired
	StaffRepository staffRepo;

	@GetMapping("/api/staffs/{uid}/checkAvailability")
	public ResponseEntity<String> handleCheckAvailability(@PathVariable String uid,
			@RequestParam("sDtm") LocalDateTime startDtm, @RequestParam("fDtm") LocalDateTime finishDtm)
	{
		Staff s = staffRepo.findByUuid(uid);
		if (s.isAvailableBetween(startDtm, finishDtm))
			return ResponseEntity.ok().body("Available");
		else return ResponseEntity.ok().body("Not Available");
	}

	@GetMapping("/api/staffs/getAvailableFieldWorkers")
	public List<Staff> getAvailableStaff(
			@RequestParam("sDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime startDtm,
			@RequestParam("fDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime finishDtm)
	{
		List<Staff> fieldWorkers = staffRepo.findByStaffRolesStaffJobRoleRoleId(2);
		List<Staff> availableWorkers = new ArrayList<Staff>();
		for (Staff worker : fieldWorkers)
			if (worker.isAvailableBetween(startDtm, finishDtm))
				availableWorkers.add(worker);
		return availableWorkers;
	}
}
