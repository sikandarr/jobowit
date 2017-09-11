package com.jobowit.helpers;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.persistence.Id;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.support.Repositories;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import com.jobowit.domain.eventhandlers.InvoiceEventHandler;
import com.jobowit.exception.OneToManyManageException;

@Component
public class ManageOneToMany
{
	@Autowired
	private WebApplicationContext appContext;

	private static Repositories repositories;

	static Logger log = Logger.getLogger(InvoiceEventHandler.class.getName());

	@PostConstruct
	public void init()
	{
		repositories = new Repositories(appContext);
	}

	public static <T, K> void addChildren(T instance, List<K> children)
	{
		Class<? extends Object> childClass = children.get(0).getClass();
		@SuppressWarnings("unchecked")
		CrudRepository<K, ?> childRepo = (CrudRepository<K, ?>) repositories.getRepositoryFor(childClass);
		
		Method setParent = null;
		Method getParent = null;
		for (Method method : childClass.getMethods())
		{
			if (method.getParameterTypes().length > 0)
			{
				if (method.getParameterTypes()[0].equals(instance.getClass()))
				{
					setParent = method;
				}
			}
			if (method.getReturnType().equals(instance.getClass()))
			{
				getParent = method;
			}
		}

		for (K child : children)
		{
			try
			{
				if (getParent.invoke(child) == null)
				{
					setParent.invoke(child, instance);
					childRepo.save(child);
				}
			}
			catch (IllegalAccessException | IllegalArgumentException | InvocationTargetException e)
			{
				log.error("exception in ManagingOneToMany.addChildren() for " + instance.getClass().getSimpleName(), e);
				throw new OneToManyManageException(e);
			}
		}
	}

	@SuppressWarnings("unchecked")
	public static <T, K> void syncChildren(T instance, List<K> children)
	{
		Class<? extends Object> childClass = children.get(0).getClass();
		Class<? extends Object> parentClass = instance.getClass();
		String childRepositoryClass = childClass.getName().replaceFirst("domain", "repositories") + "Repository";

		CrudRepository<K, ?> childRepo = (CrudRepository<K, ?>) repositories.getRepositoryFor(childClass);

		try
		{
			Class<? extends CrudRepository<K, ?>> repositoryClass = (Class<? extends CrudRepository<K, ?>>) Class
					.forName(childRepositoryClass);

			Method byParentInChildRepo = null;
			String parentIdName = null;

			for (Method method : repositoryClass.getMethods())
			{
				if (method.isAnnotationPresent(ByParent.class))
				{
					byParentInChildRepo = method;
					Annotation annotation = method.getAnnotation(ByParent.class);
					ByParent p = (ByParent) annotation;
					parentIdName = p.id().substring(0, 1).toUpperCase() + p.id().substring(1);
					break;
				}
			}

			String childIdName = null;
			for (Field f : childClass.getDeclaredFields())
			{
				if (f.isAnnotationPresent(Id.class))
				{
					childIdName = f.getName().substring(0, 1).toUpperCase() + f.getName().substring(1);
					break;
				}
			}

			Method getIdInParent = parentClass.getMethod("get" + parentIdName);
			Method getIdInChild = childClass.getMethod("get" + childIdName);
			Object parentId = getIdInParent.invoke(instance);

			List<K> oldChildren = (List<K>) byParentInChildRepo.invoke(childRepo, parentId);

			if (oldChildren.size() > children.size())
			{
				for (K oldChild : oldChildren)
				{
					boolean found = false;
					for (K child : children)
					{
						if (getIdInChild.invoke(oldChild).equals(getIdInChild.invoke(child)))
							found = true;
					}
					if (!found)
						childRepo.delete(oldChild);
				}
			}
		}
		catch (NoSuchMethodException | SecurityException | IllegalAccessException | IllegalArgumentException
				| InvocationTargetException | ClassNotFoundException e)
		{
			log.error("exception in ManagingOneToMany.syncChildren() for " + instance.getClass().getSimpleName(), e);
			throw new OneToManyManageException(e);
		}
	}
}
