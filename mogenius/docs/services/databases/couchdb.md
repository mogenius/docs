﻿# CouchDB

![CouchDB_Logo](https://api.mogenius.com/file/id/8f674d13-31b2-4839-9db7-27c0ec6b09f3)

**[Website](https://couchdb.apache.org)**
**[Documentation](https://docs.couchdb.org/en/stable/)**

**Description**


CouchDB is a database that completely embraces the web. Store your data with JSON documents. Access your documents with your web browser,  via HTTP.  Query,  combine, and  transform  your documents with  JavaScript. CouchDB works well with modern web and mobile apps. You can distribute your data, efficiently using CouchDB’s  incremental replication. CouchDB supports master-master setups with  automatic conflict  detection.

CouchDB comes with a suite of features, such as on-the-fly document transformation and real-time  change notifications, that make web development a breeze. It even comes with an easy to use web administration console, served directly out of CouchDB! We care a lot about  distributed scaling. CouchDB is highly available and partition tolerant, but is also  eventually consistent. And we care  _a lot_  about your data. CouchDB has a fault-tolerant storage engine that puts the safety of your data first.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,3 |128| 200 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To initiate a CouchDB project, you can add it as a service to your cloudspace. Select CouchDB from the service library and follow the instructions.  


:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::
