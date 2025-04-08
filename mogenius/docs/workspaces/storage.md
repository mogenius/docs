---
sidebar_position: 7
---

# Storage

mogenius has a built-in storage solution based on NFS storage. This allows you to persist applications and to store assets and data from your applications. The solution is designed to achieve persistency for your services without the overhead of managing a storage solution. This setup is not recommended for heavy workloads, or large production setups. In this case we recommend to implement your own storage solution depending on your requirements.

To use mogenius NFS just open the **Storage** section in your workspace and create a volume. This will deploy an NFS server on your Kubernetes cluster. The NFS supports ReadWriteMany which allows you to access a volume from each pod in the namespace.

Now that you've created a volume you can start using storage with your applications. In your application settings go to **Volume mounts** and add a new volume. Define or create a folder inside your volume and enter the path in your container that should be mounted.

In your storage browser you can then see and manage all the application data that was stored.