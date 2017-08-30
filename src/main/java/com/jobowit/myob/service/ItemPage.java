package com.jobowit.myob.service;

import java.util.List;

import com.anahata.myob.api.domain.v2.EntityPage;
import com.anahata.myob.api.domain.v2.inventory.Item;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public class ItemPage extends EntityPage<Item>
{
	public List<Item> Items;
}
