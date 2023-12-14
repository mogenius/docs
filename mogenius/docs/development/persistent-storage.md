---
sidebar_position: 3
---

# NFS Storage

mogenius has a built-in storage solution based on NFS storage. This allows you to persist applications and to store assets and data from your applications. The solution is designed to achieve persistency for your services without the overhead of managing a storage solution. This setup is not recommended for heavy workloads, or large production setups. In this case we recommend to implement your own storage solution depending on your requirements.

To use mogenius NFS just open the Storage section in your project and create a volume. This will deploy an NFS server on your Kubernetes cluster. The NFS supports ReadWriteMany which allows you to access a volume from each pod in the namespace.

Now that you've created a volume you can start using storage with your applications. On your service page go to env vars and create a new environment variable with the type "Volume mount." Define or create a folder inside your volume and enter the path in your container that should be mounted.

Additionally, you always need to change the owner to a non-root user by defining a `CHANGE_OWNER` environment variable. For security reasons it is not possible to access storage of a service as the root user. The `CHANGE_OWNER` variable should look something like this.

In your storage browser you can then see and manage all the application data that was stored.