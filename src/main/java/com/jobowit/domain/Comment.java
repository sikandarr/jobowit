package com.jobowit.domain;

import java.io.Serializable;
import javax.persistence.*;

import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.Getter;
import lombok.Setter;

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
@Getter @Setter
public class Comment implements Serializable, Comparable<Comment>
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id", unique = true, nullable = false)
	private int commentId;

	@Column(name = "comment_dtm", insertable=false, updatable=false)
	private Timestamp commentDtm;

	@Lob
	@Column(name = "details")
	private String comment;

	@ManyToOne
	@JoinColumn(name = "job_id")
	private Job job;

	@ManyToOne
	@JoinColumn(name = "party_id")
	private Party party;

	@ManyToOne
	@JoinColumn(name = "staff_id", nullable = false)
	private Staff staffUser;
	
	private boolean logMessage;
	
	@OneToMany(mappedBy = "comment")
	private List<UploadedFile> uploadedFiles;
	
	@Override
	public int compareTo(Comment c)
	{
		return this.getCommentDtm().compareTo(c.getCommentDtm());
	}

}