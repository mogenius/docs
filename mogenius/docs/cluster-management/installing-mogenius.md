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
- OR optionally the [mogenius CLI](../development/mogenius-CLI.md)
- Kubernetes cluster admin permissions

## Resource requirements
The mogenius operator is deployed to your Kubernetes cluster using Helm. It will require at least 0.5 vCPU and 128 MB RAM.

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

After executing one of the install commands above, return back to the mogenius user interface and click "I ran the command." The UI will confirm once the operator has established a connection with the mogenius controlplane. Once the operator is connected, proceed with installing Helm charts to finish your Kubernetes setup. Some services from the list are required to support the mogenius feature-set, like pod stats and traffic collector. Additionally, you can select recommended Helm charts from the list, like an ingress controller or cert manager.

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
|External secrets operator|Required to use the Hashicorp Vault integration in a project.|

Once you made your selection, confirm with "Install" and the Helm charts will be deployed to your cluster. Since some of them depend on each other, the installation can take a moment.

## CI/CD setup

Each mogenius project comes with a built-in pipeline to build and deploy container images automatically. The pipeline builds images based on Dockerfiles and pushes them to a container registry. In this step, you can provide credentials to your registry to use the pipeline. If you previously installed the internal registry Helm chart, you can skip this step. The external registry is also optional, if you don't want to use the internal build pipeline and deploy images directly from an external registry instead.

## Hostname & IP address

Finally, set up a domain for services deployed on your cluster:
Loadbalancer IP: If an IngressController is running on your cluster, the external loadbalancer IP address of your cluster will usually be filled out automatically. If the IP address is not set automatically, you can enter it manually.
- Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster that is exposed to the internet will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.

Now, create two records of type A in the DNS settings at your domain provider:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

:::tip
Working on a local Kubernetes? The host will be set to `local.mogenius.io` if possible. This way, services deployed on your local Kubernetes will receive SSL certificates.
:::

## Troubleshooting
If you're encountering issues with installing the operator, check out common problems in the section [Troubleshooting clusters](./troubleshooting-clusters.md).

## Next steps
Congrats, your cluster is now connected with mogenius 🎉 Go ahead and create a project to deploy some services to your cluster.