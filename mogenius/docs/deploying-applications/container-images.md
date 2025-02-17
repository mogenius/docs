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

If your container registry requires authentication you can pass the connection details with a `Docker config.json` stored in a secret. This allows mogenius to access the private repository and deploy the image.

**Setting up the secret in mogenius**
1. In your project, open the Key Vault and add a new secret.
2. Enter a name and paste the content of your `Docker config.json` as the value.
3. Save your secret.
4. When deploying a new service from a container image, select the secret from the dropdown **Container Repository Secret**.

Below, you'll find different methods for retrieving your `config.json`.

### Defining the config.json manually 
In general, the `config.json` uses the following structure. Depending on your registry's authentication method, the necessary parameters must be provided.

```json
{
    "auths": {
        "<your-registry-url>": {
            "username": "<username>",
            "password": "<password>",
            "email": "<email>",
            "auth": "<auth>"
        }
    }
}
```

### Retrieving the config.json via Docker login
If you can authenticate with the registry locally, you can copy the `config.json` from your local login instead of defining it manually.
1. In a terminal, perform a `Docker login` on your registry.
2. Execute `cat ~/.docker/config.json`.
3. Copy the output - this is the value you need to store in mogenius as a secret.

### Authenticating with Google Cloud Artifact Registry via Service Account

If you're using GCP Artifact Registry, you can authenticate using a service account. The credentials for your GCP service account can be downloaded as a JSON key file. First, set up your service account and retrieve the JSON key file following the [official GCP documentation](https://cloud.google.com/artifact-registry/docs/docker/authentication#json-key).

Then, set up your `config.json` with the following steps:
1. Encode the content of your JSON key file in base64.
2. The registry expects credentials via config.json in the format `"auth":"username:password"`, encoded in base64. As a username you'll use `_json_key_base64`. Now, encode `_json_key_base64:<your base64-encoded json key file>` in base64.
3. This is the `auth` value that you can use to define the config.json in the following format.

```json
{
    "auths": {
        "<YOUR-GCP-REGION>-docker.pkg.dev": {
            "auth": "<auth>"
        }
    }
}
```

Now you can store the `config.json` in a secret in mogenius and deploy the container image from your Artifact Registry.

