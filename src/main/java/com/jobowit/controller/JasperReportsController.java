package com.jobowit.controller;

import java.io.IOException;
import java.sql.SQLException;
import java.util.Date;
import java.util.HashMap;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.jobowit.reports.JasperService;

import net.sf.jasperreports.engine.JRException;

@Controller
public class JasperReportsController
{
	@Autowired
	JasperService jasperService;

	@GetMapping("/api/invoices/{id}/pdf")
	public void handleCreateInvoicePdf(HttpServletResponse response, @PathVariable int id)
			throws IOException, JRException, SQLException
	{
		String filename = "invoice_" + new Date().getTime() + ".pdf";
		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + filename +"\""));
		HashMap<String, Object> parameters = new HashMap<>();
		parameters.put("invoiceId", id);
		jasperService.exportToPdf("Invoice.jrxml", parameters, response.getOutputStream());
	}
	
	@GetMapping("/api/parties/customerReport/pdf")
	public void handleCreateCustomerReportPdf(HttpServletResponse response)
			throws IOException, JRException, SQLException
	{
		String filename = "customer_report_" + new Date().getTime() + ".pdf";
		response.setContentType("application/octet-stream");
		response.setHeader("Content-Disposition", String.format("inline; filename=\"" + filename +"\""));
		jasperService.exportToPdf("customer_report.jrxml", null, response.getOutputStream());
	}
}
