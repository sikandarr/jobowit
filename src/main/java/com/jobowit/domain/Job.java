package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import java.util.List;

/**
 * The persistent class for the job database table.
 * 
 */
@Entity
@Table(name = "job")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "jobId")
public class Job implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id", unique = true, nullable = false)
	private int jobId;

	@Column(name = "job_uuid", columnDefinition = "CHAR", unique = true)
	private String uuid;

	@Column(name = "job_number", columnDefinition = "CHAR", length = 6, unique = true)
	private String jobNumber;

	@Lob
	private String description;

	@Column
	private String referral;

	@Column
	private String priority;

	// one-to-one association to Address
	@OneToOne(optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	// bi-directional many-to-one association to Bill
	@OneToMany(mappedBy = "job")
	private List<Bill> bills;

	// bi-directional many-to-one association to Comment
	@OneToMany(mappedBy = "job")
	private List<Comment> comments;

	// bi-directional many-to-one association to FieldWork
	@OneToMany(mappedBy = "job")
	private List<FieldWork> fieldWorks;

	// bi-directional many-to-one association to Invoice
	@OneToMany(mappedBy = "job")
	private List<Invoice> invoices;

	@OneToMany(mappedBy = "job")
	private List<JobStatusEntry> statusEntries;

	// bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name = "initial_type")
	private JobType initialType;

	// bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name = "current_type")
	private JobType currentType;

	// bi-directional many-to-one association to Party
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Party customer;

	// bi-directional many-to-one association to JobSchedule
	@OneToMany(mappedBy = "job")
	private List<JobSchedule> jobSchedules;

	// bi-directional many-to-one association to OperationStaffInJob
	@OneToMany(mappedBy = "job")
	private List<OperationStaffInJob> operationStaffInJobs;

	// bi-directional many-to-one association to Quotation
	@OneToMany(mappedBy = "job")
	private List<Quotation> quotations;

	// bi-directional many-to-one association to SalesStaffInJob
	@OneToMany(mappedBy = "job")
	private List<SalesStaffInJob> salesStaffInJobs;

	public Job()
	{
	}

	public int getJobId()
	{
		return this.jobId;
	}

	public void setJobId(int jobId)
	{
		this.jobId = jobId;
	}

	public String getUuid()
	{
		return uuid;
	}

	@JsonIgnore
	public void setUuid(String uuid)
	{
		this.uuid = uuid;
	}

	public String getJobNumber()
	{
		return jobNumber;
	}

	@JsonIgnore
	public void setJobNumber(String jobNumber)
	{
		this.jobNumber = jobNumber;
	}

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public String getReferral()
	{
		return referral;
	}

	public void setReferral(String referral)
	{
		this.referral = referral;
	}

	public String getPriority()
	{
		return priority;
	}

	public void setPriority(String priority)
	{
		this.priority = priority;
	}

	public Address getAddress()
	{
		return address;
	}

	public void setAddress(Address address)
	{
		this.address = address;
	}

	public String getAddressStr()
	{
		return getAddress().toString();
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
		bill.setJob(this);

		return bill;
	}

	public Bill removeBill(Bill bill)
	{
		getBills().remove(bill);
		bill.setJob(null);

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
		comment.setJob(this);

		return comment;
	}

	public Comment removeComment(Comment comment)
	{
		getComments().remove(comment);
		comment.setJob(null);

		return comment;
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
		fieldWork.setJob(this);

		return fieldWork;
	}

	public FieldWork removeFieldWork(FieldWork fieldWork)
	{
		getFieldWorks().remove(fieldWork);
		fieldWork.setJob(null);

		return fieldWork;
	}

	public List<Invoice> getInvoices()
	{
		return this.invoices;
	}

	public void setInvoices(List<Invoice> invoices)
	{
		this.invoices = invoices;
	}

	public Invoice addInvoice(Invoice invoice)
	{
		getInvoices().add(invoice);
		invoice.setJob(this);

		return invoice;
	}

	public Invoice removeInvoice(Invoice invoice)
	{
		getInvoices().remove(invoice);
		invoice.setJob(null);

		return invoice;
	}

	public JobType getInitialType()
	{
		return this.initialType;
	}

	public void setInitialType(JobType initialType)
	{
		this.initialType = initialType;
	}

	public List<JobStatusEntry> getStatusEntries()
	{
		return statusEntries;
	}

	public void setStatusEntries(List<JobStatusEntry> statusEntries)
	{
		this.statusEntries = statusEntries;
	}

	public JobStatusEntry addStatusEntry(JobStatusEntry statusEntry)
	{
		getStatusEntries().add(statusEntry);
		statusEntry.setJob(this);

		return statusEntry;
	}

	public JobStatusEntry removeStatusEntry(JobStatusEntry statusEntry)
	{
		getStatusEntries().remove(statusEntry);
		statusEntry.setJob(null);

		return statusEntry;
	}

	public JobType getCurrentType()
	{
		return this.currentType;
	}

	public void setCurrentType(JobType currentType)
	{
		this.currentType = currentType;
	}

	public Party getCustomer()
	{
		return this.customer;
	}

	public void setCustomer(Party party)
	{
		this.customer = party;
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
		jobSchedule.setJob(this);

		return jobSchedule;
	}

	public JobSchedule removeJobSchedule(JobSchedule jobSchedule)
	{
		getJobSchedules().remove(jobSchedule);
		jobSchedule.setJob(null);

		return jobSchedule;
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
		operationStaffInJob.setJob(this);

		return operationStaffInJob;
	}

	public OperationStaffInJob removeOperationStaffInJob(OperationStaffInJob operationStaffInJob)
	{
		getOperationStaffInJobs().remove(operationStaffInJob);
		operationStaffInJob.setJob(null);

		return operationStaffInJob;
	}

	public List<Quotation> getQuotations()
	{
		return this.quotations;
	}

	public void setQuotations(List<Quotation> quotations)
	{
		this.quotations = quotations;
	}

	public Quotation addQuotation(Quotation quotation)
	{
		getQuotations().add(quotation);
		quotation.setJob(this);

		return quotation;
	}

	public Quotation removeQuotation(Quotation quotation)
	{
		getQuotations().remove(quotation);
		quotation.setJob(null);

		return quotation;
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
		salesStaffInJob.setJob(this);

		return salesStaffInJob;
	}

	public SalesStaffInJob removeSalesStaffInJob(SalesStaffInJob salesStaffInJob)
	{
		getSalesStaffInJobs().remove(salesStaffInJob);
		salesStaffInJob.setJob(null);

		return salesStaffInJob;
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

}