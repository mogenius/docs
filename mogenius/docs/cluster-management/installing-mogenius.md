---
sidebar_position: 1
description: Connect your own Kubernetes cluster by installing the mogenius operator on the cluster.
---

# Installing mogenius

mogenius allows you to connect with Kubernetes clusters by installing the mogenius operator on a cluster. Once installed, you can start deploying projects and manage Kubernetes workloads through the mogenius platform. To begin the installation process, you'll first need to create a cluster in mogenius.

## Prerequisites
To successfully complete the next steps, you will need the following:
- A domain you own, to which you can add a DNS record.
- A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work. To get started, a [local Kubernetes](./local-cluster.md) like Docker Desktop, k3s, or minikube is also a great option.
- A working installation of `Helm` and `kubectl`
- OR optionally the [mogenius CLI](../development/mogenius-cli.md)
- Kubernetes cluster admin permissions

## Resource requirements
The mogenius operator consists of several pods that will be deployed to your Kubernetes cluster. It will require at least 0.5 vCPU and 128 MB RAM.

## Add a cluster in mogenius

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/iy17UxSmsVTaPPiLgHhlQ" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

In your organization open "Clusters" and select "Add cluster." Enter a display name for your cluster and confirm.

:::info
This will create a management pane for a Kubernetes cluster in mogenius. It will not create an actual Kubernetes cluster.
:::

## Install the operator

mogenius connects to your Kubernetes cluster via an operator that you'll need to deploy on Kubernetes. In the next step you will have two options to do this: using the mogenius CLI, or by using Helm.

### mogenius CLI
Install the mogenius CLI, on your terminal perform a `mocli login` and then run the following command.

```jsx" title="Installation via mogenius CLI"
mocli cluster connect
```

You'll be asked to confirm the organization, the cluster that you want to connect, and your current kubecontext before the operator is being deployed.

### Helm install

Retrieve the Helm install command from the user interface and run it on a terminal. Make sure that your kubecontext is set to the right Kubernetes cluster. The command will look something like this.

```jsx title="mogenius operator Helm install"
helm repo add mogenius https://helm.mogenius.com/public
helm repo update
helm install mogenius-operator mogenius/mogenius-k8s-manager -n mogenius --create-namespace --wait \
--set global.cluster_name="DISPLAY_NAME" \
--set global.api_key="API_KEY" \
--set global.namespace="mogenius"
```

## Complete your cluster setup

After executing one of the install commands above, return back to the mogenius user interface and click "I ran the command." The UI will confirm once the operator has established a connection with the mogenius controlplane. To finish your setup you'll now see a list of services that you can install to get your cluster deployment-ready.

The operator scans your cluster and automatically offers a subset of services from the following list, depending on your cluster type and any existing services.

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

Select the services that you want to install on your cluster and confirm. You'll be taken to the settings page of your cluster while the services are installed.

## Troubleshooting
If you're encountering issues with installing the operator, check out common problems in the section [Troubleshooting clusters](./troubleshooting-clusters.md).

## Next steps
Congrats, your cluster is now connected with mogenius 🎉  
To complete the setup, make sure that hostname and container registry are set up in the [cluster settings](./cluster-settings.md).