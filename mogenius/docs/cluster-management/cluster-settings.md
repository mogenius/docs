---
sidebar_position: 3
description: Prepare a cluster in mogenius to connect with your own Kubernetes cluster.
---

# Cluster settings

On the "Settings" tab in a cluster, you can manage metadata, baseline components, default hostnames for ingresses, and more.

## General Cluster Information
Modify metadata information of your cluster for displaying purposes in your cluster overview.

## Loadbalancer
If you're using an ingress controller, you can use this setting to define a default hostname that will be used when you expose a port on a deployment.
Fill in the form fields to set up a default domain for your cluster:
- Loadbalancer IPs: If an IngressController is running on your cluster, the external loadbalancer IP address of your cluster will usually be filled out automatically. If the IP is not set automatically, you can enter it manually.
- Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.

### Connecting your domain
In your DNS settings, create two records of type A:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

## Services
Delivering Kubernetes infrastructure to development teams requires setting up several additional services after deploying your cluster. mogenius offers a set of pre-configured baseline components that you can install in the cluster settings. You can manage these services from the settings page. For each service a Helm chart will be used to install it on your cluster.

|Service|Description|
|---|---|
|Ingress Controller|Installs a traefik ingress controller to handle traffic from outside the cluster and more.|
|Metrics server|Maintained by Kubernetes-SIGs, handles metrics for built-in autoscaling pipelines.|
|cert-manager|Install the cert-manager to automatically issue Let's Encrypt certificates to your services.|
|Clusterissuer|Responsible for signing certificates.|
|MetalLB loadbalancer|A load balancer for local clusters (e.g. Docker Desktop, k3s, minikube, etc.).|

## Reset cluster MFA-ID
Use this option to reset the connection with your Kubernetes cluster. This is necessary if you're re-installing the operator on a Kubernetes cluster, as each connection between the mogenius platform and an operator is kept unique.

## Deleting a cluster
Deleting a cluster will remove it from your organization together with all workspaces that were created on that cluster. The resources on Kubernetes aren't affected by this. Since workspaces are a CRD, they will reappear in your organization after reconnecting your cluster.