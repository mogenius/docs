---
sidebar_position: 4
---

# How mogenius works
mogenius acts as a layer on top of Kubernetes that integrates with your infrastructure and existing dev tools. The platform serves teams in three core functions:
- Creating self-service environments for developers
- Implementing pre-configured guardrails, like namespace provisioning and resource limits
- Managing Kubernetes clusters across multiple cloud environments

The following graphic visualizes how mogenius integrates with your infrastructure on a high level:

![mogenius platform](https://api.mogenius.com/file/id/0ad44b42-eacc-465a-824f-f494261fe0b2)

## The mogenius operator
mogenius integrates with Kubernetes clusters through our operator that is installed on the cluster via `helm`. During the installation a new `mogenius` namespace is created that holds all services. You can configure which services should be installed in your mogenius cluster administration. Once the installation is finished the operator communicates with the platform through a TCP connection.

## The mogenius platform
The mogenius platform orchestrates multiple clusters and allows you to manage Kubernetes resources, workloads and deployments through UI and API. The platform serves as a management layer to create projects for dev teams in your organization. It streamlines the entire workflow to create, manage, scale and monitor container applications on Kubernetes, in an automated and developer-friendly way.

## What makes this powerful?
mogenius is an internal developer platform that you can spin up in minutes. The intuitive developer experience enables your teams to utilize Kubernetes at scale, without deep training, onboarding and overhead. While abstracting complexity, the operator approach allows you to run mogenius on any Kubernetes cluster, even on-premise. This way, the platform adapts to sophisticated infrastructures and you remain flexible without vendor lock-in.