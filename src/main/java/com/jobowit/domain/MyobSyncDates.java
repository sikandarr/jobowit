package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class MyobSyncDates implements Serializable
{
	@Id	private long party_id;
	private static final long serialVersionUID = 1L;
	private Timestamp lastSyncDtm;
	private Timestamp contactLastSyncDtm;
	
	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "party_id")
	private Party party;
	
	public Timestamp getLastSyncDtm()
	{
		return lastSyncDtm;
	}
	public void setLastSyncDtm(Timestamp lastSyncDtm)
	{
		this.lastSyncDtm = lastSyncDtm;
	}
	public Timestamp getContactLastSyncDtm()
	{
		return contactLastSyncDtm;
	}
	public void setContactLastSyncDtm(Timestamp contactLastSyncDtm)
	{
		this.contactLastSyncDtm = contactLastSyncDtm;
	}
}
