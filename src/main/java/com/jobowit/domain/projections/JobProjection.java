package com.jobowit.domain.projections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import com.jobowit.domain.Job;

@Projection(name = "jobProjection", types = { Job.class })
public interface JobProjection
{
	int getJobId();
	
	@Value("#{target.customer.getName()}")
	String getCustomer();
	
	String getReferral();
	
	@Value("#{target.jobStatus.getStatus()}")
	String getJobStatus();
	
	@Value("#{target.currentType.getJobType()}")
	String getcurrentType();
	
	boolean isActive();
	
	@Value("#{target.address.toString()}")
	String getAddress();
	
	@Value("#{target.getLatestSchedule().getStartDtm()}")
	String getLatestSchedule();
	
	@Value("#{target.getLatestSchedule().getLogicalDay()}")
	String getLatestScheduleLogicalDay();
	
	String getPriority();
}