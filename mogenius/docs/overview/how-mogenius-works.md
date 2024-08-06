---
sidebar_position: 5
---

# How mogenius works
mogenius acts as a layer on top of Kubernetes, integrating seamlessly with your infrastructure and existing development tools. The platform serves teams in three core functions:
- Creating self-service environments for developers
- Implementing pre-configured guardrails, such as namespace provisioning, resource limits, and policies.
- Automating deployments and workload configuration.

The following graphic provides a high-level visualization of how mogenius integrates with your infrastructure:

![mogenius platform](https://imagedelivery.net/T7YEW5IAgZJ0dY4-LDTpyQ/8acd32ec-56e3-4c7e-daca-b80ab7357200/jpeg)

## The mogenius operator
mogenius connects to Kubernetes clusters through our operator, which is installed on the cluster using `helm`. It establishes an outbound TCP connection to the mogenius platform. Once connected, the operator also allows you to install baseline components on your cluster, like ingress controller, cert manager, and more.

## The mogenius platform
The mogenius platform orchestrates multiple clusters and enables you to manage Kubernetes resources, workloads, and deployments through its user interface (UI) and API. Serving as a management layer, the platform facilitates the creation of projects for development teams within your organization. It streamlines the entire workflow for creating, managing, scaling, and monitoring container applications on Kubernetes in an automated and developer-friendly manner.

## What makes this powerful?
mogenius is an internal developer platform that can be set up within minutes. Its intuitive developer experience empowers teams to leverage Kubernetes at scale without the need for extensive training, onboarding, or excessive overhead. By abstracting complexity, mogenius follows an operator approach, enabling you to run it on any Kubernetes cluster, including on-premises environments. This flexibility allows the platform to seamlessly adapt to sophisticated infrastructures while avoiding vendor lock-in
