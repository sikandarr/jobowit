package com.jobowit;

import org.springframework.hateoas.Resource;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ProjectingResource<T> extends Resource<T>
{
	ProjectingResource(final T content)
	{
		super(content);
	}
}
