-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema jobowit_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema jobowit_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `jobowit_db` DEFAULT CHARACTER SET utf8 ;
USE `jobowit_db` ;

-- -----------------------------------------------------
-- Table `jobowit_db`.`address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`address` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `street1` VARCHAR(150) NULL,
  `city` VARCHAR(50) NULL,
  `state` VARCHAR(45) NULL,
  `state_abr` VARCHAR(4) NULL,
  `post_code` VARCHAR(12) NULL,
  `country` VARCHAR(45) NULL,
  `created_dtm` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_dtm` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`address_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`party`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`party` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`party` (
  `party_id` BIGINT NOT NULL AUTO_INCREMENT,
  `party_uuid` CHAR(36) NOT NULL DEFAULT 'EMPTY',
  `myob_uid` VARCHAR(36) NULL,
  `name` VARCHAR(100) NOT NULL,
  `contact_name` VARCHAR(100) NULL,
  `email` VARCHAR(50) NULL,
  `phone` VARCHAR(45) NULL,
  `mobile` VARCHAR(45) NULL,
  `mailing_address_id` INT NULL,
  `physical_address_id` INT NULL,
  `is_individual` TINYINT(1) NOT NULL DEFAULT 0,
  `type` ENUM('Customer', 'Supplier') NOT NULL DEFAULT 'Customer',
  `created_dtm` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_dtm` TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`party_id`),
  INDEX `fk_Party_address_idx` (`mailing_address_id` ASC),
  INDEX `fk_Party_address1_idx` (`physical_address_id` ASC),
  UNIQUE INDEX `party_uuid_UNIQUE` (`party_uuid` ASC),
  UNIQUE INDEX `myob_uid_UNIQUE` (`myob_uid` ASC),
  CONSTRAINT `fk_Party_address`
    FOREIGN KEY (`mailing_address_id`)
    REFERENCES `jobowit_db`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Party_address1`
    FOREIGN KEY (`physical_address_id`)
    REFERENCES `jobowit_db`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`access_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`access_role` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`access_role` (
  `role_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`role_name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`staff`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`staff` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`staff` (
  `staff_id` INT NOT NULL AUTO_INCREMENT,
  `staff_uuid` VARCHAR(36) NOT NULL DEFAULT 'EMPTY',
  `name` VARCHAR(100) NULL,
  `initials` VARCHAR(3) NULL,
  `address_id` INT NOT NULL,
  `access_role` VARCHAR(100) NULL DEFAULT 'NO ACCESS',
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(32) NOT NULL,
  `create_dtm` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `account_enabled` TINYINT(1) NOT NULL DEFAULT 1,
  `account_expired` TINYINT(1) NOT NULL DEFAULT 1,
  `account_locked` TINYINT(1) NOT NULL DEFAULT 1,
  `password_expired` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`staff_id`),
  INDEX `fk_staff_address1_idx` (`address_id` ASC),
  INDEX `fk_staff_access_role1_idx` (`access_role` ASC),
  UNIQUE INDEX `staff_uuid_UNIQUE` (`staff_uuid` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  CONSTRAINT `fk_staff_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `jobowit_db`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_staff_access_role1`
    FOREIGN KEY (`access_role`)
    REFERENCES `jobowit_db`.`access_role` (`role_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `jobowit_db`.`job_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`job_type` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`job_type` (
  `job_type` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`job_type`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`job` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`job` (
  `job_id` INT NOT NULL AUTO_INCREMENT,
  `job_uuid` CHAR(36) NOT NULL DEFAULT 'EMPTY',
  `job_number` VARCHAR(6) NOT NULL,
  `customer_id` BIGINT NOT NULL,
  `description` LONGTEXT NULL,
  `initial_type` VARCHAR(100) NOT NULL,
  `current_type` VARCHAR(100) NOT NULL,
  `referral` VARCHAR(100) NULL,
  `address_id` INT NULL,
  `priority` VARCHAR(45) NOT NULL DEFAULT 'Normal',
  `contact_name` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `mobile` VARCHAR(45) NULL,
  `email` VARCHAR(100) NULL,
  `created_dtm` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`job_id`),
  INDEX `fk_job_party1_idx` (`customer_id` ASC),
  INDEX `fk_job_job_type1_idx` (`initial_type` ASC),
  INDEX `fk_job_job_type2_idx` (`current_type` ASC),
  INDEX `fk_job_address1_idx` (`address_id` ASC),
  UNIQUE INDEX `job_uuid_UNIQUE` (`job_uuid` ASC),
  UNIQUE INDEX `job_number_UNIQUE` (`job_number` ASC),
  CONSTRAINT `fk_job_party1`
    FOREIGN KEY (`customer_id`)
    REFERENCES `jobowit_db`.`party` (`party_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_job_type1`
    FOREIGN KEY (`initial_type`)
    REFERENCES `jobowit_db`.`job_type` (`job_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_job_type2`
    FOREIGN KEY (`current_type`)
    REFERENCES `jobowit_db`.`job_type` (`job_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `jobowit_db`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`comment` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`comment` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `details` LONGTEXT NULL,
  `party_id` BIGINT NULL,
  `job_id` INT NULL,
  `comment_dtm` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_id` INT NOT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `fk_comment_Party1_idx` (`party_id` ASC),
  INDEX `fk_comment_staff1_idx` (`staff_id` ASC),
  INDEX `fk_comment_job1_idx` (`job_id` ASC),
  CONSTRAINT `fk_comment_Party1`
    FOREIGN KEY (`party_id`)
    REFERENCES `jobowit_db`.`party` (`party_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comment_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`staff_job_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`staff_job_role` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`staff_job_role` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`role_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`staff_role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`staff_role` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`staff_role` (
  `staff_role_id` INT NOT NULL AUTO_INCREMENT,
  `staff_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`staff_role_id`),
  INDEX `fk_staff_has_job_role_job_role1_idx` (`role_id` ASC),
  INDEX `fk_staff_has_job_role_staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_staff_has_job_role_staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_staff_has_job_role_job_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `jobowit_db`.`staff_job_role` (`role_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `jobowit_db`.`quotation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`quotation` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`quotation` (
  `quotation_id` INT NOT NULL AUTO_INCREMENT,
  `quotation_number` VARCHAR(6) NULL,
  `job_id` INT NOT NULL,
  `billable` TINYINT(1) NOT NULL DEFAULT 0,
  `quotation_dt` DATE NULL,
  PRIMARY KEY (`quotation_id`),
  INDEX `fk_quotation_job1_idx` (`job_id` ASC),
  UNIQUE INDEX `quotation_number_UNIQUE` (`quotation_number` ASC),
  CONSTRAINT `fk_quotation_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`quotation_line_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`quotation_line_item` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`quotation_line_item` (
  `line_item_id` INT NOT NULL AUTO_INCREMENT,
  `details` MEDIUMTEXT NULL,
  `unit_price` DECIMAL(15,2) NULL,
  `quotation_id` INT NOT NULL,
  PRIMARY KEY (`line_item_id`),
  INDEX `fk_line_item_quotation1_idx` (`quotation_id` ASC),
  CONSTRAINT `fk_line_item_quotation1`
    FOREIGN KEY (`quotation_id`)
    REFERENCES `jobowit_db`.`quotation` (`quotation_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`job_status`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`job_status` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`job_status` (
  `job_status_id` INT NOT NULL AUTO_INCREMENT,
  `status_desc` VARCHAR(100) NOT NULL,
  `job_type` VARCHAR(100) NOT NULL,
  `indicates_active_job` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`job_status_id`),
  INDEX `fk_job_status_job_type1_idx` (`job_type` ASC),
  UNIQUE INDEX `UNIQUE_STATUS_PER_JOB_TYPE` (`job_type` ASC, `status_desc` ASC),
  CONSTRAINT `fk_job_status_job_type1`
    FOREIGN KEY (`job_type`)
    REFERENCES `jobowit_db`.`job_type` (`job_type`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`bill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`bill` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`bill` (
  `bill_id` INT NOT NULL AUTO_INCREMENT,
  `supplier_ref` VARCHAR(45) NULL,
  `bill_number` VARCHAR(6) NULL,
  `bill_dt` DATE NULL,
  `due_dt` DATE NULL,
  `tax_inclusive` TINYINT(1) NULL,
  `job_id` INT NOT NULL,
  `supplier_id` BIGINT NOT NULL,
  `myob_freight_tax_code` VARCHAR(36) NULL,
  `myob_uid` VARCHAR(36) NULL,
  PRIMARY KEY (`bill_id`),
  INDEX `fk_bill_job1_idx` (`job_id` ASC),
  INDEX `fk_bill_party1_idx` (`supplier_id` ASC),
  UNIQUE INDEX `bill_number_UNIQUE` (`bill_number` ASC),
  UNIQUE INDEX `myob_uid_UNIQUE` (`myob_uid` ASC),
  CONSTRAINT `fk_bill_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bill_party1`
    FOREIGN KEY (`supplier_id`)
    REFERENCES `jobowit_db`.`party` (`party_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`bill_line_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`bill_line_item` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`bill_line_item` (
  `line_item_id` INT NOT NULL AUTO_INCREMENT,
  `bill_id` INT NOT NULL,
  `description` MEDIUMTEXT NULL,
  `quantity` INT NULL,
  `unit_price` DECIMAL(14,2) NULL,
  `sell_price` DECIMAL(14,2) NULL,
  `myob_item` VARCHAR(36) NULL,
  `myob_tax_code` VARCHAR(36) NULL,
  PRIMARY KEY (`line_item_id`),
  INDEX `fk_bill_line_items_bill1_idx` (`bill_id` ASC),
  CONSTRAINT `fk_bill_line_items_bill1`
    FOREIGN KEY (`bill_id`)
    REFERENCES `jobowit_db`.`bill` (`bill_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`job_schedule`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`job_schedule` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`job_schedule` (
  `job_schedule_id` INT NOT NULL AUTO_INCREMENT,
  `start_dtm` DATETIME NOT NULL,
  `finish_dtm` DATETIME NOT NULL,
  `job_id` INT NOT NULL,
  `field_staff_id` INT NOT NULL,
  `h` INT NULL,
  PRIMARY KEY (`job_schedule_id`),
  INDEX `fk_job_schedule_job1_idx` (`job_id` ASC),
  INDEX `fk_job_schedule_staff1_idx` (`field_staff_id` ASC),
  CONSTRAINT `fk_job_schedule_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_schedule_staff1`
    FOREIGN KEY (`field_staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`recurring_availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`recurring_availability` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`recurring_availability` (
  `recurring_availability_id` INT NOT NULL AUTO_INCREMENT,
  `staff_id` INT NOT NULL,
  `weekday` ENUM('Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday') NOT NULL,
  `from_tm` TIME NOT NULL,
  `to_tm` TIME NOT NULL,
  PRIMARY KEY (`recurring_availability_id`),
  INDEX `fk_recurring_availability_staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_recurring_availability_staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`non_availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`non_availability` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`non_availability` (
  `non_availability_id` INT NOT NULL AUTO_INCREMENT,
  `staff_id` INT NOT NULL,
  `not_available_from_dtm` DATETIME NULL,
  `not_available_to_dtm` DATETIME NULL,
  PRIMARY KEY (`non_availability_id`),
  INDEX `fk_recurring_availability_staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_recurring_availability_staff10`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`extra_availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`extra_availability` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`extra_availability` (
  `extra_availability_id` INT NOT NULL AUTO_INCREMENT,
  `staff_id` INT NOT NULL,
  `availability_from_dtm` DATETIME NULL,
  `availability_to_dtm` DATETIME NULL,
  PRIMARY KEY (`extra_availability_id`),
  INDEX `fk_recurring_availability_staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_recurring_availability_staff100`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`field_work`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`field_work` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`field_work` (
  `field_work_id` INT NOT NULL AUTO_INCREMENT,
  `start_dtm` DATETIME NOT NULL,
  `finish_dtm` DATETIME NOT NULL,
  `job_id` INT NOT NULL,
  `field_staff_id` INT NOT NULL,
  `h` INT NULL,
  `hours_worked` INT GENERATED ALWAYS AS (finish_dtm - start_dtm) VIRTUAL,
  PRIMARY KEY (`field_work_id`),
  INDEX `fk_field_work_job1_idx` (`job_id` ASC),
  INDEX `fk_field_work_staff1_idx` (`field_staff_id` ASC),
  CONSTRAINT `fk_field_work_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_field_work_staff1`
    FOREIGN KEY (`field_staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`sales_staff_in_job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`sales_staff_in_job` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`sales_staff_in_job` (
  `sales_staff_in_job_id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `sales_staff_id` INT NOT NULL,
  `commision_percentage` FLOAT NULL,
  PRIMARY KEY (`sales_staff_in_job_id`),
  INDEX `fk_sales_staff_job1_idx` (`job_id` ASC),
  INDEX `fk_sales_staff_staff1_idx` (`sales_staff_id` ASC),
  CONSTRAINT `fk_sales_staff_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sales_staff_staff1`
    FOREIGN KEY (`sales_staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`operation_staff_in_job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`operation_staff_in_job` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`operation_staff_in_job` (
  `operation_staff_in_job_id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `operation_staff_id` INT NOT NULL,
  PRIMARY KEY (`operation_staff_in_job_id`),
  INDEX `fk_operation_staff_in_job_job1_idx` (`job_id` ASC),
  INDEX `fk_operation_staff_in_job_staff1_idx` (`operation_staff_id` ASC),
  CONSTRAINT `fk_operation_staff_in_job_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_operation_staff_in_job_staff1`
    FOREIGN KEY (`operation_staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`invoice`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`invoice` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`invoice` (
  `invoice_id` INT NOT NULL AUTO_INCREMENT,
  `invoice_number` VARCHAR(6) NULL,
  `job_id` INT NOT NULL,
  `description` MEDIUMTEXT NULL,
  `invoice_dt` DATE NULL,
  `invoice_due_dt` DATE NULL,
  `myob_uid` VARCHAR(36) NULL,
  PRIMARY KEY (`invoice_id`),
  INDEX `fk_invoice_job1_idx` (`job_id` ASC),
  UNIQUE INDEX `invoice_number_UNIQUE` (`invoice_number` ASC),
  CONSTRAINT `fk_invoice_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`invoice_line_item`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`invoice_line_item` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`invoice_line_item` (
  `invoice_line_item_id` INT NOT NULL AUTO_INCREMENT,
  `invoice_id` INT NOT NULL,
  `description` MEDIUMTEXT NULL,
  `quantity` INT NULL,
  `unit_price` DOUBLE(15,2) NULL,
  `myob_account` VARCHAR(36) NULL,
  `myob_tax_code` VARCHAR(36) NULL,
  PRIMARY KEY (`invoice_line_item_id`),
  INDEX `fk_invoice_line_item_invoice1_idx` (`invoice_id` ASC),
  CONSTRAINT `fk_invoice_line_item_invoice1`
    FOREIGN KEY (`invoice_id`)
    REFERENCES `jobowit_db`.`invoice` (`invoice_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`db_table`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`db_table` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`db_table` (
  `table_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`table_name`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`access_control`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`access_control` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`access_control` (
  `access_control_id` INT NOT NULL AUTO_INCREMENT,
  `table_name` VARCHAR(100) NOT NULL,
  `staff_id` INT NULL DEFAULT NULL,
  `role_name` VARCHAR(100) NULL DEFAULT NULL,
  `can_read` TINYINT(1) NOT NULL DEFAULT 0,
  `can_delete` TINYINT(1) NULL DEFAULT 0,
  `can_write` TINYINT(1) NULL DEFAULT 0,
  INDEX `fk_access_control_table1_idx` (`table_name` ASC),
  INDEX `fk_access_control_staff1_idx` (`staff_id` ASC),
  INDEX `fk_access_control_access_role1_idx` (`role_name` ASC),
  UNIQUE INDEX `UNIQUE_STAFF_PER_RESOURCE` (`table_name` ASC, `staff_id` ASC),
  PRIMARY KEY (`access_control_id`),
  UNIQUE INDEX `UNIQUE_ROLE_PER_RESOURCE` (`table_name` ASC, `role_name` ASC),
  CONSTRAINT `fk_access_control_table1`
    FOREIGN KEY (`table_name`)
    REFERENCES `jobowit_db`.`db_table` (`table_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_control_staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_control_access_role1`
    FOREIGN KEY (`role_name`)
    REFERENCES `jobowit_db`.`access_role` (`role_name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`resource_id`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`resource_id` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`resource_id` (
  `id_string` VARCHAR(6) NOT NULL,
  PRIMARY KEY (`id_string`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`uploaded_file`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`uploaded_file` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`uploaded_file` (
  `uploaded_file_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `size` BIGINT NOT NULL,
  `content` MEDIUMBLOB NOT NULL,
  `uuid` VARCHAR(36) NOT NULL DEFAULT 'EMPTY',
  `comment_id` INT NULL,
  `uploaded_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`uploaded_file_id`),
  UNIQUE INDEX `uuid_UNIQUE` (`uuid` ASC),
  INDEX `fk_uploaded_file_comment1_idx` (`comment_id` ASC),
  CONSTRAINT `fk_uploaded_file_comment1`
    FOREIGN KEY (`comment_id`)
    REFERENCES `jobowit_db`.`comment` (`comment_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`job_status_entry`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`job_status_entry` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`job_status_entry` (
  `job_status_entry_id` INT NOT NULL AUTO_INCREMENT,
  `job_id` INT NOT NULL,
  `job_status` INT NOT NULL,
  `staff_id` INT NOT NULL,
  `comment` TEXT NULL,
  `entry_dtm` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`job_status_entry_id`),
  INDEX `fk_job_status_entry_job1_idx` (`job_id` ASC),
  INDEX `fk_job_status_entry_job_status1_idx` (`job_status` ASC),
  INDEX `fk_job_status_entry_staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_job_status_entry_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `jobowit_db`.`job` (`job_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_status_entry_job_status1`
    FOREIGN KEY (`job_status`)
    REFERENCES `jobowit_db`.`job_status` (`job_status_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_status_entry_staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `jobowit_db`.`staff` (`staff_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`myob_code`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`myob_code` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`myob_code` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`myob_token`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`myob_token` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`myob_token` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `access_token` LONGTEXT NULL,
  `token_type` VARCHAR(45) NULL,
  `expires_in` INT NULL,
  `refresh_token` LONGTEXT NULL,
  `scope` VARCHAR(45) NULL,
  `user_uid` VARCHAR(45) NULL,
  `user_username` VARCHAR(100) NULL,
  `created_on` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `jobowit_db`.`myob_sync_dates`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `jobowit_db`.`myob_sync_dates` ;

CREATE TABLE IF NOT EXISTS `jobowit_db`.`myob_sync_dates` (
  `party_id` BIGINT NOT NULL,
  `last_sync_dtm` TIMESTAMP NULL,
  `contact_last_sync_dtm` TIMESTAMP NULL,
  PRIMARY KEY (`party_id`),
  CONSTRAINT `fk_myob_sync_dates_party1`
    FOREIGN KEY (`party_id`)
    REFERENCES `jobowit_db`.`party` (`party_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

USE `jobowit_db`;

DELIMITER $$

USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`party_BEFORE_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`party_BEFORE_INSERT` BEFORE INSERT ON `party` FOR EACH ROW
BEGIN
if ( isnull(new.party_uuid) ) then
SET new.party_uuid = uuid();
END if;
END$$


USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`party_AFTER_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`party_AFTER_INSERT` AFTER INSERT ON `party` FOR EACH ROW
BEGIN
insert into myob_sync_dates (`party_id`) values (new.party_id);
END$$


USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`staff_BEFORE_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`staff_BEFORE_INSERT` BEFORE INSERT ON `staff` FOR EACH ROW
BEGIN
if ( isnull(new.staff_uuid) OR new.staff_uuid = 'EMPTY' ) then
SET new.staff_uuid = uuid();
END if;
END$$


USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`job_BEFORE_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`job_BEFORE_INSERT` BEFORE INSERT ON `job` FOR EACH ROW
BEGIN
if ( isnull(new.job_uuid) OR new.job_uuid = 'EMPTY' ) then
SET new.job_uuid = uuid();
END if;
END$$


USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`bill_BEFORE_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`bill_BEFORE_INSERT` BEFORE INSERT ON `bill` FOR EACH ROW
BEGIN
if ( isnull(new.bill_dt) ) then
 set new.bill_dt=curdate();
end if;
if ( isnull(new.due_dt) ) then
 set new.due_dt=curdate();
end if;
END$$


USE `jobowit_db`$$
DROP TRIGGER IF EXISTS `jobowit_db`.`uploaded_file_BEFORE_INSERT` $$
USE `jobowit_db`$$
CREATE DEFINER = CURRENT_USER TRIGGER `jobowit_db`.`uploaded_file_BEFORE_INSERT` BEFORE INSERT ON `uploaded_file` FOR EACH ROW
BEGIN
if ( isnull(new.uuid) OR new.uuid = 'EMPTY' ) then
SET new.uuid = uuid();
END if;
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
