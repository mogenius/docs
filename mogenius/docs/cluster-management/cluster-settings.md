---
sidebar_position: 3
description: Prepare a cluster in mogenius to connect with your own Kubernetes cluster.
---

# Cluster settings

On the "Settings" tab, you can manage metadata, domain, container registry, and more. To deploy applications on your cluster, setting up a domain is required. To use the mogenius CI/CD pipeline, it is also necessary to connect a container registry.

## General Cluster Information
Modify metadata information of your cluster and set the type of Kubernetes service you're using.

## Loadbalancer
Fill in the form fields to connect your cluster with a domain:
- Loadbalancer IPs: Enter the external load balancer IP address of your cluster. This is only available if an ingress controller is installed on your cluster. If you don't have one already, you can install an ingress controller together with the mogenius operator (see [installing mogenius](./installing-mogenius.md)).
- Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.

:::tip
Working on a local cluster? Just type in `127.0.0.1` as the IP and `localhost` for the loadbalancer host.
:::

### Connecting your domain
In your DNS settings, create two records of type A:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

## Container registry
Mogenius has a pre-configured internal CI/CD pipeline. To use the pipeline, you'll need to connect a container registry that will be used to store and deploy the container images created by the mogenius pipeline.
- Container registry url: Select your container registry from the dropdown, or enter the url to your registry manually.
- Container registry path: Provide the path to your desired directory inside the registry.
- User: Enter a user name that you want to use to authenticate with the registry.
- PAT: Enter a personal access token from your registry for authentication.

## Reset cluster MFA-ID
Use this option to reset the connection with your Kubernetes cluster. This is necessary if you're re-installing the operator on a Kubernetes cluster, as each connection between the mogenius platform and an operator is kept unique.

## Deleting a cluster
Deleting a cluster will irrecoverably erase the management pane and all associated settings from mogenius. After deleting a cluster, remaining projects on the platform will be kept online, but it will be impossible to perform changes to your projects. Make sure to uninstall the operator from your Kubernetes cluster before you remove it from the mogenius platform. Otherwise, you will create conflicts with future installations of mogenius.