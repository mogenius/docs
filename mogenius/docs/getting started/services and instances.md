---
sidebar_position: 4
---

# Services & Instances

## Services
Our design of Services inside mogenius relies on the concept of containers. Therefore, a service can serve a dedicated purpose, e.g. a microservice or database, or it can consist of a fully functioning web application. You will use services to build up your application on the fundament of a Cloudspace. Multiple services inside a cloudspace can communicate with eachother without ever being exposed externally, meaning you can form a set of services to build a secure microservice architecture.

From the outset, mogenius offers a large number of prepared services. We offer services in the following categories:

 - Container files, e.g. Docker
 - Boilerplate templates for frameworks and languages
 - Webservices and dev tools
 - Web applications, e.g. static site generators
 - Databases

For a detailed list of all services [visit our service overview](#)

Our pre-configured services are there to start from scratch with a boilerplate template that we will create in an empty repository of your choice. With container files you can connect any existing application to launch it in your Cloudspace.

[How to setup a service](#)

## Instances
*Instances*, also known as *pods*, are the smallest deployable units of computing that you can create and manage in Kubernetes.  
For every service you will be able to add instances, which will create additional pods with clones of your service. With one additional instance the service will therefore instantly get twice the amount of allocated resources, allowing you to quickly scale a service to serve higher demand. 

[Read more about resource management and scaling](#)