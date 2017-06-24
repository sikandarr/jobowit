#!/usr/bin/env sh
echo "----------------------------------------"
echo "Deleting the jobowit_db database"
echo "----------------------------------------"

mysql -u root -p'root$j0bo@wit' < 'docs/jobowit_create_db.sql'

echo "----------------------------------------"
echo "Creating jobowit_db database"
echo "...and populating it with mock data"
echo "----------------------------------------"

mysql -u root -p'root$j0bo@wit' < 'docs/mock_data.sql'
