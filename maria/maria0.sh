docker run --name mig-mariadb -p 3306:3306 -v mariaVol:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=Abcd1234 -d mariadb:10.3.11-bionic