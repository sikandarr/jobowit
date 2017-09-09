package com.jobowit.myob;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.anahata.myob.api.domain.v2.contact.SupplierLink;
import com.anahata.myob.api.domain.v2.generalledger.TaxCode;
import com.anahata.myob.api.domain.v2.generalledger.TaxCodeLink;
import com.anahata.myob.api.domain.v2.inventory.Item;
import com.anahata.myob.api.domain.v2.inventory.ItemLink;
import com.anahata.myob.api.domain.v2.purchase.ItemBill;
import com.anahata.myob.api.domain.v2.purchase.ItemBillLine;
import com.anahata.myob.api.service.generalledger.TaxCodeService;
import com.jobowit.domain.Bill;
import com.jobowit.domain.BillLineItem;
import com.jobowit.domain.Party;
import com.jobowit.myob.domainservice.ItemBillService;
import com.jobowit.myob.domainservice.ItemService;
import com.jobowit.repositories.BillRepository;

@Component
public class MyobBillService
{
	@Autowired
	private BillRepository billRepo;
	
	@Autowired
	private MyobService m;

	public String export(int billId)
	{
		Bill b = billRepo.findOne(billId);
		if (b.getMyobUid() == null || b.getMyobUid().equals(""))
		{
			ItemBill ib = m.getService(ItemBillService.class).create(create(b));
			b.setMyobUid(ib.getUID());
			billRepo.save(b);
			return "Success! Bill exported";
		}
		return "Bill already exported";
	}

	public ItemBill create(Bill b)
	{
		ItemBill ib = new ItemBill();
		ib.setDate(b.getBillDt());
		ib.setPromisedDate(b.getDueDt());
		SupplierLink supplier = new SupplierLink();
		Party p = b.getSupplier();
		supplier.setUID(p.getMyobUid());
		ib.setSupplier(supplier);
		ib.setLines(createLines(b.getBillLineItems()));
		
		String taxCodeUid = b.getMyobFreightTaxCode();
		TaxCode taxCode = m.getService(TaxCodeService.class).find(taxCodeUid);
		TaxCodeLink taxCodeLink = new TaxCodeLink();
		taxCodeLink.setUID(taxCode.getUID());
		ib.setFreightTaxCode(taxCodeLink);
		
		return ib;
	}

	public ArrayList<ItemBillLine> createLines(List<BillLineItem> blis)
	{
		ArrayList<ItemBillLine> lines = new ArrayList<ItemBillLine>();
		for (BillLineItem bli : blis)
		{
			ItemBillLine line = new ItemBillLine();
			DecimalFormat df = new DecimalFormat("#.##");
			df.setRoundingMode(RoundingMode.CEILING);
			BigDecimal total = new BigDecimal(df.format(bli.getQuantity() * bli.getUnitPrice().doubleValue()));
			line.setBillQuantity(new BigDecimal(bli.getQuantity()));
			line.setTotal(total);
			line.setDescription(bli.getDescription());
			
			String taxCodeUid = bli.getMyobTaxCode();
			TaxCode taxCode = m.getService(TaxCodeService.class).find(taxCodeUid);
			TaxCodeLink taxCodeLink = new TaxCodeLink();
			taxCodeLink.setUID(taxCode.getUID());
			line.setTaxCode(taxCodeLink);
			
			String myobItemUid = bli.getMyobItem();
			Item item = m.getService(ItemService.class).find(myobItemUid);
			ItemLink itemLink = new ItemLink();
			itemLink.setUID(item.getUID());
			line.setItem(itemLink);
			
			lines.add(line);
			
		}
		return lines;
	}
}