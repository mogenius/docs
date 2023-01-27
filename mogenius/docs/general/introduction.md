---
sidebar_position: 1
slug: /
---

# Introduction

## Welcome to mogenius docs

![enter image description here](https://api.mogenius.com/file/id/95e16880-56d3-4603-b0d1-664cb257c132)

mogenius is a Virtual DevOps platform that simplifies the process of running and scaling cloud-native applications. Our platform provides an automated cloud infrastructure and an optimized developer experience to help you manage development operations with ease. With our platform, you can provide self-service environments for your cloud infrastructure that software developers can use without the need for expert-level knowledge.

:::tip
**Read our [quickstart guide](./../getting-started/quickstart.md) to deploy your first service in minutes.**
:::

## mogenius offers the entire tool chain to run any application

**Create self-service cloud infrastructure**	
Hyperscaling virtual machines and storage hosted on Microsoft Azure.  


**Kubernetes cluster and deployments**
With mogenius, you can take advantage of the full power of cloud-native container orchestration, load balancing, and dynamic resource scaling for microservices. Deploy and scale your microservices in a Kubernetes cluster without needing deep-level expert knowledge.

**Create your cloudspace and provision cloud resources**
Our platform allows you to tap into the power of public cloud providers such as Microsoft Azure, AWS, and Open Telekom Cloud. You can either run on a shared Kubernetes cluster with cloud resources provided by mogenius (the most cost-effective option), in a dedicated cluster, or run mogenius on your own cloud account. Allocate resources to one or more cloudspaces with individual resource budgets and access rights for team members.
[About cloudspaces](./../getting-started/about-cloudspaces.md)
[Resource management](./../cloud-management/resource-management)

**Assign budgets and limits**  
Set and assign resource budgets for cloudspaces that can be dynamically used by teams and projects. Set limits and alerts to maintain full control of your spending on cloud resources.

**CI/CD pipeline**  
Instant deployment of changes to your specific development stage in the cloud.  
[About CI/CD pipeline](./../development/cicd-pipeline.md)

**Deploy container images, dockerfiles and pre-configured service templates**
Instantly deploy your application by connecting your repository with a Dockerfile, as c container or use one of the pre-configured service templates. Services are assigned internal and external hostnames that other services can use for connection, and you can set individual resource limits for each service and scale it according to demand, including auto-scaling.
[Deploying services](./../tutorials//development/deploying-services)

**Monitoring and logging**
Our platform provides aggregated monitoring of all your service and resource metrics, traffic analytics, and aggregated build, deployment, and application runtime logs.

**Invite team members and assign roles**
For each cloudspace, you can invite team members and assign access rights to each user for viewing, editing, and admin roles.

**Security**
mogenius includes an enterprise-level Web Application Firewall and DDoS protection by default. For each service, SSL certificates are automatically created and managed. You can also easily check each container for vulnerabilities. Our entire platform undergoes regular penetration testing.

**Persistant storage**
Each cloudspace contains persistent storage that is accessible across all your services, e.g. for volume mounts to persist your applications and databases.

**Managed or pre-configured databases**  
Our platform includes pre-configured databases such as MySQL, Postgres, Redis, CouchDB, and many more, which can be managed or unmanaged.  
[Discover supported databases](https://docs.mogenius.com/services/service-overview.md)

**Pre-configured services**  
We continuously expand our service library with pre-configured backend tools, frameworks and microservices.  
[Discover services](https://docs.mogenius.com/getting-started/services-and-instances)

## How to contribute

The mogenius documentation is open-source and based on Docusaurus. You can edit and create content within the documentation by sending a pull request with your suggested changes to [**Github**](https://github.com/mogenius/docs).
