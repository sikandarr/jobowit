package com.jobowit.domain.projections;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.rest.core.config.Projection;

import com.jobowit.domain.Party;

@Projection(name = "partyProjection", types = { Party.class }) 
public interface PartyProjection
{
	String getName();
	
	@Value("#{target.physicalAddress.toString()}")
	String getPhysicalAddress();
	
	long getActiveJobCount();
}
