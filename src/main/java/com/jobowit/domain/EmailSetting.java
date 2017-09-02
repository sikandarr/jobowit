package com.jobowit.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicUpdate;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.jobowit.utils.EncryptionService;

import lombok.Getter;
import lombok.Setter;

@Entity
@DynamicUpdate
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Getter @Setter
public class EmailSetting implements Serializable
{
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int id;
	
	@Column private String emailAddress;
	@Column private String password;
	@Column private String smtpHost;
	@Column private int smtpPort;
	@Column private boolean smtpStarttlsEnable;
	
	@JsonProperty
	public void setPassword(String password) throws Exception
	{
		this.password = EncryptionService.encrypt(password);
	}
	
	@JsonIgnore
	public String getPassword() throws Exception
	{
		return EncryptionService.decrypt(this.password);
	}
}
