---
sidebar_position: 3
---

# Deploy a template

The template library contains a wide range of templates to deploy pre-configured services, like databases, frameworks, backend or monitoring tools, and many more. In your organization you can also create [custom templates](../templates-and-services/creating-templates.md), that are available within each project in your organization. To deploy a service template use the `Create` button on your dashboard or environment.

Enter a name for your service and select your template from the dropdown menu. The list contains public as well as custom templates and you can use text search to find your desired template.

When selecting templates you will encounter two types of forms:
- Template container images
- Template repositories

For container images you will see that an image and tag are pre-defined. For template repositories a git integration is required. Select the type of your git integration (Github, Gitlab, or Access Token) and authorize the connection with your git host. You'll then be asked to create a new repository. mogenius will push the boilerplate code from the template to this repository.

Once you confirm, the service will be created in stopped state. You can now review and modify your service settings before deploying it. Templates usually have a pre-defined set of settings that should work for the start.

## Review and deploy

The following settings are available to your service. You'll find additional information on the respective pages.
- [Resource limits](../development/resources.md): Define the maximum resources your service can consume on the cluster. Templates usually have default settings for the start that you can modify later.
- [Variables](../development/environment-variables.md): Set environment variables, secrets, volume mounts, and connect services via internal hostnames. Some templates require you to provide values for certain environment variables and secrets, such as a database password.
- Ports & Domains: Manage ports of your container and define external hostnames. 
- [Health Check](../development/health-checks.md): Enable Kubernetes health checks for improved monitoring.
- Replicas: Manually set the number of pods that should start for your container.
- [Autoscaling](../development/autoscaling.md): Enable horizontal pod autoscaling based on CPU or memory load.
- Deployment strategy: Set up zero-downtime deployments.

Once you have made the settings, click "Create service" and your service will be deployed. If your service is based on a repository, a build will be triggered first to create the container image before it is deployed.
