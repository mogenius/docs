---
sidebar_position: 1
---

# Deploy from a repository

mogenius has an integrated build pipeline which you can use to build and deploy applications right from Github, Gitlab, or Bitbucket. mogenius will also keep your service up to date, automatically deploying updates of your application with each commit that you perform on the selected git branch.

**Prerequisites for deploying from a repository**
- An account at [Github](https://github.com), [Gitlab](https://gitlab.com), or [Bitbucket](https://bitbucket.com)
- A git repository
- A `Dockerfile` in your git repository

## Create a service
In a project click "+ Create" on your dashboard or inside an environment. From the dropdown select "Repository" and fill in the form fields on the following view. First, enter a name for your service and select the environment where your service should be deployed.

### Repository
Select the git integration that you want to set up. You can connect to Github or Gitlab using your account from the respective platform. Alternitively, connect via access token from Github, Gitlab, or Bitbucket. You can read more about the integrations and required permissions in the section [Git integration](../development/git-integration.md).

Once your integration is set up, select the repository that you want to use for your service. Then, fill out the additional settings:
- Git branch: Select the branch that should be connected with your service. Whenever a new commit is pushed to this branch, a new version of your service will be built and deployed automatically.
- Dockerfile path: This field defines where the pipeline should expect the Dockerfile in the repository. Per default this is set to a file with the name "Dockerfile" at root level.
- Docker context: The context of your Dockerfile during `Docker build`.

Once you confirm, the service will be created in stopped state. You can now review and modify your service settings before deploying it.

## Review and deploy

The following settings are available to your service. You'll find additional information on the respective pages.
- [Resource limits](../development/resources.md): Define the maximum resources your service can consume on the cluster.
- [Variables](../development/environment-variables.md): Set environment variables, secrets, volume mounts, and connect services via internal hostnames.
- Ports & Domains: Manage ports of your container and define external hostnames.
- [Health Check](../development/health-checks.md): Enable Kubernetes health checks for improved monitoring.
- Replicas: Manually set the number of pods that should start for your container.
- [Autoscaling](../development/autoscaling.md): Enable horizontal pod autoscaling based on CPU or memory load.
- Deployment strategy: Set up zero-downtime deployments.

Once you have made the settings, click "Start" and the pipeline will build the Docker image based on the Dockerfile in your repository. It will be pushed to the container registry that was specified in your cluster settings and then deployed to your Kubernetes cluster. You can monitor each step of the pipeline in the logs tab on your service page.