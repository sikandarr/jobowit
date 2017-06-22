package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the address database table.
 * 
 */
@Entity
@Table(name="address")
@NamedQuery(name="Address.findAll", query="SELECT a FROM Address a")
public class Address implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="address_id", unique=true, nullable=false)
	private int addressId;

	@Column(length=50)
	private String city;

	@Column(length=45)
	private String country;

	@Column(name="post_code", length=12)
	private String postCode;

	@Column(length=45)
	private String state;

	@Column(length=150)
	private String street1;

	@Column(length=150)
	private String street2;

	//bi-directional many-to-one association to Party
	@OneToMany(mappedBy="address1")
	private List<Party> parties1;

	//bi-directional many-to-one association to Party
	@OneToMany(mappedBy="address2")
	private List<Party> parties2;

	//bi-directional many-to-one association to Staff
	@OneToMany(mappedBy="address")
	private List<Staff> staffs;

	public Address() {
	}

	public int getAddressId() {
		return this.addressId;
	}

	public void setAddressId(int addressId) {
		this.addressId = addressId;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return this.country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPostCode() {
		return this.postCode;
	}

	public void setPostCode(String postCode) {
		this.postCode = postCode;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getStreet1() {
		return this.street1;
	}

	public void setStreet1(String street1) {
		this.street1 = street1;
	}

	public String getStreet2() {
		return this.street2;
	}

	public void setStreet2(String street2) {
		this.street2 = street2;
	}

	public List<Party> getParties1() {
		return this.parties1;
	}

	public void setParties1(List<Party> parties1) {
		this.parties1 = parties1;
	}

	public Party addParties1(Party parties1) {
		getParties1().add(parties1);
		parties1.setAddress1(this);

		return parties1;
	}

	public Party removeParties1(Party parties1) {
		getParties1().remove(parties1);
		parties1.setAddress1(null);

		return parties1;
	}

	public List<Party> getParties2() {
		return this.parties2;
	}

	public void setParties2(List<Party> parties2) {
		this.parties2 = parties2;
	}

	public Party addParties2(Party parties2) {
		getParties2().add(parties2);
		parties2.setAddress2(this);

		return parties2;
	}

	public Party removeParties2(Party parties2) {
		getParties2().remove(parties2);
		parties2.setAddress2(null);

		return parties2;
	}

	public List<Staff> getStaffs() {
		return this.staffs;
	}

	public void setStaffs(List<Staff> staffs) {
		this.staffs = staffs;
	}

	public Staff addStaff(Staff staff) {
		getStaffs().add(staff);
		staff.setAddress(this);

		return staff;
	}

	public Staff removeStaff(Staff staff) {
		getStaffs().remove(staff);
		staff.setAddress(null);

		return staff;
	}

}