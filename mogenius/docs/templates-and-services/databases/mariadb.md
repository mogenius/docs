# MariaDB

![Mariadb_logo](https://api.mogenius.com/file/id/73b8a303-30b6-42c8-9797-054eea5a50d7)

**[Website](https://mariadb.org)**
**[Documentation](https://mariadb.org/documentation/)**

**Description**

MariaDB Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions.

It is built upon the values of performance, stability, and openness, and MariaDB Foundation ensures contributions will be accepted on technical merit. Recent new functionality includes advanced clustering with Galera Cluster 4, compatibility features with Oracle Database and Temporal Data Tables, allowing one to query the data as it stood at any point in the past.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,2 |128| 100 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To initiate a MariaDB project, you can add it as a service to your cloudspace. Select MariaDB from the service library and follow the instructions.  

:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::