---
sidebar_position: 2
---

# Resource management

With mogenius you always have full control and transparency of the usage of your cloud resources. There are several ways to do this, which we will cover in this section.

## Available resources in your plan

First, it is important to understand how the resources in your cloudspace will be distributed. The plan you choose when creating a cloudspace determines your total available resources ([Check out the available plans](./../general/plans-pricing.md). You can then allocate resources to your services, with limits on maximum resource consumption for each service. A service does not necessarily consume the entire amount of the allocated resources. You can see the summary of resource consumption for each stage and service on your cloudspace dashboard.

![mogenius dashboard](https://api.mogenius.com/file/id/61e9457a-abde-4cac-95f8-1bf5d5d4c934)

In mogenius studio you get an overview of the resource consumption on a detailed level. On the Stages & Services page, all metrics of the services are summarized per stage. You can then monitor individual services within each stage.

![stages and services](https://api.mogenius.com/file/id/703866f3-d7ba-4e95-9fae-aed1e0f84f28)


## Allocating resources when you create a service

When you create a service, you can set resource limits to control the maximum amount of resources your service can consume. If you use a preconfigured service template, recommendations for minimum resource requirements are set as default settings. You can edit the default settings when you create the service or later in your settings. 
If you are using a container file (such as a Docker file), you must set your own resource limits based on the specific application you are launching. You can use our [service templates](./../services/index.md) as a reference but please keep in mind that your individual application might be more advanced than a boilerplate template.

![mogenius resource allocation](https://api.mogenius.com/file/id/679ed62d-c653-4b64-b469-f7b78c1d334f)

The available resources depend on your plan and on the services you have already deployed. If the available resources are not enough to launch the service, you need to delete or scale down other services, or upgrade your plan.

## Scaling a service

If you are receiving warnings for your service that it is running out of resources, or if your service is receiving more traffic than expected, it may be time to scale it. There are two ways to do this: By allocating more resources to your service, or by adding another instance.

### Allocate more resource

You can allocate more resources to a service in the settings. On the details page of a service, click the "Edit Service" gear icon.

![edit service](https://api.mogenius.com/file/id/c79e5641-2a3e-46a2-be37-4c965968cf87)

Scroll down to Resource Limits. There you can allocate more resources from the available resource pool in your cloudspace.

Save your new settings and the service will be scaled instantly. This will be visible in the resource overview for your service and stage.

### Add an instance

When you create another instance of your service, a new Kubernetes pod is created that acts as a clone of your service to answer more requests at the same time. Meaning, the resource allocation for an additional instance is doubled. Two additional instances result in a tripling of the resource allocation.

Adding an instance can also be done through the settings of your service. Click the "Edit Service" gear icon on the details page of a service.

![edit service](https://api.mogenius.com/file/id/c79e5641-2a3e-46a2-be37-4c965968cf87)

Above the resource limits, you will see "Instances" and a plus icon to add another instance. The total available resources and the total resource allocation are adjusted according to your settings.

Once you save your changes, the new settings will take effect immediately and another instance of your service will be deployed.