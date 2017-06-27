package com.jobowit;

import java.util.Map;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.aop.support.AopUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

@Component
public class ProjectingProcessor implements ResourceProcessor<Resource<Object>>
{

	private static final String PROJECTION_PARAMETER = "projection";
	private final ProjectionFactory projectionFactory;
	private final RepositoryRestConfiguration repositoryRestConfiguration;
	private final HttpServletRequest request;

	public ProjectingProcessor(@Autowired final RepositoryRestConfiguration repositoryRestConfiguration,
			@Autowired final ProjectionFactory projectionFactory, @Autowired final HttpServletRequest request)
	{
		this.repositoryRestConfiguration = repositoryRestConfiguration;
		this.projectionFactory = projectionFactory;
		this.request = request;
	}

	@Override
	public Resource<Object> process(final Resource<Object> resource)
	{
		String defaultProjection = "default" + resource.getContent().getClass().getSimpleName() + "Projection";
		if (AopUtils.isAopProxy(resource.getContent()))
		{
			return resource;
		}

		final Optional<Class<?>> projectionType = findProjectionType(resource.getContent(), defaultProjection);
		if (projectionType.isPresent())
		{
			final Object projection = projectionFactory.createProjection(projectionType.get(), resource.getContent());
			return new ProjectingResource<>(projection);
		}

		return resource;
	}

	private Optional<Class<?>> findProjectionType(final Object content, String defaultProjection)
	{
		final String projectionParameter = request.getParameter(PROJECTION_PARAMETER);
		final Map<String, Class<?>> projectionsForType = repositoryRestConfiguration.getProjectionConfiguration()
				.getProjectionsFor(content.getClass());

		if (!projectionsForType.isEmpty())
		{
			if (!StringUtils.isEmpty(projectionParameter))
			{
				// projection parameter specified
				final Class<?> projectionClass = projectionsForType.get(projectionParameter);
				if (projectionClass != null)
				{
					return Optional.of(projectionClass);
				}
			}
			else if (projectionsForType.containsKey(defaultProjection))
			{
				// default projection exists
				return Optional.of(projectionsForType.get(defaultProjection));
			}
		}
		// no default is specified continue regular processing
		return Optional.empty();
	}
}