package com.jobowit.myob.service;

import java.util.List;

import com.anahata.myob.api.domain.v2.EntityPage;
import com.anahata.myob.api.domain.v2.purchase.ItemBill;

import lombok.Data;

@Data
public class ItemBillPage extends EntityPage<ItemBill>
{
	public List<ItemBill> Items;
}
