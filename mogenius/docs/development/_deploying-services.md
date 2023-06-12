﻿# Deploying services

Services are the a core element of mogenius, as they are the tool to start your application in the cloud. We will show you how to create a service in your cloudspace so you can start working on your application right away.

## How to create a service

There are several entry points to create a new service. Either you open the service library via the main navigation or you click on "Add service" in one of your stages. You will then see a number of available services to choose from. 

**There are now two ways to create a service**

[Deploy from the service library](#deploy-from-the-service-library)  
**or**  
[Deploy your own code using Docker](#deploy-your-own-code-using-docker)

### Deploy from the service library

The service library contains a wide range of templates to deploy pre-configured services, like databases, frameworks, backend or monitoring tools, and many more. To deploy a service template, select your desired application type from the overview and click "Add Service."

![enter image description here](https://api.mogenius.com/file/id/a10b2299-99a1-4b18-82a7-097df184bfaa)

First, we need to connect your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account.
Next, you need to create a new repository by clicking the “Add repository” button. Select a name for the new repo and create it. The repo is used to store necessary application files. In many cases this can be just a Dockerfile with reference to the Docker image of the service and the specific version. This allows you later to apply settings different from the service template. If you deploy a framework, the repo will hold all the project files which allows you to start developing immediately.

You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources. You can always access these settings later.

![enter image description here](https://api.mogenius.com/file/id/e99ae0ea-d2ab-4a86-857b-00430b9a5c40)

Now, simply click "Create Service". Your service template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your service at the hostname. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/3a8c6249-53d0-468e-a089-987cd7861547)

That’s it! You have created your first service and it will be available to access by other services via the hostname that has been assigned to your service. Note that mogenius comes with a [built in CI/CD pipeline](./cicd-pipeline.md) so you can start working with the repository right away.

### Deploy from an existing repository

Using the service type "Bring your own code" allows you to deploy any existing repository that contains a Dockerfile.

![docker](https://api.mogenius.com/file/id/0cc4af4e-3076-41a3-848f-8af961b15a12)

**Repository**  
On the service creation page you can choose which type of repository you want to deploy. You can deploy a public repository by setting the repository toggle to "public". Paste a repository URL (.git) and select the desired branch. This works with any platform that supports Git URLs (GitHub, Gitlab etc.).  
If you want to deploy a private repository, you need to connect your GitHub account. Click on "Continue with Github” which will ask you to grant permission to access your Github repositories. You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

Now choose the repository from the dropdown menu that you want to deploy.
Select the branch in your repository and the stage in your cloudspace that you want to use. 

Check the fields "Dockerfile name" and "Docker context". Per default they are set to "Dockerfile" and " . " which means that mogenius expects the Dockerfile in the repository to be named as such and to sit at root level. If your Dockerfile has a different name or is located under a different path in the repository, you need to edit the respective setting.

:::caution
For security reasons we don't allow running a Docker image as root user. You will always need to set a user in your Dockerfile, otherwise the service will not be deployed. In most cases the standard unix users will work, [see our example](https://github.com/mogenius/svelte-template) for the Svelte template as a reference.
:::

**Ports**  
Determine the ports that your application uses. mogenius supports HTTPS, TCP and UDP. Use the setting "Expose" to make your application available outside of your cloudspace through the specific port.

**Environment variables**  
This is an optional setting which depends on the application you want to deploy. [Read more about environment variables](./environment-variables-and-secrets.md). 

**Resource limits**  
Next you can set the resource limits for your service. By default we set some minimum recommendations but you will probably need to adjust them to the specific requirements of your application. Note that you can always change these settings later. 

**Custom domain**  
Every service is available through a mogenius.io domain automatically. You can use a custom domain if you like. Use this setting to enter your own domain. [Read more about configuring your own domain](./../getting-started/domains.md#use-your-own-domain).

Now just click "Create Service" and your repository will be deployed as service to your cloudspace. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your service.

That’s it! You have created your own service and it will be available to access by other services via the hostname that has been assigned to your service. The built in CI/CD pipeline of mogenius will now listen to any changes of the connected repository and deploy them directly in your cloudspace. Read more about this [here](./../development/cicd-pipeline.md). 

### Deploy a container image

You can use existing container images to deploy a service on mogenius. This way, the service is deployed directly from a container registry, instead of the mogenius CI/CD pipeline.

**How to deploy**  
When adding a service, select "Container image".  
On the following page set the container image you want to deploy. Here's how the form field works:
- By default, we use the Docker registry. Just enter the image name and the tag you want to use, e.g. nginx:latest.
- To use a different registry, specify the full path to the image (e.g. ghcr.io/nginx:latest).
- In the drop-down menu, you can select container images in mogenius that are based on previous builds. Whenever a build is completed in the CI/CD pipeline of any cloudspace you have access to, that container image can be selected from the dropdown menu. This is useful when working with the same service across multiple cloudspaces for faster and more efficient deployment.

After you define the container image, there are several optional settings.
- Enter a container **image command** that will be executed during deployment.
- Create a **repository secret** if the targeted container registry requires a secret.
- Define **command arguments** to be executed in your container.

Next, it is necessary to define the [resource limits](../cloud-management/resource-management.md#allocating-resources-when-you-create-a-service) of your service as well as the port. Optionally, you can add [environment variables](environment-variables-and-secrets.md) to your service.  

Once you have made the settings, click "Create service" and your service will be deployed from the container image.

**Deploying a private container image**

If your container image requires authorization you can pass the connection details with a repository secret, so that mogenius can access the private repository and deploy the image.

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

Now you can fill in the authorization key in the connection string and create the secret. After you fill in the remaining service settings, click "Create service" and mogenius will build the private container image.
