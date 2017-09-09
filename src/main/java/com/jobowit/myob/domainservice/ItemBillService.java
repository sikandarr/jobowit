package com.jobowit.myob.domainservice;

import com.anahata.myob.api.domain.v2.purchase.ItemBill;
import com.anahata.myob.api.service.AbstractEntityMyobService;

public class ItemBillService extends AbstractEntityMyobService<ItemBillPage, ItemBill>
{
	public ItemBillService()
	{
		super("Purchase/Bill/Item", ItemBillPage.class, ItemBill.class);
	}

}
