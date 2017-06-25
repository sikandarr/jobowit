package com.jobowit.controller;

import com.jobowit.domain.Party;
import com.jobowit.service.PartyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.beans.Customizer;
import java.util.List;

@Controller
public class HomeController {

  /* This reflects the  static routing config of frontend*/
  @RequestMapping(value={"/", "/customers"})
  public String index() {
    return "index";
  }

  @Autowired
  PartyService partyService;

  @RequestMapping("/getParty")
  @ResponseBody
  public List<Party> getParty() {
    System.out.println("Get Party Called");
    System.out.println("Returning all parties " + partyService.findAllParties());
    return partyService.findAllParties();
  }

  @RequestMapping("/setParty")
  @ResponseBody
  public String setParty(@RequestBody Party party) {
    partyService.saveParty(party);
    System.out.println(party + " setPartyCalled");
    return new String("hello");
  }
}
