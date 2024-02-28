---
sidebar_position: 3
description: Prepare a cluster in mogenius to connect with your own Kubernetes cluster.
---

# Cluster settings

On the "Settings" tab, you can manage metadata, domain, container registry, and more. To deploy applications on your cluster, setting up a domain is required. To use the mogenius CI/CD pipeline, it is also necessary to connect a container registry.

## General Cluster Information
Modify metadata information of your cluster for displaying purposes in your cluster overview.

## Loadbalancer
Fill in the form fields to connect your cluster with a domain:
- Loadbalancer IPs: If an IngressController is running on your cluster, the external loadbalancer IP address of your cluster will usually be filled out automatically. If the IP is not set automatically, you can enter it manually.
- Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.

:::tip
Working on a local Kubernetes? The host will be set to `local.mogenius.io`. This way, services deployed on your local Kubernetes will receive SSL certificates.
:::

### Connecting your domain
In your DNS settings, create two records of type A:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

## Container registry
Mogenius has a pre-configured internal CI/CD pipeline. To use the pipeline, you'll need to connect a container registry that will be used to store and deploy the container images created by the mogenius pipeline. You can connect an external registry by providing connection credentials in the respective form fields:
- Container registry url: Select your container registry from the dropdown, or enter the url to your registry manually.
- Container registry path: Provide the path to your desired directory inside the registry.
- User: Enter a user name that you want to use to authenticate with the registry.
- PAT: Enter a personal access token from your registry for authentication.

:::info
Alternatively, mogenius comes with a local container registry on your Kubernetes. You can install it from the service list below. The registry will be used automatically for each build of a service on the cluster. In this case, leave the form fields for the container registry empty.
:::

## Cluster services
Delivering Kubernetes infrastructure to development teams requires setting up several additional services after deploying your cluster. mogenius offers a set of pre-configured cluster services that you can install in the cluster settings. You can manage these services from the settings page. For each service a Helm chart will be used to install it on your cluster.

|Service|Description|
|---|---|
|Ingress Controller|Installs a traefik ingress controller to handle traffic from outside the cluster and more.|
|Metrics server|Maintained by Kubernetes-SIGs, handles metrics for built-in autoscaling pipelines.|
|cert-manager|Install the cert-manager to automatically issue Let's Encrypt certificates to your services.|
|Clusterissuer|Responsible for signing certificates.|
|mogenius-traffic-collector|Collects and exposes detailed traffic data for your mogenius services for better monitoring.|
|mogenius-pod-stats-collector|Collects and exposes status events of pods for services in mogenius.|
|Internal container registry|A Docker-based container registry inside Kubernetes.|
|MetalLB loadbalancer|A load balancer for local clusters (e.g. Docker Desktop, k3s, minikube, etc.).|

## Reset cluster MFA-ID
Use this option to reset the connection with your Kubernetes cluster. This is necessary if you're re-installing the operator on a Kubernetes cluster, as each connection between the mogenius platform and an operator is kept unique.

## Deleting a cluster
Deleting a cluster will irrecoverably erase the management pane and all associated settings from mogenius. After deleting a cluster, remaining projects on the platform will be kept online, but it will be impossible to perform changes to your projects. Make sure to uninstall the operator from your Kubernetes cluster before you remove it from the mogenius platform. Otherwise, you will create conflicts with future installations of mogenius.