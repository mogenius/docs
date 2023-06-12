---
sidebar_position: 3
---

# Basic concepts

The mogenius platform consists of several organizational levels that are designed to fit well into different workflows and use cases for DevOps, developers and teams. Here's a summary on the account hierarchy in mogenius:

![cloudspace structure](https://api.mogenius.com/file/id/a89ae14f-8a37-4a05-999e-f6b80380a877)

## Organizations
Organizations are on the highest level in the mogenius platform. Each organization has it's own members list, billing and settings. Clusters, projects and all other resources can be shared inside an organization but not across different organizations. Therefore, organizations are useful to represent isolated groups of people. You may create multiple organizations if you're working with large, independant departments, subsidiaries or with clients that should never see each other's resources.

## Clusters
Clusters in mogenius are control planes for Kubernetes clusters. They offer several settings to manage the Helm installation of mogenius on Kubernetes, to set policies and controls for projects, and to monitor resources and projects on the cluster.

## Projects
All your environments and services are organized in projects. Each project has members and roles, dedicated resources on a cluster and isolated namespaces for every stage. A project is therefore the ideal space to organize applications for a specific team, a software project, or other use cases that require an isolated environment. You can have multiple projects on a single cluster, and members of an organization can be invited across several projects.

## Stages
Stages in mogenius are Kubernetes namespaces and they are configured automatically when you add a stage to a project. You can use stages to reflect your Git flow in mogenius, so that you're automatically deploying service with each commit to a branch.

## Services
With services you're deploying, monitoring and scaling your applications on mogenius. Services can be created from Git repositories, container images, templates, Docker compose, Helm charts, or other sources (coming soon!). Kubernetes-wise, a service abstracts a couple of resources on a cluster so that developers can focus on deploying their application without thinking too much about Kubernetes. With each service on mogenius, the platform automatically handles workloads like pods, deployments, container, ingress and more.