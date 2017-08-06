package com.jobowit.myob;

import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.anahata.myob.api.MyobEndPoint;
import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.auth.DataFileCredentials;
import com.anahata.myob.api.auth.MyobPlugin;
import com.anahata.myob.api.auth.OAuthAccessToken;
import com.jobowit.domain.MyobToken;
import com.jobowit.repositories.MyobTokenRepository;

@Component
class MyobEndPointProviderServiceImpl implements MyobEndPointProvider
{
	private final MyobPlugin plugin = new MyobPlugin("vzbha48uyde74m4xtd9xuduz", "kckU3f6SJbKhe6MNrBTzYKSm",
			"http://localhost:8081/myob");

	private String uid = "";

	@Autowired
	MyobTokenRepository myobTokenRepo;

	public MyobEndPointProviderServiceImpl(){}

	public MyobEndPointProviderServiceImpl(String uid)
	{
		this.uid = uid;
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

	public void setUid(String uid)
	{
		this.uid = uid;
	}

}