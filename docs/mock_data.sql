USE jobowit_db;

-- -----------------------------------------------------
-- Address Data
-- -----------------------------------------------------

insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('8 Willsmore Street','Beverley','South Australia','SA','5009','Australia');
insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('535 Prospect Road', 'Gepps Cross', 'South Australia', 'SA', '5094', 'Australia');
insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('67/133 Anzac Hwy', 'Kurralta Park', 'South Australia', 'SA', '5037', 'Australia');
insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('67/133 Anzac Hwy', 'Kurralta Park', 'South Australia', 'SA', '5037', 'Australia');
insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('50 Dampier Avenue', 'Flinders Park', 'South Australia', 'SA', '5025', 'Australia');
insert into address (`street1`,`city`,`state`,`state_abr`,`post_code`,`country`) values('50 Dampier Avenue', 'Flinders Park', 'South Australia', 'SA', '5025', 'Australia');

-- -----------------------------------------------------
-- Access Roles
-- -----------------------------------------------------

INSERT INTO `access_role` (`role_name`) VALUES ("ADMIN");
INSERT INTO `access_role` (`role_name`) VALUES ("NO ACCESS");

-- -----------------------------------------------------
-- Staff & User Data
-- -----------------------------------------------------

INSERT INTO `staff` (`staff_id`,`staff_uuid`,`name`,`initials`,`address_id`,`email`,`create_dtm`,`bg_color`) VALUES (1,'27146d49-6b1b-11e7-931d-001a7dda7113','Sikandar & Mearaj','SM',1,'info@motion.six','2017-09-24 01:34:13','#a5a4bb');
INSERT INTO `staff` (`staff_id`,`staff_uuid`,`name`,`initials`,`address_id`,`email`,`create_dtm`,`bg_color`) VALUES (2,'892091d1-96da-11e7-920b-001a7dda7113','Peter Charitopoulos','PC',2,'peter@exalted.com.au','2017-09-24 01:34:13','#ae7afa');

INSERT INTO `user` (`staff_id`, `access_role_id`,`username`, `password`, `enabled`) VALUES (1, 1, 'motion6', '$2a$10$pDMaM7/PtG61nVxYOvvf0uCh83IkZZmpBa1M048OPNq4daZ43meMG', 1);
INSERT INTO `user` (`staff_id`, `access_role_id`,`username`, `password`, `enabled`) VALUES (2, 1, 'peter', '$2a$10$M20LwBqBPipiL3V0koXZyuwVzOgzNUaCGzsl6bj0lq6.Pb4cUbYTi', 1);

-- -----------------------------------------------------
-- Party Data
-- -----------------------------------------------------

INSERT INTO `party` (`party_uuid`,`name`,`contact_name`,`email`,`phone`,`mobile`,`mailing_address_id`,`physical_address_id`,`type`) VALUES ('0d5f5918-69dc-11e7-931d-001a7dda7113','Placerat Cras Dictum Limited','Philip Harper','Morbi.metus@augueutlacus.net','0859137797','0410227116',3,4, 'Customer');
INSERT INTO `party` (`party_uuid`,`name`,`contact_name`,`email`,`phone`,`mobile`,`mailing_address_id`,`physical_address_id`,`type`) VALUES ('0d5fde0c-69dc-11e7-931d-001a7dda7113','Ligula Institute','Mari Lancaster','Donec.vitae@aliquet.ca','0489044282','0480419700',5,6, 'Supplier');

-- -----------------------------------------------------
-- Job Types
-- -----------------------------------------------------

INSERT INTO `jobowit_db`.`job_type` (`job_type`) VALUES ("Service");
INSERT INTO `jobowit_db`.`job_type` (`job_type`) VALUES ("Quote");

-- -----------------------------------------------------
-- Job Status
-- -----------------------------------------------------

