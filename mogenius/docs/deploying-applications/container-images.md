---
sidebar_position: 2
---

# Container images

You can deploy container images with mogenius from any public or private container registry. To get started, click "+ Create" on your dashboard or inside an environment to create a new service with the type "Container image."

On the following page set the container image you want to deploy. Here's how the form field works:

- By default, we use the Docker registry. Just enter the image name and the tag you want to use, e.g. nginx:latest.
- To use a different registry, specify the full path to the image (e.g. ghcr.io/nginx:latest).
- In the drop-down menu, you can select container images in mogenius that are based on previous builds. Whenever a build is completed in the CI/CD pipeline of any project you have access to, that container image can be selected from the dropdown menu. This is useful when working with the same service across multiple projects for faster and more efficient deployment.

After you define the container image, there are several optional settings.

- Name, and environment that you want to use.
- Enter a container image command that will be executed during deployment.
- Create a repository secret if the targeted container registry requires authentication.
- Define command arguments to be executed in your container.

Once you confirm, the service will be created in stopped state. You can now review and add your service settings before deploying it.

## Review and deploy

The following settings are available to your service. You'll find additional information on the respective pages.
- [Resource limits](../development/resources.md): Define the maximum resources your service can consume on the cluster.
- [Variables](../development/environment-variables.md): Set environment variables, secrets, volume mounts, and connect services via internal hostnames.
- Ports & Domains: Manage ports of your container and define external hostnames.
- [Health Check](../development/health-checks.md): Enable Kubernetes health checks for improved monitoring.
- Replicas: Manually set the number of pods that should start for your container.
- [Autoscaling](../development/autoscaling.md): Enable horizontal pod autoscaling based on CPU or memory load.
- Deployment strategy: Set up zero-downtime deployments.

Once you have made the settings, click "Create service" and your service will be deployed from the container image.

## Deploying from a private registry

If your container image requires authentication you can pass the connection details with a repository secret, so that mogenius can access the private repository and deploy the image.

When creating a container image, click "Create new secret". This will create a new secret in your key vault. Enter a name for your secret and pass the following string as value:

```
{"auths":{"your.private.registry.example.com":{"username":"janedoe","password":"xxxxxxxxxxx","email":"jdoe@example.com","auth":"c3R...zE2"}}}
```

The placeholders must be replaced by the access credentials of your private image repository. You can retrieve your auth key with two steps:

- In a terminal perform a `docker login` on your repository
- Execute `cat ~/.docker/config.json`

You will get a result similar to this.

```jsx title="cat ~/.docker/config.json"
{
    "auths": {
        "https://index.docker.io/v1/": {
            "auth": "c3R...zE2"
        }
    }
```

Now you can fill in the authorization key in the connection string and create the secret. After you fill in the remaining service settings, click "Create service" and mogenius will deploy the private container image.
