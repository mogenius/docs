# PostgreSQL

![PostgreSQL logo](https://api.mogenius.com/file/id/75dcca16-d36a-434b-a3ad-15dc08b0267d)

**[Website](https://www.postgresql.org)**  
**[Documentation](https://www.postgresql.org/docs/)**  

**Description**

PostgreSQL is a popular, open source object-relational database system with a strong reputation for reliability, feature robustness, and performance.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,3 | 256 | 100 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To set up PostgreSQL, you can add it as a service to your cloudspace. Select PostgreSQL from the service library and follow the instructions.  
There is a detailed tutorial available on [how to launch postgreSQL with mogenius](./../../tutorials/how-to-set-up-postgresql-in-the-cloud.md).


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::