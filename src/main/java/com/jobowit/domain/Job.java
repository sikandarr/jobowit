package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import java.util.List;

/**
 * The persistent class for the job database table.
 * 
 */
@Entity
@Table(name = "job")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "job_id")
public class Job implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "job_id", unique = true, nullable = false)
	private int jobId;

	@Lob
	private String description;

	// bi-directional many-to-one association to Bill
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<Bill> bills;

	// bi-directional many-to-one association to Comment
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<Comment> comments;

	// bi-directional many-to-one association to FieldWork
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<FieldWork> fieldWorks;

	// bi-directional many-to-one association to Invoice
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<Invoice> invoices;

	// bi-directional many-to-one association to JobStatus
	@ManyToOne
	@JoinColumn(name = "job_status_id", nullable = false)
	@JsonManagedReference
	private JobStatus jobStatus;

	// bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name = "initial_type", nullable = false)
	@JsonManagedReference
	private JobType initialType;

	// bi-directional many-to-one association to JobType
	@ManyToOne
	@JoinColumn(name = "current_type", nullable = false)
	private JobType currentType;

	// bi-directional many-to-one association to Party
	@ManyToOne
	@JoinColumn(name = "customer_id", nullable = false)
	private Party party;

	// bi-directional many-to-one association to JobSchedule
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<JobSchedule> jobSchedules;

	// bi-directional many-to-one association to OperationStaffInJob
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<OperationStaffInJob> operationStaffInJobs;

	// bi-directional many-to-one association to Quotation
	@OneToMany(mappedBy = "job")
	@JsonBackReference
	private List<Quotation> quotations;

	// bi-directional many-to-one association to SalesStaffInJob
	@OneToMany(mappedBy = "job")
	@JsonBackReference
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

	public String getDescription()
	{
		return this.description;
	}

	public void setDescription(String description)
	{
		this.description = description;
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

	public JobStatus getJobStatus()
	{
		return this.jobStatus;
	}

	public void setJobStatus(JobStatus jobStatus)
	{
		this.jobStatus = jobStatus;
	}

	public JobType getInitialType()
	{
		return this.initialType;
	}

	public void setInitialType(JobType initialType)
	{
		this.initialType = initialType;
	}

	public JobType getCurrentType()
	{
		return this.currentType;
	}

	public void setCurrentType(JobType currentType)
	{
		this.currentType = currentType;
	}

	public Party getParty()
	{
		return this.party;
	}

	public void setParty(Party party)
	{
		this.party = party;
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

}