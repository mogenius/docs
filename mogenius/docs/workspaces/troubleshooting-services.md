---
sidebar_position: 12
---

# Troubleshooting services

This is a list of potential issues that you might encounter when running your tech stack on mogenius. It is being updated on a regular basis. If you're facing a problem that is not on the list, please contact [support](mailto:support@mogenius.com).

## Pod crash, CrashLoopBackoff and Restarts
If your application is crashing frequently there's several indicators to look out for. On your logs page a restart counter, e.g. (3) shows that the container of this pod restarted three times after an error. In your service's events the error CrashLoopBackoff or the message "Back-off restarting failed container" means that the container crashed and is restarting. This can have several reasons:
- The service has not enough resources. You might want to check the resource limits in your service settings. A common indicator for this is an interrupted log of your pod without an error message before the crash.
- Configuration errors in your application can cause the container to crash. Check your service logs for errors in the logs.
- The startup process failed due to another service. For example, if your service requires a database connection, ensure that the database is accessible to your service, that the database is ready to accept connections, and that you have provided the correct connection details as environment variables in your service settings.

## Ephemeral local storage usage exceeds the total limit of containers
```jsx title="Example in deployment logs"
[Evicted]  Pod ephemeral local storage usage exceeds the total limit of containers 500Mi.
```
If your application is crashing and restarting with the message above prompted in the Deployment logs it indicates that the limit of ephemeral storage is set too low. Try increasing it in the resource settings of your service, by adjusting the limit for "Temp. storage" incrementally. After saving your settings the service will restart. Wait until the new instance of your service is ready and then check if the error still occurs.

## Insufficient ephemeral storage
```jsx title="Example in deployment logs"
0/2 nodes are available: Insufficient ephemeral storage.
```
This issue results in failing deployments due to insufficient ephemeral storage on the Kubernetes cluster. It usually means that your service ran out of ephemeral storage on the node. This can be solved by reducing the temp. storage of other services on the cluster. In the service settings, go to Resources and decrease the temp. storage limit in order to free more ephemeral storage for the service that is facing the deployment issues. If you don't have enough ephemeral storage overall you might want to increase the resources on the node pool.
Read more about ephemeral storage in Kubernetes [here](https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#local-ephemeral-storage).
