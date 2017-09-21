package com.jobowit.controller;

import java.time.LocalDateTime;
import org.springframework.beans.factory.annotation.Autowired;
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
}
