這個是希望先弄一個簡單的MariaDB，然後測試一下sequalize-cli針對DB控管的功能。

可能的話會建立一個簡單的指令表，加到說明當中。
方便快速的使用此功能。

會有一個docker maria 的環境，簡單的table 控制與追蹤。

當中需要透過Migration達到控管DB的能力，確認控管的能力之後，就需要設計一下和git彼此運作的模式。

```docker
docker run --name some-mariadb -v /my/own/datadir:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.2-bionic
```
* 之前遇到的docker問題看起來已經很明顯了，因為windows file system不同，所以會導致在mount v 的時候出現問題。所以如果真的要解決這個問題就只能把volume整個當作是image來mount就可以解決了。

* file move out的問題可以再想怎麼解決`docker cp`

* 大致上幾個方法都操作完成了，需要先行安裝一些套件，目前套件都統一放在 dependencies 當中。

* future work:
    會考慮與git共同作業的方式

### reference
    (sequelize-migrate)[https://sequelize.org/master/manual/migrations.html]

### command

```bash
# 建立一個模型
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

# 進行migrate
npx sequelize-cli db:migrate

# 取消migrate
npx sequlize-cli db:migrate:undo

# 特定migrate
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# 建立種子 該種子檔建立後後續可以再編輯加入資料
npx sequelize-cli seed:generate --name demo-user

# 運行種子
npx sequelize-cli db:seed:all

# 取消種子
npx sequelize-cli db:seed:undo

# 取消所有種子
npx sequelize-cli db:seed:undo:all
```