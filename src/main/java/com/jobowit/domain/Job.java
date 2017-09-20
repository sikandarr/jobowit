package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Entity
@Table(name = "job")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobId")
@Data
@NoArgsConstructor
public class Job implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id", unique = true, nullable = false)
	private int jobId;

	@Column(name = "job_uuid", columnDefinition = "CHAR", unique = true, insertable = false, updatable = false)
	private String uuid;

	@Column(name = "job_number", columnDefinition = "CHAR", length = 6, unique = true, updatable = false)
	private String jobNumber;

	@Lob
	private String description;

	@Column
	private String referral;

	@Column
	private String priority;

	@Column
	private String contactName;

	@Column
	private String phone;

	@Column
	private String mobile;

	@Column
	private String email;

	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	@OneToMany(mappedBy = "job")
	private List<Bill> bills;

	@OneToMany(mappedBy = "job")
	private List<Comment> comments;

	@OneToMany(mappedBy = "job")
	private List<FieldWork> fieldWorks;

	@OneToMany(mappedBy = "job")
	private List<Invoice> invoices;

	@OneToMany(mappedBy = "job")
	private List<JobStatusEntry> statusEntries;

	@ManyToOne
	@JoinColumn(name = "initial_type")
	private JobType initialType;

	@ManyToOne
	@JoinColumn(name = "current_type")
	private JobType currentType;

	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Party customer;

	@OneToMany(mappedBy = "job")
	private List<JobSchedule> jobSchedules;

	@OneToMany(mappedBy = "job")
	private List<OperationStaffInJob> operationStaffInJobs;

	@OneToMany(mappedBy = "job")
	private List<Quotation> quotations;

	public String getAddressStr()
	{
		return getAddress().toString();
	}

	public String getCustomerName()
	{
		return getCustomer().getName();
	}

	public String getCustomerUid()
	{
		return getCustomer().getUuid();
	}

	public String getType()
	{
		return getCurrentType().getJobType();
	}

	@JsonIgnore
	public JobStatus getCurrentStatus()
	{
		return getStatusEntries().stream()
				.max((s1, s2) -> Long.compare(s1.getEntryDtm().getTime(), s2.getEntryDtm().getTime())).orElse(null)
				.getStatus();
	}

	public String getStatus()
	{
		return getCurrentStatus().getStatus();
	}

	public boolean getActive()
	{
		return getCurrentStatus().isActive();
	}

	public JobSchedule getLatestSchedule()
	{
		if (getJobSchedules() != null && getJobSchedules().size() > 0)
		{
			getJobSchedules().sort((s1, s2) -> s2.getStartDtm().compareTo(s1.getStartDtm()));
			return getJobSchedules().get(0);
		}
		return null;
	}

	public String getLastEditedBy()
	{
		Optional<Comment> c = this.getComments().stream().filter((c1) -> c1.isLogMessage()).reduce((first, second) -> second);
		return c.isPresent() ? c.get().getStaffUser().getName() : "Not available";
	}

	public List<Map<String, String>> getOperationsStaff()
	{
		List<Map<String, String>> roles = new ArrayList<Map<String, String>>();
		for (OperationStaffInJob s : this.getOperationStaffInJobs())
		{
			Map<String, String> m = new LinkedHashMap<>();
			m.put("staffName", s.getStaff().getName());
			m.put("role", s.getStaffJobRole().getRoleName());
			m.put("comission", s.getComissionPercentage() == null ? "0.0" : "" + s.getComissionPercentage());
			roles.add(m);
		}
		return roles;
	}

}