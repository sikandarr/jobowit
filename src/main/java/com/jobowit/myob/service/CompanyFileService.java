package com.jobowit.myob.service;

import com.anahata.myob.api.MyobEndPoint;
import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.auth.DataFileCredentials;
import com.anahata.myob.api.auth.OAuthAccessToken;
import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.service.AbstractMyobService;

public class CompanyFileService extends AbstractMyobService
{
	public CompanyFileService()
	{
		super(null);
	}

	public CompanyFile[] findAll() throws Exception
	{
		String ret = sendReceive(null, null, null, null);
		return fromJson(ret, new CompanyFile[0].getClass());
	}

	public static CompanyFile[] findAll(OAuthAccessToken token) throws Exception
	{
		CompanyFileService cfs = new CompanyFileService();
		cfs.setEndPointProvider(new MyobEndPointProvider()
		{
			@Override
			public MyobEndPoint getEndPoint()
			{
				return new MyobEndPoint(MyobEndPoint.CLOUD_ENDPOINT, new DataFileCredentials(), token);
			}

			@Override
			public void oauthTokenRefreshed(MyobEndPoint locator)
			{

			}
		});
		return cfs.findAll();
	}
}
