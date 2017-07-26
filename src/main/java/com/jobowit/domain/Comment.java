package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import java.sql.Timestamp;
import java.util.List;

/**
 * The persistent class for the comment database table.
 * 
 */
@Entity
@Table(name = "comment")
@DynamicInsert
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "commentId")
public class Comment implements Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id", unique = true, nullable = false)
	private int commentId;

	@Column(name = "comment_dtm", insertable=false)
	private Timestamp commentDtm;

	@Lob
	@Column(name = "details")
	private String comment;

	// bi-directional many-to-one association to Job
	@ManyToOne
	@JoinColumn(name = "job_id")
	private Job job;

	// bi-directional many-to-one association to Party
	@ManyToOne
	@JoinColumn(name = "party_id")
	private Party party;

	// bi-directional many-to-one association to Staff
	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staffUser;
	
	@OneToMany(mappedBy = "comment")
	private List<UploadedFile> uploadedFiles;

	public Comment()
	{
	}

	public int getCommentId()
	{
		return this.commentId;
	}

	public void setCommentId(int commentId)
	{
		this.commentId = commentId;
	}

	public Timestamp getCommentDtm()
	{
		return this.commentDtm;
	}

	public void setCommentDtm(Timestamp commentDtm)
	{
		this.commentDtm = commentDtm;
	}

	public String getComment()
	{
		return this.comment;
	}

	public void setComment(String details)
	{
		this.comment = details;
	}

	public Job getJob()
	{
		return this.job;
	}

	public void setJob(Job job)
	{
		this.job = job;
	}

	public Party getParty()
	{
		return this.party;
	}

	public void setParty(Party party)
	{
		this.party = party;
	}

	public Staff getStaffUser()
	{
		return this.staffUser;
	}

	public void setStaffUser(Staff staff)
	{
		this.staffUser = staff;
	}

	public List<UploadedFile> getUploadedFiles()
	{
		return uploadedFiles;
	}

	public void setUploadedFiles(List<UploadedFile> uploadedFiles)
	{
		this.uploadedFiles = uploadedFiles;
	}

}