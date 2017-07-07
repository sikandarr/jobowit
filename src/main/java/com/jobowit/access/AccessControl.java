package com.jobowit.access;

import java.io.Serializable;
import javax.persistence.*;
import com.jobowit.domain.Staff;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "access_control", uniqueConstraints =
	{ @UniqueConstraint(columnNames =
				{ "table_name", "staff_id" }), @UniqueConstraint(columnNames =
				{ "table_name", "role_name" }) })
public class AccessControl implements GrantedAuthority, Serializable
{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "access_control_id", unique = true, nullable = false)
	private int accessControlId;

	@ManyToOne
	@JoinColumn(name = "table_name", referencedColumnName = "table_name", nullable = false)
	DbTable dbTable;
	
	@ManyToOne
	@JoinColumn(name = "staff_id", referencedColumnName = "staff_id", nullable = true)
	Staff staff;

	@ManyToOne
	@JoinColumn(name = "role_name", referencedColumnName = "role_name", nullable = true)
	AccessRole accessRole;

	@Column(name = "can_read")
	private boolean canRead;

	@Column(name = "can_write")
	private boolean canWrite;

	@Column(name = "can_delete")
	private boolean canDelete;

	public int getAccessControlId()
	{
		return accessControlId;
	}

	public void setAccessControlId(int accessControlId)
	{
		this.accessControlId = accessControlId;
	}

	public Staff getStaff()
	{
		return staff;
	}

	public void setStaff(Staff staff)
	{
		this.staff = staff;
	}

	public DbTable getDbTable()
	{
		return dbTable;
	}

	public void setDbTable(DbTable dbTable)
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

		return this.dbTable.tableName.toUpperCase() + (noAccess ? "_NO_ACCESS" : read + write + delete);
	}

}
