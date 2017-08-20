package com.jobowit.myob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.service.AbstractEntityMyobService;
import com.jobowit.domain.MyobToken;
import com.jobowit.exception.MyobAccessException;
import com.jobowit.exception.MyobServiceException;
import com.jobowit.repositories.MyobTokenRepository;

@Component
public class MyobService
{
	@Autowired
	MyobTokenRepository myobTokenRepo;

	MyobEndPointProvider meps;

	public MyobEndPointProvider getMyobEndPointProvider()
	{
		MyobToken myobToken = myobTokenRepo.findLatest();

		if (myobToken == null)
			throw new MyobAccessException("No token in the database");

		meps = new MyobEndPointProviderServiceImpl(myobTokenRepo);
		return meps;
	}

	public <T extends AbstractEntityMyobService<?, ?>> T getService(Class<T> myobDomainServiceClass)
	{
		T myobDomainService = null;
		try
		{
			myobDomainService = myobDomainServiceClass.newInstance();
			myobDomainService.setEndPointProvider(getMyobEndPointProvider());
		}
		catch (InstantiationException | IllegalAccessException e)
		{
			throw new MyobServiceException(
					"System error in MyobService::getService: couldn't return myob domain service");
		}
		return myobDomainService;
	}
}
