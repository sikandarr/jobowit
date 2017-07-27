package com.jobowit.controller;

import java.io.IOException;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.jobowit.domain.UploadedFile;
import com.jobowit.repositories.UploadedFileRepository;

@RestController
@Transactional
public class FileUploadController
{
	private class ResponseMessage
	{
		protected String message;
		protected String uuid;
		
		@SuppressWarnings("unused")
		public String getMessage()
		{
			return message;
		}

		@SuppressWarnings("unused")
		public String getUuid()
		{
			return uuid;
		}

		ResponseMessage(String message, String uuid)
		{
			this.message = message;
			this.uuid = uuid;
		}
	}
	@Autowired
	UploadedFileRepository urepo;

	@Autowired
	EntityManager em;

	@PostMapping("/api/upload")
	public ResponseEntity<?> handleFileUpload(@RequestParam("file") MultipartFile file) throws IOException
	{
		if (file.isEmpty()) return ResponseEntity.badRequest().body("File is empty: " + file.getOriginalFilename());

		UploadedFile upload = new UploadedFile();
		upload.setName(file.getOriginalFilename());
		upload.setType(file.getContentType());
		upload.setSize(file.getSize());
		upload.setContent(file.getBytes());
		upload = urepo.save(upload);
		em.refresh(upload);
		return ResponseEntity.ok(new ResponseMessage("File was uploaded succesfully", upload.getUuid()));
	}

	@GetMapping("/api/uploadedFiles/{uuid}/download")
	@ResponseBody
	public ResponseEntity<?> handleFileDownload(@PathVariable String uuid)
	{
		Optional<UploadedFile> u = urepo.findByUuid(uuid);
		if (!u.isPresent()) return ResponseEntity.badRequest().body("Couldn't find the file with id: " + uuid);
		
		ByteArrayResource file = new ByteArrayResource(u.get().getContent());
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + u.get().getName() + "\"")
				.body(file);

	}
}