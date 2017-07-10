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

