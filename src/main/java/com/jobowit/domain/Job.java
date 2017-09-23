package com.jobowit.domain;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
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

	@Column(name = "created_dtm", columnDefinition = "DATETIME", insertable = false, updatable = false)
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDateTime createdDtm;

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

	@Data
	@AllArgsConstructor
	private class Flag
	{
		String bgcolor;
		String dayLabel;
		int daysPast;
		String message;
		String code;
	}

	public Flag getFlag()
	{
		LocalDate today = LocalDate.now();
		int daysSinceCreated = (int) java.time.temporal.ChronoUnit.DAYS.between(this.getCreatedDtm().toLocalDate(),
				today);

		if (this.getCurrentType().getJobType().equals("Service Request"))
		{
			if (daysSinceCreated >= 1)
				if (this.getJobSchedules() == null || this.getJobSchedules().size() == 0)
					return new Flag("#FF9933", "Days since created: ", daysSinceCreated,
							"No Schedule created for this Job.", "EXP SCH");

			if (!this.getLatestSchedule().isPast())
				return new Flag("#99FF33", "Days since created: ", daysSinceCreated,
						"Job is scheduled; check schedule for info.", "OK");

			int daysSinceSchedule = (int) java.time.temporal.ChronoUnit.DAYS
					.between(this.getLatestSchedule().getFinishDtm().toLocalDate(), today);

			if (daysSinceSchedule > 0 && this.getCurrentStatus().isActive())
				return new Flag("#FF9933", "Days since latest schedule: ", daysSinceSchedule,
						"Job was scheduled but has not been marked complete.", "NOT COMP");
		}
		if (this.getCurrentType().getJobType().equals("Quote Request"))
		{
			if (daysSinceCreated >= 1)
				if ((this.getQuotations() == null || this.getQuotations().size() == 0)
						&& this.getCurrentStatus().isActive())
					return new Flag("#FF9933", "Days since created: ", daysSinceCreated,
							"No quotation added for this quote request.", "EXP QUOTE");
		}
		return new Flag("#99FF33", "Days since created: ", daysSinceCreated, "Everything seems OK.", "OK");

	}

	public JobSchedule getLatestSchedule()
	{
		if (getJobSchedules() != null && getJobSchedules().size() > 0)
		{
			getJobSchedules().sort((s1, s2) -> s1.compareTo(s2));
			return getJobSchedules().get(getJobSchedules().size() - 1);
		}
		return null;
	}

	public String getLastEditedBy()
	{
		Optional<Comment> comment = this.getComments().stream().filter((c1) -> c1.isLogMessage())
				.reduce((first, second) -> second);
		return comment.isPresent() ? comment.get().getStaffUser().getName() : "Not available";
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