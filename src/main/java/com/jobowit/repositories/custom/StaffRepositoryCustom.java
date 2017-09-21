package com.jobowit.repositories.custom;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;

import com.jobowit.domain.Staff;

public interface StaffRepositoryCustom
{
	public List<Staff> findBySchedule(
			@Param("sDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime startDtm,
			@Param("fDtm") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") LocalDateTime finishDtm);
}
