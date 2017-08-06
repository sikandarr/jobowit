package com.jobowit.myob;

import com.anahata.myob.api.auth.MyobPlugin;
import com.anahata.myob.api.auth.OAuthAccessToken;
import com.anahata.myob.api.domain.CompanyFile;
import com.anahata.myob.api.service.CompanyFileService;
import com.jobowit.domain.MyobToken;
import com.jobowit.repositories.MyobTokenRepository;

public class MyobTest
{
	private MyobPlugin plugin = new MyobPlugin("vzbha48uyde74m4xtd9xuduz", "kckU3f6SJbKhe6MNrBTzYKSm", "http://localhost:8081/myob");
	
	public MyobTest(){}
	public CompanyFile[] run(MyobTokenRepository myobTokenRepo) throws Exception
	{
		MyobToken myobToken = myobTokenRepo.findLatest();
		OAuthAccessToken t = new OAuthAccessToken (plugin, myobToken.getAccessToken(), myobToken.getRefreshToken(), myobToken.getCreatedOn(), myobToken.getExpiresIn());
		return CompanyFileService.findAll(t);
	}
}
