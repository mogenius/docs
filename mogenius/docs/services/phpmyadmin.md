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

[Learn more about how to manage resources for services](#)

**How to deploy phpMyAdmin**  
To install this service, go to the [service library](#). Select the service phpMyAdmin and click on "Add service". It is recommended that you have created a database (e.g. [MySQL](#) or [MariaDB](#)) in your cloudspace before launching phpMyAdmin. Follow the instructions on the screen and walk through the create process. Connect phpMyAdmin by defining your databases hostname and the root password from your Key Vault in the section Environment Variables. Hit "Create Service" and phpMyAdmin will start building. You can then access the database that you have connected.   
We have written a detailed tutorial on [how to launch phpMyAdmin with mogenius](#).
