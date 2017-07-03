package com.jobowit.access;

import java.io.Serializable;
import javax.persistence.*;
import com.jobowit.domain.Staff;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name="access_control")
public class AccessControl implements GrantedAuthority, Serializable
{
	private static final long serialVersionUID = 1L;
	
	@EmbeddedId
	private AccessControlId id;
	
	@MapsId("table_name")
    @JoinColumn(name="staff_id", referencedColumnName="staff_id")
	@ManyToOne
	Staff staff;
	
	@MapsId("table_name")
    @JoinColumn(name="table_name", referencedColumnName="table_name")
	@ManyToOne
	DbTable dbTable;
	
	@Column(name="can_read")
	private boolean canRead;
	
	@Column(name="can_write")
	private boolean canWrite;
	
	@Column(name="can_delete")
	private boolean canDelete;
	
	public AccessControlId getId()
	{
		return id;
	}

	public void setId(AccessControlId id)
	{
		this.id = id;
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
		String read="", write="", delete = "";
		boolean noAccess = true;
		if (isCanRead()) {read = "_READ"; noAccess = false;}
		if (isCanWrite()) {write = "_WRITE"; noAccess = false;}
		if (isCanDelete()) {delete = "_DELETE"; noAccess = false;}
		
		return this.dbTable.tableName + (noAccess ? "_NO_ACCESS":read + write + delete);
	}

}
