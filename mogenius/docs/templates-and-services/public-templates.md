---
sidebar_position: 2
---

# Public templates

Apart from custom templates you will find a section of public templates in each template library. Those are common services that we maintain for all users. We usually rely on public Docker images and boilerplate repositories that you'll find on our [Github](https://github.com/mogenius). If an application offers different variants of configuration (e.g. development vs. production config) we usually aim for the option that results in the fastest and easiest setup for developers. Please verify that you're running on an appropriate configuration according to your use case and modify the settings after deploying a template if necessary.

## Container images
For public templates that are based on container images we use public registries. We apply the configurations from the respective technical documentation for each service. We avoid the tag `latest` and it is possible that public templates are not always set to the most recent stable image version. Make sure that you're running on the recent stable version after deploying a container image.

:::caution
The public service library holds several templates for database services. The database will be deployed in a container on a Kubernetes cluster, which is usually considered bad practice for production workloads. The public database templates are suitable for testing and development but we recommend to rely on a managed database service for production workloads.
:::

## Repositories
Some public templates rely on repositories which usually hold boilerplate code for a skeleton project. They allow you to quickly deploy a frontend or backend framework and start developing your own application quickly. The template repositories are public and you will find them on our [Github](https://github.com/mogenius). When deploying a repository template usually some setup commands are executed so seed project files in your Github or Gitlab repository.