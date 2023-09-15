---
sidebar_position: 10
---

# Troubleshooting services

This is a list of potential issues that you might encounter when running your tech stack on mogenius. It is being updated on a regular basis. If you're facing a problem that is not on the list, please contact [support](mailto:support@mogenius.com).

## Default backend on external hostnames
If you're seeing the [mogenius default backend](https://mo1.mogenius.com/) when opening an external hostname of your service it means that the ingress could not resolve the hostname. Here's what you can do:
- Is your service running? On your service page, make sure that the service is not stopped.
- Make sure that the right hostname is set for your service domain (on your service page > Ports & Domain > Custom domain).
- Check your DNS records: Does the record match your cluster's IP address and is the desired hostname included in the scope of your DNS record?
- Verify that your service has an exposed port (on your service page > Ports & Domain > Ports).

## CrashLoopBackoff
The error CrashLoopBackoff in your deployment logs means that the pod crashed on the cluster and is restarting. This can have several reasons:
- The service has not enough resources. You might want to check the resource limits in your service settings.
- Configuration errors in your application can cause the container to crash. Check your service logs for errors in the logs.

## Insufficient ephemeral storage
```jsx title="Example in deployment logs"
0/2 nodes are available: Insufficient ephemeral storage.
```
This issue results in failing deployments due to insufficient ephemeral storage on the Kubernetes cluster. It usually means that your service ran out of ephemeral storage on the node. This can be solved by reducing the temp. storage of other services on the cluster. In the service settings, go to Resources and decrease the temp. storage limit in order to free more ephemeral storage for the service that is facing the deployment issues. If you don't have enough ephemeral storage overall you might want to increase the resources on the node pool.
Read more about ephemeral storage in Kubernetes [here](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage).