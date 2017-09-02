package com.jobowit.domain.access;

import java.io.Serializable;
import javax.persistence.*;
import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "access_control", uniqueConstraints =
	{ @UniqueConstraint(columnNames =
				{ "table_name", "role_name" }) })
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class AccessControl implements GrantedAuthority, Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "access_control_id", unique = true, nullable = false)
	private int id;

	@ManyToOne
	@JoinColumn(name = "table_name", referencedColumnName = "table_name", nullable = false)
	@JsonIgnore
	ProtectedResource dbTable;

	@ManyToOne
	@JoinColumn(name = "role_name", referencedColumnName = "role_name", nullable = true)
	@JsonIgnore
	AccessRole accessRole;

	@Column(name = "can_read")
	private boolean canRead;

	@Column(name = "can_write")
	private boolean canWrite;

	@JsonIgnore
	@Column(name = "can_delete")
	private boolean canDelete;

	public int getId()
	{
		return id;
	}
	public void setId(int accessControlId)
	{
		this.id = accessControlId;
	}

	public ProtectedResource getDbTable()
	{
		return dbTable;
	}

	public void setDbTable(ProtectedResource dbTable)
	{
		this.dbTable = dbTable;
	}

	public AccessRole getAccessRole()
	{
		return accessRole;
	}

	public void setAccessRole(AccessRole accessRole)
	{
		this.accessRole = accessRole;
	}

	public boolean isCanRead()
	{
		return canRead;
	}

	public void setCanRead(boolean canRead)
	{
		this.canRead = canRead;
	}

	public boolean isCanWrite()
	{
		return canWrite;
	}

	public void setCanWrite(boolean canWrite)
	{
		this.canWrite = canWrite;
	}

	public boolean isCanDelete()
	{
		return canDelete;
	}

	public void setCanDelete(boolean canDelete)
	{
		this.canDelete = canDelete;
	}

	@JsonIgnore
	@Override
	public String getAuthority()
	{
		String read = "", write = "", delete = "";
		boolean noAccess = true;
		if (isCanRead())
		{
			read = "_READ";
			noAccess = false;
		}
		if (isCanWrite())
		{
			write = "_WRITE";
			noAccess = false;
		}
		if (isCanDelete())
		{
			delete = "_DELETE";
			noAccess = false;
		}

		return this.dbTable.name.toUpperCase() + (noAccess ? "_NO_ACCESS" : read + write + delete);
	}
	
	public String getResourceName()
	{
		return this.dbTable.getName();
	}

}
