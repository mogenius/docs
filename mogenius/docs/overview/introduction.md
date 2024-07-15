---
sidebar_position: 1
slug: /
---

# Welcome

Welcome to the mogenius documentation hub, your comprehensive resource for setting up and utilizing mogenius as your Internal Developer Platform.

## What is mogenius?

![enter image description here](https://imagedelivery.net/T7YEW5IAgZJ0dY4-LDTpyQ/93a77f3d-c1bc-4ac4-1c0d-739700d78400/public)

mogenius empowers you to establish platform engineering and an Internal Developer Platform, offering intuitive self-service environments for development teams to deploy, monitor, and log their applications in Kubernetes clusters on any infrastructure. To learn more about mogenius, please visit our [website](https://mogenius.com).

:::tip
**Read our [quickstart guide](./../overview/quickstart.md) to set up mogenius and get started.**

**Or dive into [how mogenius works](../overview/how-mogenius-works.md) for a comprehensive overview.**
:::

## The mogenius documentation

This documentation hub serves as a resource for getting started, utilizing the platform's features, and exploring tutorials covering entire workflows.

## mogenius for DevOps and Developers

With mogenius, developers can work easily and safely with Kubernetes, without constant DevOps support. The platform provides developers with workspaces that abstract complexity, implement policies and guardrails, and automate deployments. mogenius therefore helps DevOps to reduce support overhead, ensure safe Kubernetes operations, and improve developer adoption.

**Cloud-agnostic operator**  
mogenius seamlessly integrates with Kubernetes clusters on any infrastructure, including cloud providers, on-premise, or local environments. The implementation is simple by installing the mogenius operator on Kubernetes using Helm. [Read more](../cluster-management/installing-mogenius.md)

**Instant developer self-service**  
Once connected to a cluster, mogenius offers developers an intuitive environment for deploying their projects via a user-friendly UI or API. Dedicated resources, namespaces, integrated CI/CD, and a service catalog of reusable components ensure smooth operations on your infrastructure.

**Guardrails and limits**  
Each project in mogenius has built-in guardrails to maintain safe operations. Environments are isolated via namespaces and network policies. Additionally, DevOps can enforce best practices like resource limits, security contexts, and more.

**Automated pipelines on Kubernetes clusters**  
With mogenius, deploying applications on any Kubernetes cluster takes just minutes. Developers can easily connect their repositories (e.g., GitHub, GitLab, or container registries), and the pre-configured pipeline takes care of the rest. If you prefer using your own pipeline instead, you can easily integrate it.

**Templates**  
With the template library teams can pre-define services to reduce pitfalls of service configurations, to promote best practices, and to set standards across teams. You can create templates with boilerplate repositories, public, or private container images.

**Monitoring and logging**  
mogenius offers aggregated monitoring of all service and resource metrics, traffic analytics, and consolidated build, deployment, and application runtime logs. Developers can independently troubleshoot applications with real-time pod logs, Kubernetes events, and metrics, all without direct access to Kubernetes.

**Invite team members and assign roles**  
Invite team members to collaborate on projects or organizations, granting them specific access rights such as viewing, editing, or admin roles. Control user permissions to ensure efficient collaboration.

**Harness Kubernetes for your developers**  
mogenius acts as a lightweight yet powerful tool, simplifying Kubernetes usage for developers. Onboarding is quick, enabling everyone on your team to leverage the full potential of Kubernetes without the need for expertise in writing YAML or aggregating logs. Experience minimal overhead while retaining complete control over your clusters.


## How to contribute

The mogenius documentation is open-source and based on Docusaurus. You can contribute by editing or creating content within the documentation. Simply create a pull request on [**Github**](https://github.com/mogenius/docs) with your suggested changes. We appreciate your contributions!
