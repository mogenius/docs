# InfluxDB

![InfluxDB logo](https://api.mogenius.com/file/id/59c11ad7-e40b-4608-a1b9-1d3b7e8e7759)

**Useful links**  
**[Website](https://www.influxdata.com/products/influxdb-overview/)**  
**[Documentation](https://docs.influxdata.com/influxdb/v2.2/)**  

**Description**

InfluxDB is an open source time series platform. This includes APIs for storing and querying data, processing it in the background for ETL or monitoring and alerting purposes, user dashboards, and visualizing and exploring the data and more. The master branch on this repo now represents the latest InfluxDB, which now includes functionality for Kapacitor (background processing) and Chronograf (the UI) all in a single binary.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,1 |384| 512

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy InfluxBD**  
To initiate an InfluxBD project, you can add it as a service to your cloudspace. Select InfluxBD from the service library and follow the instructions.  

To access the InfluxDB user interface, use your service's external hostname. 
The password is stored in your Key Vault, as defined when creating the service.

:::info
The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The service template is suitable for testing and development but we recommend to rely on a managed database service for production workloads. We'll support managed databases on mogenius soon - until then, we're happy to give recommendations for an appropriate solution.
:::