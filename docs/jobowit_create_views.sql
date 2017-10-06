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
		
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_labor_cost` AS
    SELECT 
        `f`.`job_id` AS `job_id`,
        SUM(`f`.`hours_worked`) AS `total_hours_worked`,
        SUM(`f`.`cost`) AS `labor_cost`
    FROM
        (`field_work` `f`
        JOIN `job` `j` ON ((`j`.`job_id` = `f`.`job_id`)))
    GROUP BY `f`.`job_id`;
	
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_material_cost` AS
    SELECT 
        `b`.`job_id` AS `job_id`,
        SUM(`bli`.`purchase_price`) AS `material_cost`
    FROM
        (`bill` `b`
        JOIN `bill_line_item` `bli` ON ((`b`.`bill_id` = `bli`.`bill_id`)))
    GROUP BY `b`.`job_id`;
	

CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_revenue` AS
    SELECT 
        `i`.`job_id` AS `job_id`, SUM(`i`.`total`) AS `revenue`
    FROM
        (`invoice_total` `i`
        JOIN `job` `j` ON ((`i`.`job_id` = `j`.`job_id`)))
    GROUP BY `i`.`job_id`;
	
	
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_comission_cost` AS
    SELECT 
        `c`.`job_id` AS `job_id`,
        SUM(`c`.`comission_amount`) AS `total_comission`
    FROM
        (`comission` `c`
        JOIN `job` `j` ON ((`j`.`job_id` = `c`.`job_id`)))
    GROUP BY `c`.`job_id`;
	
CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `job_cost` AS
    SELECT 
        `j`.`job_id` AS `job_id`,
        IFNULL(`l`.`labor_cost`, 0) AS `labor`,
        IFNULL(`m`.`material_cost`, 0) AS `material`,
        IFNULL(`c`.`total_comission`, 0) AS `comission`,
        ((IFNULL(`l`.`labor_cost`, 0) + IFNULL(`m`.`material_cost`, 0)) + IFNULL(`c`.`total_comission`, 0)) AS `total_cost`,
        `r`.`revenue` AS `revenue`,
        (`r`.`revenue` - ((IFNULL(`l`.`labor_cost`, 0) + IFNULL(`m`.`material_cost`, 0)) + IFNULL(`c`.`total_comission`, 0))) AS `profit`
    FROM
        ((((`job` `j`
        LEFT JOIN `job_labor_cost` `l` ON ((`j`.`job_id` = `l`.`job_id`)))
        LEFT JOIN `job_material_cost` `m` ON ((`j`.`job_id` = `m`.`job_id`)))
        LEFT JOIN `job_comission_cost` `c` ON ((`j`.`job_id` = `c`.`job_id`)))
        JOIN `job_revenue` `r` ON ((`j`.`job_id` = `r`.`job_id`)));
		

CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `root`@`localhost` 
    SQL SECURITY DEFINER
VIEW `comment_union_status` AS
    SELECT 
        `comment`.`comment_id` AS `comment_id`,
        `comment`.`details` AS `details`,
        `comment`.`party_id` AS `party_id`,
        `comment`.`job_id` AS `job_id`,
        `comment`.`comment_dtm` AS `comment_dtm`,
        `comment`.`staff_id` AS `staff_id`,
        `comment`.`log_message` AS `log_message`
    FROM
        `comment` 
    UNION SELECT 
        (200000 + `jse`.`job_status_entry_id`) AS `200000 + job_status_entry_id`,
        CONCAT('<strong>Status:</strong>',
                `js`.`status_desc`,
                '<br /><br />',
                `jse`.`comment`) AS `Name_exp_9`,
        NULL AS `NULL`,
        `jse`.`job_id` AS `job_id`,
        `jse`.`entry_dtm` AS `entry_dtm`,
        `jse`.`staff_id` AS `staff_id`,
        0 AS `0`
    FROM
        (`job_status_entry` `jse`
        JOIN `job_status` `js` ON ((`jse`.`job_status` = `js`.`job_status_id`)))
    ORDER BY `comment_dtm`

