---
sidebar_position: 9
description: Here's a list of common issues with clusters on mogenius and how to fix them.
---

# Troubleshooting clusters

Here's a list of common issues that can occur when connecting clusters with mogenius. If your problem is not on the page, please contact [support](mailto:support@mogenius.com).

## Installation failed: clusterroles.rbac.authorization.k8s.io
If installing the mogenius operator fails with an error message related to cluster roles and permissions, it is likely that your current user doesn't have sufficient permissions to perform the installation. Per default, the installation requires the clusterAdmin role.

:::info
If you can't get access to this role by company policies please contact our [support](mailto:support@mogenius.com). Depending on your infrastructure setup the operator can be customized with less permissions required.
:::

## No connection to mogenius
The installation of the operator was completed, and the pod `mogenius-k8s-manager` is running on your cluster. However, the cluster status in mogenius is either disconnected or pending. To troubleshoot, please check the logs of the pod in Kubernetes. Here are some scenarios that might be occurring and suggestions on how to address them:
- **Unauthorized Errors: **If the pod log is showing repeating unauthorized errors and no connection can be established, it could be due to the cluster having been connected to mogenius before, and the platform API is rightfully rejecting the unknown connection. In this case, try using the Reset MFA-ID option in your cluster settings. If this option isn’t available, consider deleting the cluster in mogenius, uninstalling the operator, and restarting the installation workflow.
- **Operator Connection Issues:** If the operator cannot send traffic outside of the cluster, this could indicate a problem with the cluster’s internet connection. Check your network settings and ensure that there are no restrictions preventing outbound connections.
