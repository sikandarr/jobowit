package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the address database table.
 * 
 */
@Entity
@Table(name = "address")
@NamedQuery(name = "Address.findAll", query = "SELECT a FROM Address a")
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

	@Column(name = "post_code", length = 12)
	private String postCode;

	@Column(length = 45)
	private String state;
	
	@Column(name = "state_code", length = 3)
	private String stateCode;

	@Column(length = 150)
	private String street1;

	@Column(length = 150)
	private String street2;

	public Address()
	{
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

	public String getStreet2()
	{
		return this.street2;
	}

	public void setStreet2(String street2)
	{
		this.street2 = street2;
	}

}