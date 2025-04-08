---
sidebar_position: 10
---

# Autoscaling

If you want your service to adapt to higher short-term loads dynamically and efficiently, you can enable autoscaling instead of setting the number of replicas manually. mogenius uses the Kubernetes resource [HorizontalPodAutoscaler](https://kubernetes.io/de/docs/tasks/run-application/horizontal-pod-autoscale/) and automatically configures it based on your service settings.

## Configuration

On your service page navigate to settings and open the tab `General`. Activate the toggle for `Autoscaling` and the configuration options for your autoscaler will be displayed.

:::info
The Autoscaler operates based on the percentage of resource consumption relative to the resource limits. If you haven't defined resource limits for your service, the Autoscaler cannot be enabled.
:::

Configure the settings of your Autoscaler:
- Limit of pods: Defines the maximum number of pods that the autoscaler will spawn.
- CPU threshold: The percentage of CPU consumption at which an additional pod will be created.
- RAM threshold: The percentage of memory consumption at which an additional pod will be created.

Next to the thresholds, you’ll see the current consumption, which helps you define an appropriate level for the threshold. The resource consumption is checked every 15 seconds, and a quotient is calculated across all pods to determine if additional pods should be created. You can read about the algorithm in detail in the official [Kubernetes documentation](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/#algorithm-details).

## Project limits and cluster resources

:::warning
Please be aware that autoscaling carries risks. If thresholds and the maximum number of pods aren’t set to reasonable levels, your cluster can experience resource bottlenecks. We recommend testing your settings with a low maximum pod count to monitor the autoscaling behavior before increasing the maximum pod settings.​
:::

If your project has resource limits enabled at the project level, it’s possible that the autoscaler might exceed these limits. mogenius doesn’t prohibit this, but you’ll see a warning next to the maximum pod setting if the available project resources wouldn’t support this setting. Note that overcommitment is possible but carries the risk of resource bottlenecks if the nodes in Kubernetes can’t cover the resource requirements of additional pods created by the autoscaler.