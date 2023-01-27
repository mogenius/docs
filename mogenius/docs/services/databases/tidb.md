# TiDB

![tidb logo](https://api.mogenius.com/file/id/3e070f62-001b-475a-889c-b4c8e56af3b2)

**Useful links**  
**[Website](https://pingcap.com/)**  
**[Documentation](https://docs.pingcap.com/tidb/stable)**  

**Description**

TiDB is an open-source NewSQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,3 |128| 300

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

**How to deploy TiDB**  
To install this service, go to the service library. Select the TiDB service and click "Add service". Follow the instructions and finalize the create process by clicking "Save".  
There is a detailed tutorial available on [how to launch TiDB with mogenius](./../../tutorials/how-to-deploy-a-tidb-database-in-the-cloud.md).


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::
