---
sidebar_position: 7
description: Here's a list of common issues with clusters on mogenius and how to fix them.
---

# Troubleshooting clusters

Here's a list of common issues that can occur when connecting clusters with mogenius. If your problem is not on the page, please contact [support](mailto:support@mogenius.com).

## Installation failed: clusterroles.rbac.authorization.k8s.io
If installing the mogenius operator fails with an error message related to cluster roles and permissions, it is likely that your current user doesn't have sufficient permissions to perform the installation. Per default, the installation requires the clusterAdmin role.

:::info
If you can't get access to this role by company policies please contact our [support](mailto:support@mogenius.com). Depending on your infrastructure setup the operator can be customized with less permissions required.
:::