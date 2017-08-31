package com.jobowit.tests;

import static org.junit.Assert.assertEquals;

import java.util.Set;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.junit.BeforeClass;
import org.junit.Test;
import com.jobowit.domain.Party;

public class PartyValidationTest
{
	private static Validator validator;

	@BeforeClass
	public static void setUp()
	{
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		validator = factory.getValidator();
	}

	@Test
	public void testPartyEmail()
	{
		Party party = new Party();
		party.setName("AJX Company");
		
		/*invalid email*/
		party.setEmail("sikandar");
		Set<ConstraintViolation<Party>> constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Invalid email address", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;

		/*invalid email*/
		party.setEmail("sikandar@");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Invalid email address", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*invalid email*/
		party.setEmail("sikandar@mail");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Invalid email address", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*invalid email*/
		party.setEmail("sikandar/mail");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Invalid email address", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*valid email address*/
		party.setEmail("sikandar.b@mail.com");
		constraintViolations = validator.validate(party);
		assertEquals(0, constraintViolations.size());
	}
	
	@Test
	public void testPartyPhone()
	{
		Party party = new Party();
		party.setName("AJX Company");
		
		/*invalid phone (landline) number*/
		party.setPhone("123456789");
		Set<ConstraintViolation<Party>> constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Not a valid Australian phone number", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*invalid phone (landline) number*/
		party.setPhone("0172305518");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Not a valid Australian phone number", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*invalid phone (landline) number*/
		party.setPhone("0424528145");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Not a valid Australian phone number", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*valid phone number*/
		party.setPhone("0872305518");
		constraintViolations = validator.validate(party);
		assertEquals(0, constraintViolations.size());
		constraintViolations = null;
		
		/*invalid mobile number*/
		party.setMobile("0872305518");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Not a valid Australian mobile number", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		party.setMobile("042450414");
		constraintViolations = validator.validate(party);
		assertEquals(1, constraintViolations.size());
		assertEquals("Not a valid Australian mobile number", constraintViolations.iterator().next().getMessage());
		constraintViolations = null;
		
		/*valid mobile number*/
		party.setMobile("0424504142");
		constraintViolations = validator.validate(party);
		assertEquals(0, constraintViolations.size());
		constraintViolations = null;
		
	}
}
