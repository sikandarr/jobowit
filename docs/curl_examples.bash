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
	"contactName": "Stephen Local",
	"email": "stephen@local.host",
	"mobile": "0450198231",
	"phone": "0827578170",
	"mailingAddress": "24 Bradford Avenue:Bradford:New South Wales:4008:Australia",
	"physicalAddress": "8 Grimsone Road:Flinder Park:New South Wales:4016:Australia"
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
	"staffUser": "/staffs/motion6",
	"party": "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
}' "localhost:8080/api/comments" -H "Content-Type:application/json"

## POST new comment for a Job
curl -X POST -d \
'{
	"comment": "Famous first line but doesn\u0027t matter; will always be first",
	"staffUser": "/staffs/motion6",
	"job": "/jobs/a9ba4364-6577-44dc-9266-1fa5484944cf"
}' "localhost:8080/api/comments" -H "Content-Type:application/json"

## POST new Job
curl -X POST -d \
'{
	"description" : "Paint and additonal repair works", 
	"referral" : "Phone", 
	"priority" : "Normal", 
	"address" : "245 Grange Road:Hillford:South Australia:5011:Australia", 
	"initialType" : "/jobTypes/Quote%20Request", 
	"customer" : "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
}' "localhost:8080/api/jobs" -H "Content-Type:application/json"

## Edit Job
curl -X PUT -d \
'{
	"description" : "Delighted to be editing this job", 
	"referral" : "Phone", 
	"priority" : "Important", 
	"address" : "501 Skyward Court:Skyward:South Australia:5085:Australia", 
	"customer" : "/parties/0d5f5918-69dc-11e7-931d-001a7dda7113"
}' "localhost:8080/api/jobs/68476898-2b63-41ce-871b-b429becfa61c" -H "Content-Type:application/json"

## POST new Job Status Entry
curl -X POST -d \
'{
	"job" : "/jobs/68476898-2b63-41ce-871b-b429becfa61c",
	"status" : "/jobStatuses/4",
	"staff" : "/staffs/motion6",
	"comment" : "customer has agreed to change the status"
}' "localhost:8080/api/jobStatusEntries" -H "Content-Type:application/json"

## Upload a file
## replace filename with a file on your system with the location relative to current working directory
curl -F file=@"mock_data.sql" http://localhost:8080/api/upload/

## link the uploaded file with a comment (using PATCH)
curl -X PATCH -d '{ "comment" : "/comments/1" }' "localhost:8080/api/uploadedFiles/2983c7c6-7280-11e7-8e19-001a7dda7113" -H "Content-Type:application/json"



