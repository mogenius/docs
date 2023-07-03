﻿# Neo4j

![Neo4j logo](https://api.mogenius.com/file/id/4c86b3be-5a63-4dea-99eb-7787834defe4) 

**Useful links**  
**[Website](https://neo4j.com/)**  
**[Documentation](https://neo4j.com/resources//)**  

**Description**

Build connected data applications with Neo4j in the cloud, an easy-to-use graph database.

A graph database stores nodes and relationships instead of tables, or documents. Data is stored just like you might sketch ideas on a whiteboard. Your data is stored without restricting it to a pre-defined model, allowing a very flexible way of thinking about and using it.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,1 |768| 300

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy Neo4j**  
To initiate a Neo4j project, you can add it as a service to your cloudspace. Select Neo4j from the service library and follow the instructions.  


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::