package com.jobowit.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jobowit.domain.UploadedFile;

@RepositoryRestResource
@RequestMapping(method=RequestMethod.GET)
@CrossOrigin
public interface UploadedFileRepository extends JpaRepository<UploadedFile, Integer>
{
	Optional<UploadedFile> findByUuid(String uuid);
}
