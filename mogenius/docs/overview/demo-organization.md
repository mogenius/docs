---
sidebar_position: 3
---

# Demo organization
If you want to explore the mogenius platform before connecting your own Kubernetes, you can use the demo organization. This organization is available to each user after signing up. It is connected to a Kubernetes cluster, has a public demo project with example services, and allows you to experiment with your own services.

## Demo project
The demo project in the organization is a showcase of how services and environments work in mogenius. You can browse through the project, discover service logs, metrics, and settings, and get a feel for the developer experience with mogenius. This project is view-only, so you won’t have permissions to create, edit, or delete services. If you’d like to explore service deployments, you can create your own project within the demo organization.

## Creating your own project
The demo organization allows you to create one additional project. On the project overview, use the + icon in the top right corner to add a new project. Select the cluster from the dropdown and enter a name for your project. In this project, you can deploy services from git repositories, container registries, or templates. Our guides in the section [deploying applications](../deploying-applications/index.md) will walk you through the different options.

## 30-minute reset
The purpose of the demo organization is to provide an overview and a playground to explore mogenius. Therefore, the organization will reset every 30 minutes to a default state. All projects and services will be deleted. A timer in the header bar counts down to indicate when the next reset will happen.

If you’d like to use mogenius beyond the demo, feel free to create a new organization and connect your own Kubernetes cluster using our free tier. Follow our [quickstart guide](./quickstart.md) for detailed instructions.