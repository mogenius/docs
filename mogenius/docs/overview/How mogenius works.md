---
sidebar_position: 4
---

# How mogenius works
mogenius acts as a layer on top of Kubernetes, integrating seamlessly with your infrastructure and existing development tools. The platform serves teams in three core functions:
- Creating self-service environments for developers
- Implementing pre-configured guardrails, such as namespace provisioning and resource limits.
- Managing Kubernetes clusters across multiple cloud environments

The following graphic provides a high-level visualization of how mogenius integrates with your infrastructure:

![mogenius platform](https://api.mogenius.com/file/id/0ad44b42-eacc-465a-824f-f494261fe0b2)

## The mogenius operator
mogenius integrates with Kubernetes clusters through our operator, which is installed on the cluster using `helm`. During the installation, a new `mogenius` namespace is created to house all the services. You can configure the services that should be installed in your mogenius cluster administration. Once the installation is complete, the operator establishes a TCP connection to communicate with the platform.

## The mogenius platform
The mogenius platform orchestrates multiple clusters and enables you to manage Kubernetes resources, workloads, and deployments through its user interface (UI) and API. Serving as a management layer, the platform facilitates the creation of projects for development teams within your organization. It streamlines the entire workflow for creating, managing, scaling, and monitoring container applications on Kubernetes in an automated and developer-friendly manner.

## What makes this powerful?
mogenius is an internal developer platform that can be set up within minutes. Its intuitive developer experience empowers teams to leverage Kubernetes at scale without the need for extensive training, onboarding, or excessive overhead. By abstracting complexity, mogenius follows an operator approach, enabling you to run it on any Kubernetes cluster, including on-premises environments. This flexibility allows the platform to seamlessly adapt to sophisticated infrastructures while avoiding vendor lock-in
