package com.jobowit.myob.domainservice;

import com.anahata.myob.api.domain.v2.inventory.Item;
import com.anahata.myob.api.service.AbstractEntityMyobService;

public class ItemService extends AbstractEntityMyobService<ItemPage, Item>
{
	public ItemService()
	{
		super("Inventory/Item", ItemPage.class, Item.class);
	}

}
