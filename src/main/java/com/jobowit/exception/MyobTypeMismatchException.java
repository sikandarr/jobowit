package com.jobowit.exception;

public class MyobTypeMismatchException extends Exception
{
	private static final long serialVersionUID = 1L;

	public MyobTypeMismatchException(String message)
	{
		super(message);
	}
	
	public MyobTypeMismatchException()
	{
		super("Type mismatch from Party to Contact");
	}

}
