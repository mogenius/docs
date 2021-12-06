---
sidebar_position: 2
---

# Resource management

With mogenius you should always have full control and transparency over the use of your cloud resources. There are several ways to do this and we will cover them here.

## Available resources in your plan

First, it is important to understand how resources are distributed in your Cloudspace. The plan you choose when creating a Cloudspace determines your total available resources ([Check out the available plans](#)). You can then allocate resources to your services, which will set limits in maximum resource consumption for each service. This means, a service does not necessarily consume the full amount of allocated resources. You will see the summary of resource consumption over every stage and service on the dashboard of your Cloudspace.

![mogenius dashboard](https://api.mogenius.com/file/id/4a13575a-65cb-4bfc-aeb5-f20d9cd15e80)

Inside mogenius studio, you will get an overview of resource consumption at every level of detail. On the page Stages & Services all the metrics from services will be summarized per stage. You can then monitor single services inside every stage.

![stages and services](https://api.mogenius.com/file/id/30a2f5a4-4b50-4936-869b-7d627c94baec)


## Allocating resources at service creation

When creating a service you can set resource limits to control the maximum amount of resources your service can consume. If you use a pre-configured service template we will set recommendations for minimum resource requirements as the default settings. You can edit the default settings at service creation or later in your settings. 
If you use a container file (e.g. Dockerfile) you will need to set own resource limits based on the specific application you are launching. You can use this [overview of service templates](#) as a reference but please keep in mind that your individual application might be more advanced than a boilerplate template.

![mogenius resource allocation](https://api.mogenius.com/file/id/244fe123-8d30-4c1c-8679-1ee565b93c9d?size=xs)

The available resources depend on your plan and on the services that you have already deployed. If your available resources are not sufficient to launch the service you will need to delete or scale down other services, or [upgrade your plan](#).

## Scaling a service

If you receive warnings for your service regarding resource exhaustion or if your service is receiving more traffic than expected, this might be the time to scale your service. There are two ways to do this: By allocating more resources to your service, or by creating another instance.

### Allocate more resource

You can allocate more resources to a service in the settings. When on the detail page of a service, click "Edit Service" on the gear icon.

![edit service](https://api.mogenius.com/file/id/c79e5641-2a3e-46a2-be37-4c965968cf87)

Scroll down to Resource Limits. You can then allocate more resources depending on the available resources in your cloudspace.

Save your new settings and the service will scale instantly. This will be visible on the resource overview for your service and stage.

### Add an instance

Creating another instance of your service, will result in a new Kubernetes pod that acts as a clone of your service to answer more requests at the same time. This means, that the resource allocation will be doubled for one additional instance. Two additional instances will result in tripled resource allocation.

Adding an instance can also be handled through the settings of your service. Click "Edit Service" on the gear icon inside the detail page of a service.

![edit service](https://api.mogenius.com/file/id/c79e5641-2a3e-46a2-be37-4c965968cf87)

Above the resource limits you will see "Instances" and a plus icon to add an additional instance. The total available resources and the total resource allocation will adjust according to your settings.

Once you save your changes the new settings will take effect immediately and another instance of your service will be deployed.

## Handling limit exhaustion