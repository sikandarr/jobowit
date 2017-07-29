package com.jobowit.myob;

import java.util.List;

import com.anahata.myob.api.MyobEndPoint;
import com.anahata.myob.api.MyobEndPointProvider;
import com.anahata.myob.api.auth.DataFileCredentials;
import com.anahata.myob.api.auth.MyobPlugin;
import com.anahata.myob.api.auth.OAuthAccessToken;
import com.anahata.myob.api.auth.OauthAuthenticator;
import com.anahata.myob.api.domain.v2.contact.Supplier;
import com.anahata.myob.api.service.SupplierService;

public class MyobTest
{
	public static void main(String[] args) throws Exception
	{
		SupplierService cfs = new SupplierService();
		String code = "8-5Q!IAAAAGZglN7QP4xBnJYHwV2JHZI5E5Ql89bwBSn8vxPxph3IAQEAAAGumvOmxOMVlnxtevI7R202H9WFGMxHhtYuuI4fmZwCsi55x-ZQWw2uIWiUduVbCPrUTP6MmuuUxQmDGOUPYMa1AHWlBKdZ4-aKFmzuyjh6N-I0bO1y0lWbGRLx_VoGHNvC9LdJdPlxSQc_DvoYdA7-SGy2Hr7oj1amZogCsp4oPgFbP_8GN3S9_mnCm745e2bue8vSfjXFxdxWNrqnAqWUEfbSNS-lr2YbAtjPCTA21lsK0-Y76dTiw5ljFKSK9BZqwBFr_ghtP4JIzJ7Vvwdpk1jNtYKPt-V4QlYxTj-iHhVDxLm5wYSwIRoB0dfPFOS6sXg6VNu1O0Elna_olugw";
		
		cfs.setEndPointProvider(new MyobEndPointProvider() 
		{
            @Override
            public MyobEndPoint getEndPoint() 
            {
            	MyobPlugin mp = new MyobPlugin("vzbha48uyde74m4xtd9xuduz", "kckU3f6SJbKhe6MNrBTzYKSm", "http://jobowit.com:4200/parties");
        		OAuthAccessToken token = null;
				try
				{
					token = OauthAuthenticator.getAccessToken(mp, code);
				}
				catch (Exception e)
				{
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
                return new MyobEndPoint(MyobEndPoint.CLOUD_ENDPOINT + "b2c48941-7bfb-4f7c-9356-309127f15221", new DataFileCredentials(), token);
            }

			@Override
			public void oauthTokenRefreshed(MyobEndPoint arg0)
			{
				// TODO Auto-generated method stub
				
			}
		});
		List <Supplier> suppliers = cfs.findAll();
		for (Supplier supplier : suppliers)
			System.out.println(supplier.getCompanyName());
	}
}
