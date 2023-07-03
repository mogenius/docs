---
sidebar_position: 4
---

# Resources

mogenius allows you to manage cloud resources on two levels with the aim to give you control and transparency over the resources that your projects and services consume across clusters.

## Project resources
Each project has a set of resources assigned by a project admin. They can be set for CPU, RAM, storage and traffic and they act as a budget for each project. They define how many resources can be allocated to services inside the project at maximum. This way, you remain control over resources on your cluster and it allows you to track resource efficiency and usage across projects. Project resources can be changed at any time.

## Service limits
When creating a service you can set resource limits in the service settings. Those are Kubernetes limits defined for each pod of your service and they define the maximum resources your service can consume at any time. Therefore, on average actual resource consumption is much lower than the limits.

If you're working with multiple instances inside a service the resource limits are multiplied by the number of instances. Note that you can never allocate more resources to a service than available by your project resources. If a service requires more resources than available, you should increase the project resources or reduce limits in other services on the project.