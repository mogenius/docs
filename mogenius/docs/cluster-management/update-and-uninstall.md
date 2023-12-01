---
sidebar_position: 6
description: Manage the mogenius operator, run updates and delete it from your cluster.
---

# Update and uninstall
You can manage the installation of your mogenius operator directly from the management pane in mogenius. In the "Settings" and "Connect" sections, you will find several options to update your operator and to upgrade and uninstall the Helm repository.

## Updating the mogenius operator
New versions of the operator are released frequently to deliver additional features and improvements alongside the development of the mogenius platform. Updates to the operator must be installed manually. To do so, open the "Settings" tab in your cluster and scroll down to the update section.

In this area, you can track the following versions:

- Your version: The current version of your operator on the cluster
- Current version: The most recent version available

By clicking the "Update k8s manager" button, your operator will be updated to the current version.

:::info
Updating your operator does not affect the services running on your cluster. However, the operator will restart, resulting in a short connection interruption in which events between the mogenius platform and the cluster may get lost.
:::

## Helm Upgrade
If you have made changes to your cluster settings that impact the operator, such as the cluster type or accompanying platform services (e.g., cert manager, ingress controller, etc.), you can perform a `Helm upgrade` to upgrade your operator. Navigate to the "Connect" tab, and in the code section, switch to "Upgrade." Copy the code and execute it on your Kubernetes cluster.

The upgrade command will look something like this:

```jsx title="mogenius operator Helm upgrade"
helm repo add mogenius https://helm.mogenius.com/public
helm repo update
helm upgrade mogenius mogenius/mogenius-platform -n mogenius \
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
--set ingress-nginx.defaultBackend.enabled=true
```

## Helm uninstall
To remove the mogenius operator from your cluster, use `Helm uninstall`. Head to the "Connect" tab, and in the code section, switch to "Uninstall." Once executed on your Kubernetes cluster, the operator and all accompanying platform services (e.g., cert manager, ingress controller, etc.) will be removed. 

The uninstall command looks like this:

```jsx title="mogenius operator Helm uninstall"
helm uninstall mogenius -n mogenius
helm uninstall mogenius-issuer
```

:::info
Namespaces and services created through projects in the mogenius platform won't be affected by the uninstall. To remove them, you must delete them through the mogenius platform (an active connection to the operator is required).
:::