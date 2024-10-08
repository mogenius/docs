﻿---
sidebar_position: 4
---

# Basic concepts

The mogenius platform comprises multiple organizational levels tailored to various workflows and use cases for DevOps, developers, and teams. Here's a summary of the account hierarchy in mogenius:

![cloudspace structure](https://imagedelivery.net/T7YEW5IAgZJ0dY4-LDTpyQ/a81bf0d1-b997-4c43-0059-b17935267400/jpeg)

## Organizations
Organizations are the highest level in the mogenius platform. Each organization has its own member list, billing, and settings. Clusters, projects, and other resources can be shared within an organization but not across different organizations. Organizations are useful for representing isolated groups of people. You can create multiple organizations to accommodate large, independent departments, subsidiaries, or clients who should not have access to each other's resources.

## Clusters
Clusters in mogenius serve as control planes for Kubernetes clusters. They provide various settings to manage the Helm installation of mogenius on Kubernetes, define policies and controls for projects, and monitor resources and projects on the cluster.

## Projects
Projects organize all your environments and services. Each project has its own set of members and roles, dedicated resources on a cluster, and isolated namespaces for each stage. Projects are ideal for organizing applications specific to a team, software project, or any other use case that requires an isolated environment. You can have multiple projects on a single cluster, and members of an organization can be invited to participate in multiple projects.

## Environments
Environments in mogenius correspond to Kubernetes namespaces, and they are automatically configured when you add them to a project. You can use environments to mirror your Git flow in mogenius, so that services are automatically deployed with each commit to a branch.

## Services
Services in mogenius encompass deploying, monitoring, and scaling your applications. You can create services from Git repositories, container images, templates, Docker Compose, Helm charts, and other sources (coming soon!). From a Kubernetes perspective, a service abstracts multiple resources on a cluster, allowing developers to focus on deploying their applications without extensive knowledge of Kubernetes internals. mogenius automatically handles workload management for services, such as deployments, ingress, and more.
