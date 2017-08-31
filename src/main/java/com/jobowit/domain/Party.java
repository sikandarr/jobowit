package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.constraint.Constants;

import java.util.List;

/**
 * The persistent class for the party database table.
 * 
 */
@Entity
@DynamicUpdate
@Table(name = "party")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "partyId")
public class Party implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "party_id", unique = true, nullable = false)
	private Long partyId;

	@Column(name = "party_uuid", columnDefinition = "CHAR", unique = true, updatable = false)
	private String uuid;

	@Column(name = "myob_uid", columnDefinition = "CHAR", unique = true)
	private String myobUid;

	@Column(name = "is_individual")
	private boolean isIndividual;

	@Column(name = "type", columnDefinition = "enum")
	private String type;

	@Column(name = "contact_name", length = 100)
	private String contactName;

	@Column(length = 50)
	@Pattern(regexp = Constants.EMAILREGEXPATTERN, flags = Pattern.Flag.CASE_INSENSITIVE, message = "Invalid email address")
	private String email;

	@Column(length = 45)
	// @Pattern(regexp = "^04\\d{8}$", message = "Not a valid Australian mobile
	// number")
	private String mobile;

	@Column(nullable = false, length = 100)
	@NotNull(message = "Please provide name")
	@NotBlank(message = "Name can not be blank")
	private String name;

	@Column(length = 45)
	// @Pattern(regexp = "^(0(2|3|7|8))?\\d{8}$", message = "Not a valid
	// Australian phone number")
	private String phone;

	@Column(name = "updated_dtm", insertable = false, updatable = false)
	private Timestamp updatedDtm;

	@Column(name = "created_dtm", insertable = false, updatable = false)
	private Timestamp createdDtm;

	@OneToOne(mappedBy = "party")
	@JsonIgnore
	private MyobSyncDates syncdates;

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
	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "mailing_address_id")
	private Address mailingAddress;

	// one-to-one association to Address
	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "physical_address_id")
	// @RestResource(exported = false)
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

	public String getMyobUid()
	{
		return myobUid;
	}

	public void setMyobUid(String myobUid)
	{
		this.myobUid = myobUid;
	}

	public boolean isIndividual()
	{
		return isIndividual;
	}

	public void setIndividual(boolean isIndividual)
	{
		this.isIndividual = isIndividual;
	}

	public String getType()
	{
		return type;
	}

	public void setType(String type)
	{
		this.type = type;
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

	public Timestamp getUpdatedDtm()
	{
		Timestamp partyUpdated = this.updatedDtm == null ? this.createdDtm : this.updatedDtm;
		Timestamp addressUpdated = null;
		
		if (this.getPhysicalAddress() != null)
			addressUpdated = this.getPhysicalAddress().getUpdatedDtm();

		if (this.getMailingAddress() != null)
		{
			if (addressUpdated != null)
				addressUpdated = this.getMailingAddress().getUpdatedDtm().getTime() > addressUpdated.getTime()
						? this.getMailingAddress().getUpdatedDtm() : addressUpdated;
			else addressUpdated = this.getMailingAddress().getUpdatedDtm();
		}

		if (addressUpdated != null)
			return partyUpdated.getTime() > addressUpdated.getTime() ? partyUpdated : addressUpdated;
		else return partyUpdated;
	}

	public Timestamp getCreatedDtm()
	{
		return createdDtm;
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
		return this.mailingAddress != null ? getMailingAddress().toString() : "";
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
		return this.physicalAddress != null ? getPhysicalAddress().toString() : "";
	}

	public long getActiveJobCount()
	{
		if (this.getJobs() != null)
			return this.getJobs().stream().filter(job -> job.getActive() == true).count();
		return 0;
	}

	public MyobSyncDates getSyncdates()
	{
		return syncdates;
	}

	public void setSyncdates(MyobSyncDates syncdates)
	{
		this.syncdates = syncdates;
	}

}