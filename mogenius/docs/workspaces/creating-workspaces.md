---
sidebar_position: 1
---

# Creating a workspace

A workspace allows you to group a set of resources from Kubernetes based on namespaces, Helm releases, or labels. With integrated RBAC, monitoring, workload management, and pipeline integrations, workspaces provide self-service capabilities to any team.

## Adding a new workspace

Once a cluster is connected, you can add a new workspace. In your organization, navigate to **Workspaces** and add a new workspace. There's two steps you need to complete:
1. Select the namespaces, Helm releases, or labels, that you want to include in your workspace. They act as filters, so changes to resources inside these filters will be applied to your workspace automatically. You can also skip this step and start with a blank workspace. You can use the built-in tools to create namespaces, deploy Kubernetes manifests, or containers from a registry.
2. Add users, or select them from your organization. You can define their permissions based on pre-defined groups ([Read more about RBAC](members-and-roles.md)).

That's it, your workspace dashboard will be ready immediately. The members you invited will receive an email to join the workspace. You can now start monitoring resources on the cluster, troubleshoot issues, or use built-in [pipeline tools](../deploying-applications/index.md) to create new deployments.