# MySQL

![mysql logo](https://api.mogenius.com/file/id/fba7f010-3962-4b92-b624-b790402ef31c)

**Useful links**  
**[Website](https://www.mysql.com/)**  
**[Documentation](https://dev.mysql.com/doc/)**  

**Description**

MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, covering the entire range from personal projects and websites, via e-commerce and information services, all the way to high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,3 |300| 200

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy MySQL**  
To install this service, go to the service library. Select the MySQL service and click "Add service". Follow the instructions and walk through the create process. You need to set environment variables that will be stored in your Key Vault and that you can access later through other applications.    
There is a detailed tutorial available on [how to launch MySQL with mogenius](./../../tutorials/how-to-set-up-mysql-and-phpmyadmin-in-the-cloud.md).


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::