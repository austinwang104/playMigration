這個是希望先弄一個簡單的MariaDB，然後測試一下sequalize-cli針對DB控管的功能。

可能的話會建立一個簡單的指令表，加到說明當中。
方便快速的使用此功能。

會有一個docker maria 的環境，簡單的table 控制與追蹤。

當中需要透過Migration達到控管DB的能力，確認控管的能力之後，就需要設計一下和git彼此運作的模式。

```docker
docker run --name some-mariadb -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.2-bionic
```