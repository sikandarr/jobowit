package com.jobowit.exception;

public class OneToManyManageException extends RuntimeException
{
	private static final long serialVersionUID = 1L;

	public OneToManyManageException(String message)
	{
		super(message);
	}
	
	public OneToManyManageException(Exception e)
	{
		super(e);
	}
}
