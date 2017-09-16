package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.*;

import lombok.Data;

@Entity
@Table(name = "address")
@Data
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

	@Column(length = 150)
	private String street1;

	@Column(insertable = false, updatable = false)
	private Timestamp createdDtm;

	@Column(insertable = false, updatable = false)
	private Timestamp updatedDtm;

	public Address()
	{
	}

	public Address(String address)
	{
		String[] addr = address.split(":");

		if (addr.length != 5)
			throw new IllegalArgumentException("invalid address string: " + address);

		this.street1 = addr[0];
		this.setCity(addr[1]);
		this.setState(addr[2]);
		this.postCode = addr[3];
		this.setCountry(addr[4]);
	}

	public void setState(String state)
	{
		switch (state.toLowerCase())
		{
			case "sa":
			case "south australia":
				this.state = "South Australia";
				break;

			case "nsw":
			case "new south wales":
				this.state = "New South wales";
				break;

			case "qld":
			case "queensland":
				this.state = "Queensland";
				break;

			case "tas":
			case "tasmania":
				this.state = "Tasmania";
				break;

			case "vic":
			case "victoria":
				this.state = "Victoria";
				break;

			case "wa":
			case "western australia":
				this.state = "Western Australia";
				break;

			case "act":
			case "australian capital territory":
				this.state = "Australian Capital Territory";
				break;

			case "nt":
			case "northern territory":
				this.state = "Northern Territory";
				break;

			default:
				this.state = state.substring(0, 1).toUpperCase() + state.substring(1).toLowerCase();
				break;
		}
	}

	public void setCity(String city)
	{
		this.city = city.substring(0, 1).toUpperCase() + city.substring(1).toLowerCase();
	}

	public void setCountry(String country)
	{
		this.country = country.substring(0, 1).toUpperCase() + country.substring(1).toLowerCase();
	}

	public Timestamp getUpdatedDtm()
	{
		return updatedDtm == null ? createdDtm : updatedDtm;
	}

	public String getStateAbbr()
	{
		switch (state.toLowerCase())
		{
			case "south australia":
				return "SA";

			case "new south wales":
				return "NSW";

			case "queensland":
				return "QLD";

			case "tasmania":
				return "TAS";

			case "victoria":
				return "VIC";

			case "western australia":
				return "WA";

			case "australian capital territory":
				return "ACT";

			case "northern territory":
				return "NT";

			default:
				return state;
		}
	}

	@Override
	public String toString()
	{
		return street1 + " " + city + " " + getStateAbbr() + " " + postCode;
	}

}