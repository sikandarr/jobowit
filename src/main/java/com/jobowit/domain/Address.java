package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.*;

/**
 * The persistent class for the address database table.
 * 
 */
@Entity
@Table(name = "address")
public class Address implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "address_id", unique = true, nullable = false)
	private int addressId;

	@Column(length = 50)
	private String city;

	@Column(length = 45)
	private String country;

	@Column(name = "post_code", length = 4)
	private String postCode;

	@Column(length = 45)
	private String state;

	@Column(name = "state_abr", length = 4)
	private String stateAbr;

	@Column(length = 150)
	private String street1;
	
	private Timestamp createdDtm;
	
	private Timestamp updatedDtm;

	public Address(){}

	public Address(String address)
	{
		String[] addr = address.split(":");

		if (addr.length != 5) throw new IllegalArgumentException("invalid address string: " + address);

		this.street1 = addr[0];
		this.city = addr[1];
		this.state = addr[2];
		this.postCode = addr[3];
		this.country = addr[4];
	}

	public int getAddressId()
	{
		return this.addressId;
	}

	public void setAddressId(int addressId)
	{
		this.addressId = addressId;
	}

	public String getCity()
	{
		return this.city;
	}

	public void setCity(String city)
	{
		this.city = city;
	}

	public String getCountry()
	{
		return this.country;
	}

	public void setCountry(String country)
	{
		this.country = country;
	}

	public String getPostCode()
	{
		return this.postCode;
	}

	public void setPostCode(String postCode)
	{
		this.postCode = postCode;
	}

	public String getState()
	{
		return this.state;
	}

	public void setState(String state)
	{
		this.state = state;
	}

	public String getStreet1()
	{
		return this.street1;
	}

	public void setStreet1(String street1)
	{
		this.street1 = street1;
	}

	public Timestamp getCreatedDtm()
	{
		return createdDtm;
	}

	public Timestamp getUpdatedDtm()
	{
		return updatedDtm == null ? createdDtm : updatedDtm;
	}

	@Override
	public String toString()
	{
		return street1 + " " + city + " " + state + " " + postCode;
	}

}