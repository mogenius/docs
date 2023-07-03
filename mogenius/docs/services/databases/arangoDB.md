# ArangoDB

![ArangoDB logo](https://api.mogenius.com/file/id/b52060f3-1b78-473d-9675-c96f320ceff7)

**[Website](https://arangodb.com/)**  
**[Documentation](https://www.arangodb.com/documentation/)**  

**Description**

ArangoDB is an open-source multi-model database system, supporting key/value, documents, and graphs.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,5 | 368 | 200 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To set up ArangoDB, you can add it as a service to your cloudspace. Select ArangoDB from the service library and follow the instructions. You will be asked to create a repository for this service. This will contain a Dockerfile that holds major configuration details. Therefore you should set the repository visibility to "private".  

To access the ArangoDB user interface, use your service's external hostname. 
The ArangoDB default user is 'root'. The password is stored in your Key Vault, as defined when creating the service.

:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::

