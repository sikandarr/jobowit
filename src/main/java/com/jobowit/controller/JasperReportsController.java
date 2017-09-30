package com.jobowit.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.jobowit.reports.JasperService;
import com.jobowit.repositories.JobRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperReport;

@Controller
public class JasperReportsController
{
	@Autowired
	JasperService jasperService;
	
	@Autowired
	JobRepository jobRepo;

	@GetMapping("/api/invoices/{id}/pdf")
	public void handleCreateInvoicePdf(HttpServletResponse response, @PathVariable int id)
			throws IOException, JRException, SQLException
	{
		String filename = "invoice_" + new Date().getTime() + ".pdf";
		response.setContentType("application/pdf");
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + filename +"\""));
		HashMap<String, Object> parameters = new HashMap<>();
		File file = new File("jasper\\jrxml\\logo.jpg");
		InputStream logo = new FileInputStream(file);
		parameters.put("logo", logo);
		parameters.put("invoiceId", id);
		jasperService.exportToPdf("Invoice.jrxml", parameters, response.getOutputStream());
	}
	
	@GetMapping("/api/parties/customerReport/pdf")
	public void handleCreateCustomerReportPdf(HttpServletResponse response)
			throws IOException, JRException, SQLException
	{
		String filename = "customer_report_" + new Date().getTime() + ".pdf";
		response.setContentType("application/pdf");
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + filename +"\""));
		jasperService.exportToPdf("customer_report.jrxml", null, response.getOutputStream());
	}
	
	@GetMapping("/api/jobs/{uuid}/pdf")
	public void handleCreateJobReportPdf(HttpServletResponse response, @PathVariable String uuid)
			throws IOException, JRException, SQLException
	{
		int id = jobRepo.findByUuid(uuid).get().getJobId();
		String filename = "job_report_" + new Date().getTime() + ".pdf";
		JasperReport subReport = jasperService.compile("operation_staff_job.jrxml");
		response.setContentType("application/pdf");
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + filename +"\""));
		HashMap<String, Object> parameters = new HashMap<>();
		parameters.put("jobId", id);
		parameters.put("subreportParameter", subReport);
		File file = new File("jasper\\jrxml\\logo.jpg");
		InputStream logo = new FileInputStream(file);
		parameters.put("logo", logo);
		jasperService.exportToPdf("job_report.jrxml", parameters, response.getOutputStream());
	}
}
