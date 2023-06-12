---
sidebar_position: 1
---

# Deploy from a repository

mogenius has an integrated CI/CD pipeline which you can use to build and deploy applications right from Github or Gitlab. mogenius will also keep your service up to date, automatically deploying updates of your application with each commit that you perform.

**Prerequisites for deploying from a repository**
- An account at [Github](https://github.com) or [Gitlab](https://gitlab.com)
- A git repository
- A `Dockerfile` in your git repository

## Create a service
In a project click "+ Add" on your dashboard or inside a stage. From the dropdown select "Bring your own code" and on the next page fill in the required fields.

### Repository
On the service creation page you can choose which type of repository you want to deploy. You can deploy a public repository by setting the repository toggle to "public". Paste a repository URL (.git) and select the desired branch. This works with Github, Gitlab, or Bitbucket.

If you want to deploy a private repository, you need to connect your Github or Gitlab account. You can also use an access token for each of the platforms. This method also allows you to connect to a self-hosted Gitlab instance.
Select the integration method and authorize the connection. Once you've completed this step, the user interface will refresh and you will see several options to connect with a repository from your git host account.

Now choose the repository from the dropdown menu that you want to deploy. Select the branch in your repository and the stage in your project that you want to use.

Check the fields "Dockerfile name" and "Docker context". Per default they are set to "Dockerfile" and " . " which means that mogenius expects the Dockerfile in the repository to be named as such and to sit at root level. "Dockerfile name" defines the path where the Dockerfile is located in the repo. For example, if your Dockerfile is located in the folder 'frontend' you should enter 'frontend/Dockerfile'.

:::caution
For security reasons we don't allow running a Docker image as root user. You will always need to set a user in your Dockerfile, otherwise the service will not be deployed. In most cases the standard unix users will work, see our example for the Svelte template as a reference.
:::

### Ports
Determine the ports that your application uses. mogenius supports HTTPS, TCP and UDP. Use the setting "Expose" to make your application available outside of your project through the specific port.

### Environment variables
This is an optional setting which depends on the application you want to deploy. Read more about [environment variables](#environment-variables).

### Resource limits
Next you can set the resource limits for your service. By default we set some minimum recommendations but you will probably need to adjust them to the specific requirements of your application. Note that you can always change these settings later.

### Create and deploy
Now just click "Create Service" and your repository will be built and deployed as a service to your project. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your service by accessing it via it's hostnames. You will find the internal and external hostnames on your service page.



