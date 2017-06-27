package com.jobowit.service;

import com.jobowit.domain.Party;
import com.jobowit.repositories.PartyRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("PartyService")
@Transactional
public class PartyService
{
	@Autowired
	private PartyRepository partyRepository;

	public Party findById(Integer id)
	{
		return partyRepository.findOne(id);
	}

	public List<Party> findByName(String name)
	{
		return partyRepository.findByNameContaining(name);
	}

	public void saveParty(Party party)
	{
		partyRepository.save(party);
	}

	public void updateParty(Party party)
	{
		saveParty(party);
	}

	public void deletePartyById(Integer id)
	{
		partyRepository.delete(id);
	}

	public void deleteAllParties()
	{
		partyRepository.deleteAll();
	}

	public List<Party> findAllParties()
	{
		return partyRepository.findAll();
	}

	public boolean isPartyExist(Party party)
	{
		return findByName(party.getName()) != null;
	}

}
