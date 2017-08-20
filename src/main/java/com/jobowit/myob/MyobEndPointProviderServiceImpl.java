package com.jobowit.myob;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import com.anahata.myob.api.MyobEndPoint;
import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.auth.DataFileCredentials;
import com.anahata.myob.api.auth.MyobPlugin;
import com.anahata.myob.api.auth.OAuthAccessToken;
import com.anahata.myob.api.domain.CompanyFile;
import com.jobowit.domain.MyobToken;
import com.jobowit.exception.MyobAccessException;
import com.jobowit.myob.service.CompanyFileService;
import com.jobowit.repositories.MyobTokenRepository;

public class MyobEndPointProviderServiceImpl implements MyobEndPointProvider
{
	private final MyobPlugin plugin = new MyobPlugin("vzbha48uyde74m4xtd9xuduz", "kckU3f6SJbKhe6MNrBTzYKSm",
			"http://localhost:8082/myob");

	private String uid = "";

	MyobTokenRepository myobTokenRepo;

	@Autowired
	public MyobEndPointProviderServiceImpl(MyobTokenRepository myobTokenRepo)
	{
		System.out.println(":::Myob_EndPoint_Provider_Service_Impl:::");

		this.myobTokenRepo = myobTokenRepo;
		MyobToken myobToken = myobTokenRepo.findLatest();

		if (myobToken != null)
		{
			OAuthAccessToken t = new OAuthAccessToken(plugin, myobToken.getAccessToken(), myobToken.getRefreshToken(),
					myobToken.getCreatedOn(), myobToken.getExpiresIn());
			try
			{
				CompanyFile[] companyFile = CompanyFileService.findAll(t);
				this.uid = companyFile[0].getId();	
			}
			catch (Exception e)
			{
				throw new MyobAccessException("Couldn't retrieve company files");
			}
		}
	}

	@Override
	public MyobEndPoint getEndPoint()
	{
		MyobToken myobToken = myobTokenRepo.findLatest();
		OAuthAccessToken t = new OAuthAccessToken(plugin, myobToken.getAccessToken(), myobToken.getRefreshToken(),
				myobToken.getCreatedOn(), myobToken.getExpiresIn());
		return new MyobEndPoint(MyobEndPoint.CLOUD_ENDPOINT + uid, new DataFileCredentials(), t);
	}

	@Override
	public void oauthTokenRefreshed(MyobEndPoint locator)
	{
		OAuthAccessToken t = locator.getOauthAccessToken();
		MyobToken myobToken = new MyobToken(t.getAccessToken(), t.getTokenType(), t.getExpiresIn(), t.getRefreshToken(),
				t.getScope(), new Timestamp(t.getCreatedOn().getTime()));
		myobTokenRepo.save(myobToken);
	}
}