INSERT INTO `job_status` (`status_desc`, `job_type`, `initial`) VALUES ("Awaiting Scope", 2, 'Y');
INSERT INTO `job_status` (`status_desc`, `job_type`) VALUES ("Awaiting Customer Approval", 2);
INSERT INTO `job_status` (`status_desc`, `job_type`) VALUES ("Customer Rejected", 2);
INSERT INTO `job_status` (`status_desc`, `job_type`) VALUES ("Under Negotiation", 2);
INSERT INTO `job_status` (`status_desc`, `job_type`, `initial`) VALUES ("Awaiting Schedule", 1, 'Y');
INSERT INTO `job_status` (`status_desc`, `job_type`) VALUES ("Scheduled", 1);
INSERT INTO `job_status` (`status_desc`, `job_type`) VALUES ("In Progress", 1);
INSERT INTO `job_status` (`status_desc`, `job_type`, `indicates_active_job`) VALUES ("Customer Accepted", 2, 0);
INSERT INTO `job_status` (`status_desc`, `job_type`, `indicates_active_job`) VALUES ("Canceled", 2, 0);
INSERT INTO `job_status` (`status_desc`, `job_type`, `indicates_active_job`) VALUES ("Completed", 1, 0);
INSERT INTO `job_status` (`status_desc`, `job_type`, `indicates_active_job`) VALUES ("Canceled", 1, 0);

-- -----------------------------------------------------
-- Office Roles
-- -----------------------------------------------------

INSERT INTO `staff_job_role` (`role_id`, `role_name`) VALUES (1, "Operations");
INSERT INTO `staff_job_role` (`role_id`, `role_name`) VALUES (2, "Field Work");
INSERT INTO `staff_job_role` (`role_id`, `role_name`) VALUES (3, "Business Development");

-- -----------------------------------------------------
-- User Access
-- -----------------------------------------------------

INSERT INTO `db_table` (`table_name`) VALUES ("Party");
INSERT INTO `db_table` (`table_name`) VALUES ("Job");
INSERT INTO `db_table` (`table_name`) VALUES ("Staff");
INSERT INTO `db_table` (`table_name`) VALUES ("JobWorks");
INSERT INTO `access_control` (`access_role_id`, `table_name`, `can_read`, `can_delete`, `can_write`) VALUES (1, "Party",1,1,1);
INSERT INTO `access_control` (`access_role_id`, `table_name`, `can_read`, `can_delete`, `can_write`) VALUES (1, "Staff",1,1,1);

-- -----------------------------------------------------
-- Misc
-- -----------------------------------------------------

INSERT INTO `job_email_text` (`id`,`subject`,`body`) VALUES ('Primary','Job# %job_number%','<p>Hi, %customer_name%</p>\n<p>We&rsquo;d like to let you know that your request for service has been registered in our system; below are the details:&nbsp;</p>\n<ul>\n<li>Reference# %job_number%</li>\n<li>Description: %job_description%</li>\n<li>Contact Person: %job_contact%</li>\n<li>Contact Phones: %job_phones%</li>\n<li>Email: %job_email%</li>\n<li>Site Address: %job_address%</li>\n</ul>\n<p>We will keep you updated with the schedule details.</p>\n<p>Thank you for choosing %company_name% for your property service needs.</p>\n<p><strong>%company_name%</strong><br />%company_address1%<br />Phone: %company_phone1%<br />Email: %company_email%</p>\n<p>&nbsp;</p>');
INSERT INTO `company` (`id`,`name`,`address_line1`,`address_line2`,`phone1`,`phone2`,`email`,`logo`) VALUES ('Primary','Exalted Property Services','535 Prospect Rd, GEPPS CROSS SA 5094',NULL,'08 7230 5518',NULL,'accounts@exalted.com.au',NULL);
INSERT INTO `email_setting` (`id`,`email_address`,`password`,`smtp_host`,`smtp_port`,`smtp_starttls_enable`) VALUES (1,'sikandar@bhagad.com','23865278','smtp.zoho.com',587,1);
INSERT INTO `myob_credentials` (`username`,`password`) VALUES ('Administrator','');


-- ---------------------------
-- Myob Data
-- ---------------------------
-- UPDATE `jobowit_db`.`bill` SET `myob_freight_tax_code`='b0613ff1-eabe-4aed-9d35-ec7f66e1aac1' WHERE `bill_id`>'0';
-- UPDATE `jobowit_db`.`bill_line_item` SET `myob_item`='1561f728-d1cb-4617-9cbd-25438dd8f1c3', `myob_tax_code`='b0613ff1-eabe-4aed-9d35-ec7f66e1aac1' WHERE `line_item_id` > 0;
-- UPDATE invoice_line_item set myob_account = 'ce84af88-225a-4e85-9674-8c269d78d6ca', myob_tax_code = '3bd2fbea-54d7-4115-8030-b84360048465' where invoice_id > 0;


