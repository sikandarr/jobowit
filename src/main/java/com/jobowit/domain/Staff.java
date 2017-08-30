package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.domain.access.JobowitUser;

import java.util.Date;
import java.util.List;

/**
 * The persistent class for the staff database table.
 * 
 */
@Entity
@Table(name = "staff")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "staffId")
public class Staff implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "staff_id", unique = true, nullable = false)
	private int staffId;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_dtm")
	private Date createDtm;

	@Column(length = 255)
	private String email;

	@Column(length = 100)
	private String name;

	// bi-directional many-to-one association to Comment
	@OneToMany(mappedBy = "staffUser")
	private List<Comment> comments;

	// bi-directional many-to-one association to ExtraAvailability
	@OneToMany(mappedBy = "staff")
	private List<ExtraAvailability> extraAvailabilities;

	// bi-directional many-to-one association to FieldWork
	@OneToMany(mappedBy = "staff")
	private List<FieldWork> fieldWorks;

	// bi-directional many-to-one association to JobSchedule
	@OneToMany(mappedBy = "staff")
	private List<JobSchedule> jobSchedules;

	// bi-directional many-to-one association to NonAvailability
	@OneToMany(mappedBy = "staff")
	private List<NonAvailability> nonAvailabilities;

	// bi-directional many-to-one association to OperationStaffInJob
	@OneToMany(mappedBy = "staff")
	private List<OperationStaffInJob> operationStaffInJobs;

	// bi-directional many-to-one association to RecurringAvailability
	@OneToMany(mappedBy = "staff")
	private List<RecurringAvailability> recurringAvailabilities;

	// bi-directional many-to-one association to SalesStaffInJob
	@OneToMany(mappedBy = "staff")
	private List<SalesStaffInJob> salesStaffInJobs;

	// bi-directional many-to-one association to Address
	@ManyToOne
	@JoinColumn(name = "address_id", nullable = false)
	private Address address;

	// bi-directional many-to-one association to StaffRole
	@OneToMany(mappedBy = "staff")
	private List<StaffRole> staffRoles;
	
	@OneToOne(optional = true, cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", nullable = true)
	private JobowitUser user;
	
	@Column(name = "staff_uuid", updatable=false)
	private String uuid;

	public Staff()
	{
	}

	public int getStaffId()
	{
		return this.staffId;
	}

	public void setStaffId(int staffId)
	{
		this.staffId = staffId;
	}

	public Date getCreateDtm()
	{
		return this.createDtm;
	}

	public void setCreateDtm(Date createDtm)
	{
		this.createDtm = createDtm;
	}

	public String getEmail()
	{
		return this.email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getName()
	{
		return this.name;
	}

	public void setName(String name)
	{
		this.name = name;
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
		comment.setStaffUser(this);

		return comment;
	}

	public Comment removeComment(Comment comment)
	{
		getComments().remove(comment);
		comment.setStaffUser(null);

		return comment;
	}

	public List<ExtraAvailability> getExtraAvailabilities()
	{
		return this.extraAvailabilities;
	}

	public void setExtraAvailabilities(List<ExtraAvailability> extraAvailabilities)
	{
		this.extraAvailabilities = extraAvailabilities;
	}

	public ExtraAvailability addExtraAvailability(ExtraAvailability extraAvailability)
	{
		getExtraAvailabilities().add(extraAvailability);
		extraAvailability.setStaff(this);

		return extraAvailability;
	}

	public ExtraAvailability removeExtraAvailability(ExtraAvailability extraAvailability)
	{
		getExtraAvailabilities().remove(extraAvailability);
		extraAvailability.setStaff(null);

		return extraAvailability;
	}

	public List<FieldWork> getFieldWorks()
	{
		return this.fieldWorks;
	}

	public void setFieldWorks(List<FieldWork> fieldWorks)
	{
		this.fieldWorks = fieldWorks;
	}

	public FieldWork addFieldWork(FieldWork fieldWork)
	{
		getFieldWorks().add(fieldWork);
		fieldWork.setStaff(this);

		return fieldWork;
	}

	public FieldWork removeFieldWork(FieldWork fieldWork)
	{
		getFieldWorks().remove(fieldWork);
		fieldWork.setStaff(null);

		return fieldWork;
	}

	public List<JobSchedule> getJobSchedules()
	{
		return this.jobSchedules;
	}

	public void setJobSchedules(List<JobSchedule> jobSchedules)
	{
		this.jobSchedules = jobSchedules;
	}

	public JobSchedule addJobSchedule(JobSchedule jobSchedule)
	{
		getJobSchedules().add(jobSchedule);
		jobSchedule.setStaff(this);

		return jobSchedule;
	}

	public JobSchedule removeJobSchedule(JobSchedule jobSchedule)
	{
		getJobSchedules().remove(jobSchedule);
		jobSchedule.setStaff(null);

		return jobSchedule;
	}

	public List<NonAvailability> getNonAvailabilities()
	{
		return this.nonAvailabilities;
	}

	public void setNonAvailabilities(List<NonAvailability> nonAvailabilities)
	{
		this.nonAvailabilities = nonAvailabilities;
	}

	public NonAvailability addNonAvailability(NonAvailability nonAvailability)
	{
		getNonAvailabilities().add(nonAvailability);
		nonAvailability.setStaff(this);

		return nonAvailability;
	}

	public NonAvailability removeNonAvailability(NonAvailability nonAvailability)
	{
		getNonAvailabilities().remove(nonAvailability);
		nonAvailability.setStaff(null);

		return nonAvailability;
	}

	public List<OperationStaffInJob> getOperationStaffInJobs()
	{
		return this.operationStaffInJobs;
	}

	public void setOperationStaffInJobs(List<OperationStaffInJob> operationStaffInJobs)
	{
		this.operationStaffInJobs = operationStaffInJobs;
	}

	public OperationStaffInJob addOperationStaffInJob(OperationStaffInJob operationStaffInJob)
	{
		getOperationStaffInJobs().add(operationStaffInJob);
		operationStaffInJob.setStaff(this);

		return operationStaffInJob;
	}

	public OperationStaffInJob removeOperationStaffInJob(OperationStaffInJob operationStaffInJob)
	{
		getOperationStaffInJobs().remove(operationStaffInJob);
		operationStaffInJob.setStaff(null);

		return operationStaffInJob;
	}

	public List<RecurringAvailability> getRecurringAvailabilities()
	{
		return this.recurringAvailabilities;
	}

	public void setRecurringAvailabilities(List<RecurringAvailability> recurringAvailabilities)
	{
		this.recurringAvailabilities = recurringAvailabilities;
	}

	public RecurringAvailability addRecurringAvailability(RecurringAvailability recurringAvailability)
	{
		getRecurringAvailabilities().add(recurringAvailability);
		recurringAvailability.setStaff(this);

		return recurringAvailability;
	}

	public RecurringAvailability removeRecurringAvailability(RecurringAvailability recurringAvailability)
	{
		getRecurringAvailabilities().remove(recurringAvailability);
		recurringAvailability.setStaff(null);

		return recurringAvailability;
	}

	public List<SalesStaffInJob> getSalesStaffInJobs()
	{
		return this.salesStaffInJobs;
	}

	public void setSalesStaffInJobs(List<SalesStaffInJob> salesStaffInJobs)
	{
		this.salesStaffInJobs = salesStaffInJobs;
	}

	public SalesStaffInJob addSalesStaffInJob(SalesStaffInJob salesStaffInJob)
	{
		getSalesStaffInJobs().add(salesStaffInJob);
		salesStaffInJob.setStaff(this);

		return salesStaffInJob;
	}

	public SalesStaffInJob removeSalesStaffInJob(SalesStaffInJob salesStaffInJob)
	{
		getSalesStaffInJobs().remove(salesStaffInJob);
		salesStaffInJob.setStaff(null);

		return salesStaffInJob;
	}

	public Address getAddress()
	{
		return this.address;
	}

	public void setAddress(Address address)
	{
		this.address = address;
	}

	public List<StaffRole> getStaffRoles()
	{
		return this.staffRoles;
	}

	public void setStaffRoles(List<StaffRole> staffRoles)
	{
		this.staffRoles = staffRoles;
	}

	public StaffRole addStaffRole(StaffRole staffRole)
	{
		getStaffRoles().add(staffRole);
		staffRole.setStaff(this);

		return staffRole;
	}

	public StaffRole removeStaffRole(StaffRole staffRole)
	{
		getStaffRoles().remove(staffRole);
		staffRole.setStaff(null);

		return staffRole;
	}

	public JobowitUser getUser()
	{
		return user;
	}

	public void setUser(JobowitUser user)
	{
		this.user = user;
	}

	public String getUuid()
	{
		return uuid;
	}

	public void setUuid(String staffUuid)
	{
		this.uuid = staffUuid;
	}

}