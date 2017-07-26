package com.jobowit.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "uploaded_file")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class UploadedFile implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "uploaded_file_id", unique = true, nullable = false)
	private int id;
	
	@Column(name = "uuid", columnDefinition = "VARCHAR", unique = true)
	private String uuid;
	
	@Column
	private String name;
	
	@Column
	private String type;
	
	@Column
	private long size;
	
	@Column(columnDefinition = "mediumblob")
	@Lob
	private byte[] content;
	
	@ManyToOne
	@JoinColumn(name = "comment_id")
	private Comment comment;

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	@JsonProperty
	public String getUuid()
	{
		return uuid;
	}

	@JsonIgnore
	public void setUuid(String uuid)
	{
		this.uuid = uuid;
	}

	public String getName()
	{
		return name;
	}

	@JsonIgnore
	public void setName(String name)
	{
		this.name = name;
	}

	public String getType()
	{
		return type;
	}

	@JsonIgnore
	public void setType(String type)
	{
		this.type = type;
	}

	public long getSize()
	{
		return size;
	}

	@JsonIgnore
	public void setSize(long size)
	{
		this.size = size;
	}

	@JsonIgnore
	public byte[] getContent()
	{
		return content;
	}

	public void setContent(byte[] content)
	{
		this.content = content;
	}

	public Comment getComment()
	{
		return comment;
	}

	public void setComment(Comment comment)
	{
		this.comment = comment;
	}
}
