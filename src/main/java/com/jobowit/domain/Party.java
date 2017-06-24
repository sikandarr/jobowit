package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.NotBlank;

import com.jobowit.domain.constraint.Constants;
import java.util.List;

/**
 * The persistent class for the party database table.
 * 
 */
@Entity
@Table(name = "party")
@NamedQuery(name = "Party.findAll", query = "SELECT p FROM Party p")
public class Party implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "party_id", unique = true, nullable = false)
	private int partyId;

	@Column(name = "contact_name", length = 100)
	private String contactName;

	@Column(length = 50)
	@Pattern(regexp = Constants.EMAILREGEXPATTERN, flags = Pattern.Flag.CASE_INSENSITIVE, message="Invalid email address")
	private String email;

	@Column(length = 45)
	@Pattern(regexp = "^04?\\d{8}$", message = "Not a valid Australian mobile number")
	private String mobile;

	@Column(nullable = false, length = 100)
	@NotNull(message = "Please provide name")
	@NotBlank(message = "Name can not be blank")
	private String name;

	@Column(length = 45)
	@Pattern(regexp = "^(0(2|3|7|8))?\\d{8}$", message = "Not a valid Australian phone number")
	private String phone;

	// bi-directional many-to-one association to Bill
	@OneToMany(mappedBy = "supplier")
	private List<Bill> bills;

	// bi-directional many-to-one association to Comment
	@OneToMany(mappedBy = "party")
	private List<Comment> comments;

	// bi-directional many-to-one association to Job
	@OneToMany(mappedBy = "party")
	private List<Job> jobs;

	// bi-directional many-to-one association to Address
	@ManyToOne
	@JoinColumn(name = "mailing_address_id", nullable = false)
	private Address mailingAddress;

	// bi-directional many-to-one association to Address
	@ManyToOne
	@JoinColumn(name = "physical_address_id", nullable = false)
	private Address physicalAddress;

	public Party()
	{
	}

	public int getPartyId()
	{
		return this.partyId;
	}

	public void setPartyId(int partyId)
	{
		this.partyId = partyId;
	}

	public String getContactName()
	{
		return this.contactName;
	}

	public void setContactName(String contactName)
	{
		this.contactName = contactName;
	}

	public String getEmail()
	{
		return this.email;
	}
	
	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getMobile()
	{
		return this.mobile;
	}

	public void setMobile(String mobile)
	{
		this.mobile = mobile;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getPhone()
	{
		return this.phone;
	}

	public void setPhone(String phone)
	{
		this.phone = phone;
	}

	public List<Bill> getBills()
	{
		return this.bills;
	}

	public void setBills(List<Bill> bills)
	{
		this.bills = bills;
	}

	public Bill addBill(Bill bill)
	{
		getBills().add(bill);
		bill.setSupplier(this);

		return bill;
	}

	public Bill removeBill(Bill bill)
	{
		getBills().remove(bill);
		bill.setSupplier(null);

		return bill;
	}

	public List<Comment> getComments()
	{
		return this.comments;
	}

	public void setComments(List<Comment> comments)
	{
		this.comments = comments;
	}

	public Comment addComment(Comment comment)
	{
		getComments().add(comment);
		comment.setParty(this);

		return comment;
	}

	public Comment removeComment(Comment comment)
	{
		getComments().remove(comment);
		comment.setParty(null);

		return comment;
	}

	public List<Job> getJobs()
	{
		return this.jobs;
	}

	public void setJobs(List<Job> jobs)
	{
		this.jobs = jobs;
	}

	public Job addJob(Job job)
	{
		getJobs().add(job);
		job.setParty(this);

		return job;
	}

	public Job removeJob(Job job)
	{
		getJobs().remove(job);
		job.setParty(null);

		return job;
	}

	public Address getMailingAddress()
	{
		return this.mailingAddress;
	}

	public void setMailingAddress(Address mailingAddress)
	{
		this.mailingAddress = mailingAddress;
	}

	public Address getPhysicalAddress()
	{
		return this.physicalAddress;
	}

	public void setPhysicalAddress(Address physicalAddress)
	{
		this.physicalAddress = physicalAddress;
	}

}