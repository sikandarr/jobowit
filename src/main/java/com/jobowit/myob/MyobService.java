package com.jobowit.myob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.auth.DataFileCredentials;
import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.domain.v2.BaseEntity;
import com.anahata.myob.api.domain.v2.EntityPage;
import com.anahata.myob.api.service.AbstractEntityMyobService;
import com.jobowit.domain.MyobCredentials;
import com.jobowit.domain.MyobToken;
import com.jobowit.exception.MyobAccessException;
import com.jobowit.exception.MyobServiceException;
import com.jobowit.repositories.MyobCredentialsRepository;
import com.jobowit.repositories.MyobTokenRepository;

@Component
public class MyobService
{
	@Autowired
	MyobTokenRepository myobTokenRepo;

	@Autowired
	MyobCredentialsRepository myobCredentialsRepo;

	MyobEndPointProvider meps;

	public MyobEndPointProvider getMyobEndPointProvider()
	{
		MyobToken myobToken = myobTokenRepo.findLatest();
		MyobCredentials myobCredentials = myobCredentialsRepo.findOne("Primary");

		if (myobCredentials == null)
			throw new MyobAccessException("Myob data credentials not found");

		DataFileCredentials dataFileCredentials = new DataFileCredentials();
		dataFileCredentials.setUser(myobCredentials.getUsername());
		dataFileCredentials.setPassword(myobCredentials.getPassword());

		if (myobToken == null)
			throw new MyobAccessException("No token in the database");

		meps = new MyobEndPointProviderServiceImpl(myobTokenRepo, dataFileCredentials);
		return meps;
	}

	public <T extends AbstractEntityMyobService<? extends EntityPage<? extends BaseEntity>, ? extends BaseEntity>> T getService(
			Class<T> myobDomainServiceClass)
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
	
	public CompanyFile[] getCompanyFiles()
	{
		MyobEndPointProviderServiceImpl meps = (MyobEndPointProviderServiceImpl) getMyobEndPointProvider();
		return meps.getCompanyFiles();
	}
}
