@echo off
echo Deleting the jobowit_db database
mysql -u root -proot$j0bo@wit < docs/jobowit_drop_db.sql
mysql -u root -proot$j0bo@wit < docs/jobowit_create_db.sql
echo Creating jobowit_db database ...and populating it with mock data
mysql -u root -proot$j0bo@wit < docs/mock_data.sql