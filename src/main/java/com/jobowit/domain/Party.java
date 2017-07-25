package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.constraint.Constants;

import java.util.List;

/**
 * The persistent class for the party database table.
 * 
 */
@Entity
@Table(name = "party")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "partyId")
public class Party implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "party_id", unique = true, nullable = false)
	private Long partyId;
	
	@Column(name = "party_uuid", columnDefinition="CHAR", unique = true)
	private String uuid;

	@Column(name = "contact_name", length = 100)
	private String contactName;

	@Column(length = 50)
	@Pattern(regexp = Constants.EMAILREGEXPATTERN, flags = Pattern.Flag.CASE_INSENSITIVE, message = "Invalid email address")
	private String email;

	@Column(length = 45)
	@Pattern(regexp = "^04\\d{8}$", message = "Not a valid Australian mobile number")
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
	@OneToMany(mappedBy = "customer")
	private List<Job> jobs;

	// one-to-one association to Address
	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "mailing_address_id")
	private Address mailingAddress;

	// one-to-one association to Address
	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "physical_address_id")
	//@RestResource(exported = false)
	private Address physicalAddress;

	public Party()
	{
	}

	public Long getPartyId()
	{
		return this.partyId;
	}

	public void setPartyId(Long partyId)
	{
		this.partyId = partyId;
	}

	public String getUuid()
	{
		return uuid;
	}

	public void setUuid(String uuid)
	{
		this.uuid = uuid;
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
		job.setCustomer(this);

		return job;
	}

	public Job removeJob(Job job)
	{
		getJobs().remove(job);
		job.setCustomer(null);

		return job;
	}

	public Address getMailingAddress()
	{
		return this.mailingAddress;
	}

	@JsonProperty
	public void setMailingAddress(Address mailingAddress)
	{
		this.mailingAddress = mailingAddress;
	}
	
	public String getMailingAddressStr()
	{
		return getMailingAddress().toString();
	}

	public Address getPhysicalAddress()
	{
		return this.physicalAddress;
	}

	@JsonProperty
	public void setPhysicalAddress(Address physicalAddress)
	{
		this.physicalAddress = physicalAddress;
	}
	
	public String getPhysicalAddressStr()
	{
		return getPhysicalAddress().toString();
	}

	public long getActiveJobCount()
	{
		if (this.getJobs() != null)
			return this.getJobs().stream().filter(job -> job.getActive() == true).count();
		return 0;
	}

}