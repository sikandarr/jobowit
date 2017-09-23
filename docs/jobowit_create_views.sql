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
        (NOW() BETWEEN `na`.`not_available_from_dtm` AND `na`.`not_available_to_dtm`)

