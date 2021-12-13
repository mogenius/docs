---
sidebar_position: 4
---

# Services & Instances

## Services
Our design of services is based on the concept of containers. Therefore, a service can serve a specific purpose, such as a microservice or database, or it can consist of a fully functional web application. You will use services to build your application based on a cloudspace. Multiple services within a cloudspace can communicate with each other without ever being exposed to the outside world, which means you can form a set of services to build a secure microservice architecture.

mogenius offers you a large number of pre-configured services. We offer services in the following categories:

 - Container files, e.g. Docker
 - Boilerplate templates for frameworks and languages
 - Web services and dev tools
 - Web applications, e.g. static site generators
 - Databases

For a detailed list of all services [visit our service overview](./../services/service-overview.md)

With our pre-configured services, you can start from scratch with a default template that we create in an empty repository of your choice. With container files, you can connect any existing application to launch it in your cloudspace.

[How to setup a service](./../mogenius-platform/services.md)

## Instances
*Instances*, also known as *Pods*, are the smallest deployable compute units you can create and manage in Kubernetes.  
For each service, you can add instances that create additional pods with clones of your service. So with an additional instance, the service immediately gets twice the amount of allocated resources, allowing you to quickly scale a service to serve higher demand. 

[Read more about resource management and scaling](./../cloud-management/resource-management.md)