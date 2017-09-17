package com.jobowit.helpers;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Date;
import javax.persistence.Entity;

import org.apache.log4j.Logger;
import com.jobowit.domain.Address;

public class EditedFields
{
	static Logger log = Logger.getLogger(EditedFields.class.getName());

	public static <T extends Serializable> String determine(T old, T current)
	{

		Class<? extends Serializable> klass = current.getClass();

		if (!klass.isAnnotationPresent(Entity.class))
			throw new IllegalArgumentException("not a domain entity class");

		String editedFields = "";

		for (Field f : klass.getDeclaredFields())
		{
			Method getMethod;
			Object newValue = null;
			Object oldValue = null;
			try
			{
				getMethod = klass
						.getMethod("get" + f.getName().substring(0, 1).toUpperCase() + f.getName().substring(1));

				if (getMethod.getReturnType().getName().equals("java.util.List"))
					continue;

				newValue = getMethod.invoke(current);
				oldValue = getMethod.invoke(old);
			}
			catch (NoSuchMethodException e)
			{
			}
			catch (SecurityException | IllegalAccessException | IllegalArgumentException | InvocationTargetException e)
			{
				log.error("exception in EditedFields.determine() " + klass.getSimpleName() + ": " + e.getMessage());
				continue;
			}
			/*@off*/
			if (
					oldValue != null && 
					newValue != null && 
					(
						oldValue instanceof String || 
						oldValue instanceof Number ||
						oldValue instanceof Boolean || 
						oldValue instanceof Address || 
						oldValue instanceof Date
					) && 
					!oldValue.equals(newValue)
				)
			/*@on*/
			{
				String fieldName = splitCamelCase(f.getName().substring(0, 1).toUpperCase() + f.getName().substring(1));
				String modified = "from " + oldValue.toString() + " to " + newValue.toString();
				editedFields += fieldName + ": " + modified + "<br />";
			}
		}

		return !editedFields.equals("") ? "<p><strong>edited</strong></p>/n<p>" + editedFields + "</p>" : "";
	}

	/*
	 * stackoverflow: https://stackoverflow.com/questions/2559759/
	 */
	private static String splitCamelCase(String s)
	{
		return s.replaceAll(String.format("%s|%s|%s", "(?<=[A-Z])(?=[A-Z][a-z])", "(?<=[^A-Z])(?=[A-Z])",
				"(?<=[A-Za-z])(?=[^A-Za-z])"), " ");
	}
}
