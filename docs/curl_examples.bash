#!/usr/bin/env sh

## POST new data with the child object inline/nested
curl -v -X POST -d \
'{
	"name": "AJX Innovate Tech",
	"contact_name": "Stephen Local",
	"email": "stephen@local.host",
	"mobile": "0450198231",
	"phone": "0827578170",
	"mailing_address": {
		"street1": "42 Westwile Road",
		"city": "Kalamata",
		"state": "Victoria",
		"post_code": "3055",
		"country": "Australia"
	},
	"physical_address": {
		"street1": "67/133 Anzac Hwy",
		"city": "Kurralta Park",
		"state": "South Australia",
		"post_code": "5037",
		"country": "Australia"
	}
}' "localhost:8080/api/parties/101" --header "Content-Type:application/json"


## POST new data with the child object assigned in a single property (single-String argument constructor)
curl -v -X POST -d \
'{
	"name": "Hypermedia Transactions",
	"contact_name": "Stephen Local",
	"email": "stephen@local.host",
	"mobile": "0450198231",
	"phone": "0827578170",
	"mailing_address": "24 Bradford Avenue:Bradford:New South Wales:4008:Australia",
	"physical_address": "8 Grimsone Road:Flinder Park:New South Wales:4016:Australia"
}' "localhost:8080/api/parties/" --header "Content-Type:application/json"

curl -X PUT -d \
'{
	"name": "Key 9 Enterprises",
	"contact_name": "Stephen Local",
	"email": "stephen@local.host",
	"mobile": "0450198231",
	"phone": "0827578170",
	"mailing_address": {
		"street1": "42 Westwile Road",
		"city": "Kalamata",
		"state": "Victoria",
		"post_code": "3055",
		"country": "Australia"
	},
	"physical_address": {
		"street1": "67/133 Anzac Hwy",
		"city": "Kurralta Park",
		"state": "South Australia",
		"post_code": "5037",
		"country": "Australia"
	}
}' "localhost:8080/api/parties/101" -H "Content-Type:application/json"

## POST new comment for a Party
curl -X POST -d \
'{
	"comment": "Famous first line but doesn\u0027t matter; will always be first",
	"staffUser": "/staffs/1",
	"party": "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
}' "localhost:8080/api/comments" -H "Content-Type:application/json"

## POST new comment for a Job
curl -X POST -d \
'{
	"comment": "Famous first line but doesn\u0027t matter; will always be first",
	"staffUser": "/staffs/1",
	"job": "/jobs/1"
}' "localhost:8080/api/comments" -H "Content-Type:application/json"


curl -X POST -d \
'{
	"description" : "Paint and additonal repair works", 
	"referral" : "Phone", 
	"priority" : "Normal", 
	"address" : "245 Grange Road:Hillford:South Australia:5011:Australia", 
	"initialType" : "/jobTypes/Quote%20Request", 
	"customer" : "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
}' "localhost:8080/api/jobs" -H "Content-Type:application/json"

