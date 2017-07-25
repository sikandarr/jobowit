package com.jobowit.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jobowit.domain.UploadedFile;

public interface UploadedFileRepository extends JpaRepository<UploadedFile, Integer>
{

}
