---
sidebar_position: 1
description: Connect your own Kubernetes cluster by installing the mogenius operator on the cluster.
---

# Installing mogenius

mogenius allows you to connect with Kubernetes clusters by installing the mogenius operator on a cluster. Once installed, you can start deploying projects and manage Kubernetes workloads through the mogenius platform. To begin the installation process, you'll first need to create a cluster in mogenius.

## Prerequisites
To successfully complete the next steps, you will need the following:
- A domain you own, to which you can add a DNS record.
- A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work.
- A working installation of `kubectl`.
- A working installation of `Helm`.
- Kubernetes cluster admin permissions

## Resource requirements
The mogenius operator consists of several pods that will be deployed to your Kubernetes cluster. It will require CPU and GB RAM.

## Create a cluster in mogenius

In your organization open "Clusters" and select "Create cluster." Fill in the form fields:
- Display name: It will only be used to display your cluster in mogenius.
- Cluster name: The actual name of the Kubernetes cluster that you would like to connect. This must match your k8s cluster name.
- Cluster type: Select from the dropdown which type of Kubernetes cluster you're using.
- Hit "Create now".

:::info
This will create a management pane for a Kubernetes cluster in mogenius. It will not create an actual Kubernetes cluster.
:::

## Retrieve the Helm chart

In your mogenius cluster, open the tab "Connect." This is where you can manage your Helm installation for the mogenius operator. You can copy the commands to install, upgrade, and delete the Helm chart from your Kubernetes cluster. The Helm chart can be modified depending on your individual setup. Under cluster options, set the services that should be installed together with the mogenius operator. If your cluster already has one or more of these services, deactivate them.

The install command will look like this.

```jsx title="mogenius operator Helm install"
kubectl create namespace mogenius
helm repo add mogenius https://helm.mogenius.com/public
helm repo update
helm install mogenius mogenius/mogenius-platform -n mogenius \
--set namespace="mogenius" \
--set global.cluster_name="YOUR_CLUSTER_NAME" \
--set global.api_key="YOUR_MOGENIUS_API_KEY" \
--set global.namespace="mogenius" \
--set global.cluster_provider="YOUR_CLUSTER_TYPE" \
--set k8smanager.enabled=true \
--set metrics.enabled=true \
--set traffic-collector.enabled=true \
--set pod-stats-collector.enabled=true \
--set ingress-nginx.enabled=true \
--set ingress-nginx.defaultBackend.image.registry=ghcr.io/mogenius \
--set ingress-nginx.defaultBackend.image.image=mo-default-backend \
--set ingress-nginx.defaultBackend.image.tag=latest \
--set ingress-nginx.defaultBackend.enabled=true \
--set certmanager.enabled=true \
--set cert-manager.startupapicheck.enabled=false \
--set certmanager.namespace="mogenius" \
--set cert-manager.namespace="mogenius" \
--set cert-manager.installCRDs=true
echo "Wait 120 sec ... until all services have been started ..." ; sleep 120
helm install mogenius-issuer mogenius/mogenius-cluster-issuer --set global.clusterissuermail="YOUR_EMAIL_ADDRESS"
```

## Install the operator on Kubernetes

Copy the install command to your clipboard. Switch to a console and connect with your Kubernetes cluster. Paste the install command to the command line and hit Enter. The installation will begin, and after a few seconds, the mogenius operator and all accompanying services will be running.

You can monitor the installation in mogenius. Once the installation was successful, your cluster will switch to the state `Connected`. As long as no connection to the operator could be established the state will be `Disconnected`.

If you're encountering issues with installing the operator, check out common problems in the section [Troubleshooting clusters](./troubleshooting-clusters.md).

## Next steps
Congrats, your cluster is now connected with mogenius 🎉  
To complete the setup, continue with the section [Cluster settings](./cluster-settings.md).