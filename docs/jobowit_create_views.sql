/* DROP ALL VIEWS */

SET @views = NULL;
SET @database_name = 'jobowit_db';

USE jobowit_db;

SELECT GROUP_CONCAT(table_schema, '.', table_name) INTO @views
 FROM information_schema.views 
 WHERE table_schema = @database_name; -- Your DB name here 

SET @views = IFNULL(CONCAT('DROP VIEW ', @views), 'SELECT "No Views"');
PREPARE stmt FROM @views;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;


CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_current_status` AS
    SELECT 
        `jse`.`job_id` AS `job_id`,
        `js`.`job_status_id` AS `job_status_id`,
        `js`.`status_desc` AS `current_status`
    FROM
        (`job_status_entry` `jse`
        JOIN `job_status` `js` ON ((`js`.`job_status_id` = `jse`.`job_status`)))
    GROUP BY `jse`.`job_id`
    ORDER BY `jse`.`job_id` , MAX(`jse`.`job_status_entry_id`);
    
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_count_by_type_and_status` AS
    SELECT 
        REPLACE(CONCAT(`j`.`current_type`,
                    `jcs`.`current_status`),
            ' ',
            '') AS `id`,
        `j`.`current_type` AS `current_type`,
        `jcs`.`current_status` AS `current_status`,
        COUNT(0) AS `count`
    FROM
        (`job` `j`
        JOIN `job_current_status` `jcs` ON ((`j`.`job_id` = `jcs`.`job_id`)))
    GROUP BY `jcs`.`current_status`;

CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `staff_not_available` AS
    SELECT 
        `s`.`staff_id` AS `staff_id`,
        `na`.`non_availability_id` AS `non_availability_id`
    FROM
        (`staff` `s`
        JOIN `non_availability` `na` ON ((`s`.`staff_id` = `na`.`staff_id`)))
    WHERE
        (NOW() BETWEEN `na`.`not_available_from_dtm` AND `na`.`not_available_to_dtm`);
		
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `invoice_total` AS
    SELECT 
        `i`.`invoice_id` AS `invoice_id`,
        `i`.`invoice_number` AS `invoice_number`,
        `i`.`job_id` AS `job_id`,
        `i`.`description` AS `description`,
        `i`.`invoice_dt` AS `invoice_dt`,
        `i`.`invoice_due_dt` AS `invoice_due_dt`,
        `i`.`myob_uid` AS `myob_uid`,
        SUM(`il`.`total`) AS `total`
    FROM
        (`invoice` `i`
        JOIN `invoice_line_item` `il` ON ((`i`.`invoice_id` = `il`.`invoice_id`)))
    GROUP BY `i`.`invoice_id`;
		
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `comission` AS
    SELECT 
        CONCAT(`j`.`job_id`,
                `i`.`invoice_id`,
                `s`.`staff_id`) AS `id`,
        `j`.`job_id` AS `job_id`,
        `j`.`job_uuid` AS `job_uuid`,
        `i`.`invoice_id` AS `invoice_id`,
        `s`.`staff_id` AS `staff_id`,
        `s`.`name` AS `staff_name`,
        `r`.`role_id` AS `role_id`,
        `r`.`role_name` AS `role_name`,
        CAST(`i`.`total` AS DECIMAL (14 , 2 )) AS `invoice_amount`,
        CAST(`oj`.`comission_percentage` AS DECIMAL (14 , 2 )) AS `comission_p`,
        CAST(((`oj`.`comission_percentage` / 100) * `i`.`total`)
            AS DECIMAL (14 , 2 )) AS `comission_amount`
    FROM
        ((((`job` `j`
        JOIN `operation_staff_in_job` `oj` ON ((`j`.`job_id` = `oj`.`job_id`)))
        JOIN `staff_job_role` `r` ON ((`r`.`role_id` = `oj`.`staff_job_role_id`)))
        JOIN `staff` `s` ON ((`oj`.`staff_id` = `s`.`staff_id`)))
        JOIN `invoice_total` `i` ON ((`i`.`job_id` = `j`.`job_id`)))
    WHERE
        (`r`.`role_id` = 3);

