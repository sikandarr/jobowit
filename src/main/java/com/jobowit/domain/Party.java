package com.jobowit.domain;

import java.io.Serializable;
import java.sql.Timestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.validator.constraints.NotBlank;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.constraint.Constants;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * The persistent class for the party database table.
 * 
 */
@Entity
@DynamicUpdate
@Table(name = "party")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "partyId")
@Data
@NoArgsConstructor
public class Party implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "party_id", unique = true, nullable = false)
	private long partyId;

	@Column(name = "party_uuid", columnDefinition = "CHAR", unique = true, insertable = false, updatable = false)
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

	@OneToMany(mappedBy = "supplier")
	private List<Bill> bills;

	@OneToMany(mappedBy = "party")
	private List<Comment> comments;

	@OneToMany(mappedBy = "customer")
	private List<Job> jobs;

	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "mailing_address_id")
	private Address mailingAddress;

	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "physical_address_id")
	private Address physicalAddress;

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

	public String getMailingAddressStr()
	{
		return this.mailingAddress != null ? getMailingAddress().toString() : "";
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
	
	public long getTotalJobCount()
	{
		if (this.getJobs() != null)
			return this.getJobs().stream().count();
		return 0;
	}
}