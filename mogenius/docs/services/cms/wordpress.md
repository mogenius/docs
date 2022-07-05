# Wordpress

![Wordpress logo](https://api.mogenius.com/file/id/b3327f84-a241-4e44-9dca-b238434f442b)

**[Website](https://wordpress.org/)**  
**[Documentation](https://wordpress.org/support/)**  

**Description**

Wordpress is one of the most used content management systems. mogenius supports a Docker image from Wordpress.org to quickly run a Wordpress instance from a service template.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,7 | 256 | 300 |

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

**How to deploy**  
To set up Wordpress, you can add it as a service to your cloudspace. Select Wordpress from the service library and follow the instructions. Wordpress requires a database and we recommend you to launch [MySQL](mysql.md) as a service before setting up Wordpress. This way, you can connect to the database directly at creation of the Wordpress service.

Once the service is started, open Wordpress over the external hostname (your service URL) on the path /wp-admin.  
The default user is "user" with the password "bitnami". Make sure to change it immediately after your first login.
