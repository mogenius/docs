---
sidebar_position: 7
---

# Health checks

Health checks are a Kubernetes-native feature to monitor if the application in your container is responding. They can serve two main use cases:
- Check if your application is healthy: Your container can be running but the application might not ready yet to receive traffic.
- Ensure smooth zero-downtime deployments: Kubernetes will only send traffic to healthy applications.

## Concept
[Kubernetes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) has several features to check if an application is healthy. mogenius uses a combination of these methods to achieve a simple but valuable health check feature:
- `Startup probes` are used to check if an application is taking an unusual period of time to start.
- `Liveness probes` help to restart a container if the application reached a broken state.
- `Readiness probes` check if the application is temporarily unavaible.

Each of these probes rely on a simple HTTP response on the endpoint /healthz in your application.

## Prerequisities
Before activating health checks in your mogenius service, make sure that you configured your application to send a HTTP response on the endpoint /healthz. Depending on the response your service will reach one of two states:
- `Healthy`: Response in range of 200 - 300
- `Unhealthy`: Response outside the range

## Setup
Once your /healthz endpoint is configured, you can activate health checks in mogenius. On your service page, go to General settings. Activate the toggle "Health checks." Confirm and save your settings to activate health checks.

## Implications
Your /healthz endpoint will be targeted every five to ten seconds. If the response is unhealthy you will be notified through the state on your dashboard and service page.

If rolling deployments are configured and you have at least three instances of your service running, health checks will ensure a zero-downtime deployment. Kubernetes will redeploy each instance during the deployment. As long as the new pods are unhealthy, traffic will not be directed to them. Once the health check is successful on the new pods traffic will be redirected and the old pod will be killed.