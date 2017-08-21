package com.jobowit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import com.jobowit.domain.ResourceId;

@RestResource(exported=false)
public interface ResourceIdRepository extends JpaRepository<ResourceId, String>
{

}
