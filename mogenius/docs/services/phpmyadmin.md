---
sidebar_position: 12
---

# phpMyAdmin

![phpmyadmin logo](https://api.mogenius.com/file/id/f11edbd1-f729-4f8e-840f-5414ebf9e663)

**Useful links**  
**[Website](https://www.phpmyadmin.net/)**  
**[Documentation](https://www.phpmyadmin.net/docs/)**  

**Description**

phpMyAdmin is a free and open source administration tool for MySQL and MariaDB. As a portable web application written primarily in PHP, it has become one of the most popular MySQL administration tools, especially for web hosting services.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,2 |96| 100
| Optimum | 0,2 |256| 1

[Learn more about how to manage resources for services](./../cloud-management/resource-management.md)

**How to deploy phpMyAdmin**  
To install this service, go to the [service library](./../mogenius-platform/service-library.md). Select the phpMyAdmin service and click "Add service". We recommend that you create a database (e.g. [MySQL](mysql.md) or [MariaDB](mariadb.md)) in your cloudspace before launching phpMyAdmin. Follow the instructions and walk through the create process. Connect phpMyAdmin by specifying the hostname of your database and the root password from your Key Vault in the Environment Variables section. Click "Create Service" and phpMyAdmin will begin to build. You will then be able to access the database you have connected.   
There is a detailed tutorial available on [how to launch phpMyAdmin with MySQL](./../tutorials/creating%20mysql.md).
