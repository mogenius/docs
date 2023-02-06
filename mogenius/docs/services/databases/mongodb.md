# MongoDB

![mongoDB logo](https://api.mogenius.com/file/id/1f8982c8-422a-40ff-af4b-17a24df002f6)

**Useful links**  
**[Website](https://www.mongodb.com/)**  
**[Documentation](https://docs.mongodb.com/)**  

**Description**

MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License (SSPL).

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,3 |128| 100

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

**How to deploy MongoDB**  
To install this service, go to the service library. Select the MongoDB service and click "Add service". Follow the instructions and walk through the create process. You need to set environment variables that will be stored in your Key Vault and that you can access later through other applications.
THere is a detailed tutorial available on [how to launch MongoDB with mogenius](./../../tutorials/how-to-set-up-mongodb-in-the-cloud.md).


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::