---
sidebar_position: 1
---

# Quickstart
Deploying your application with mogenius is easy. We'll guide you through the initial steps to launch your services in the cloud, so you can quickly get back to coding.

## 1. Sign up​
First, [sign up](https://studio.mogenius.com/user/registration) by entering your email address and choosing a password. Next, verify your email address and phone number to secure your mogenius account. Once completed, you are ready to create your first cloudspace.

![enter image description here](https://api.mogenius.com/file/id/48f657d6-2032-4b79-95f5-2f15f02e7e4e)
## 2. Create a Cloudspace

Start your first project on mogenius by creating a cloudspace. Give it a name with a maximum of 24 characters, no spaces, or special characters. Click "Create now" and your cloudspace will be created using the mogenius Community Plan. 

![enter image description here](https://api.mogenius.com/file/id/d9210359-7406-42f4-8d8f-854205294ce8)


**🥳 Congratulations on creating your first cloudspace on mogenius!**


## 3. Add your first service

One of the initial tasks is to add services to your cloudspace (e.g. application, database). When you first start, you'll see a pop-up window below. Alternatively, you can add services from your cloudspace dashboard, where you'll also see the available resources in your cloudspace. There are three ways to add services to your cloudspace:

![enter image description here](https://api.mogenius.com/file/id/1d25d25c-2715-4a3e-8201-ec8ceac94cef)

### 1. Start from scratch with a pre-configured template

Choose the second option from the list and select the service you want to deploy from the service library.

![enter image description here](https://api.mogenius.com/file/id/d5662765-de9b-4164-8f55-73e11d424be4)

**Connect Github**

First, connect Github to your mogenius account by following the instructions from Github and authorizing mogenius to access your repositories. Once access is granted, you'll see a repository selector. When creating a service, the config files for that service are moved to a new, empty repository in your Github account, allowing you to begin working on the project immediately. Therefore, as the next step, create a new repository by clicking "+ Add repository."

**General settings**

For now, you can leave all other settings at default and create the service. For more information and advanced settings, read more about [resource management](./../cloud-management/resource-management.md).

That's it!

**⬇️ [Jump to deploying your service](#deploy-your-service)**

### 2. Deploy a repository with a Dockerfile
To launch an application that you have already developed or that is in progress, select the first option 'Deploy a repository with a Dockerfile'. Now, you have two options to connect a repository: via GitHub or through a public repository.

**Connect Github**  
 You need to connect Github to your mogenius account. Follow the instructions provided by Github and authorize mogenius to access your repositories. Once access is granted, you will see a repository selector.

**Use a public repository**
Set the repository toggle to "Public." Now, paste the HTTPS URL of a public repository into the corresponding field.

Select your repository from the dropdown menu or search for it in the input field. Note that mogenius will look for a `Dockerfile` within the specified directory, so ensure that your repository contains one. Once you have selected the repository with a Dockerfile, specify the branch you want to use.

**General service settings**

The form fields, some of which are optional, should be filled in as described below:  

| Input field | Comment |
|---|---|
|Name|The name of your service. This will be used to display the service in your cloudspace and the hostname of the service. |
|Ports| The ports that your application exposes, as defined in the Dockerfile in your repository or container image, can include HTTPS, TCP, and UDP, and you can define multiple ports.|
|Expose| De-select this setting if you do not want to expose the service to the Internet (optional). |
|Stage| The stage you want your service to be deployed in. |
|Deployment strategy| **Recreate:** Your service will be recreated when deploying a new version (as part of the [CI/CD pipeline](./../development/cicd-pipeline.md)), resulting in a brief downtime while the deployment is in progress. <br />**Rolling:**  The service will be deployed without interruption.

**Environment variables**

If you need environment variables in your application, you can set them here. They are stored in your Key Vault.  
Read more about [Environment variables and secrets](../development/environment-variables-and-secrets.md).

**Resource limits**

Please review these settings before you start your service, as the default settings may not be sufficient for your application. The specific resources required for deployment depend on the design and usage of your specific service. For orientation you can view the mogenius preconfigured services and their resource settings for reference.

[Read more about resource management](./../cloud-management/resource-management.md).

### 3. Deploy a repository with a Dockerfile
To launch an application for which you have already created a container, select the third option, 'Launch a container image from any registry'.

**Specify path to container image**
Enter the name of the container image and the version you want to pull from the registry, for example, nginx:latest. By default, we will search on DockerHub, but you can also specify a different registry by entering the full path.

Provide container image commands and command arguments (if any).

If you wish to deploy from a private registry, enter the repository secret.

**General service settings**

The form fields, some of which are optional, should be filled in as described below:  

| Input field | Comment |
|---|---|
|Name|The name of your service. This will be used to display the service in your cloudspace and the hostname of the service. |
|Ports| The ports that your application exposes, as defined in the Dockerfile in your repository or container image, can include HTTPS, TCP, and UDP, and you can define multiple ports.|
|Expose| De-select this setting if you do not want to expose the service to the Internet (optional). |
|Stage| The stage you want your service to be deployed in. |
|Deployment strategy| **Recreate:** Your service will be recreated when deploying a new version (as part of the [CI/CD pipeline](./../development/cicd-pipeline.md)), resulting in a brief downtime while the deployment is in progress. <br />**Rolling:**  The service will be deployed without interruption.

**Environment variables**

If your application requires environment variables, you can set them here. They will be stored in your Key Vault. Read more about [Environment variables and secrets](../development/environment-variables-and-secrets.md).

**Resource limits**

Please review these settings before starting your service, as the default settings may not be appropriate for your application. The resources required for deployment will vary based on the design and usage of your specific service. For guidance, you can refer to the preconfigured services and their resource settings provided by mogenius.

## Deploy your service

Once all settings are complete, click "Create service" to start your service. Behind the scenes, your service will be created and deployed within a Kubernetes cluster, with the allocated resources and configured network and security settings, including SSL. Your service will be up and running in less than 5 minutes, and you can begin working with it immediately

## 3. Manage and add stages

In your cloudspace dashboard you'll notice that a production stage has been automatically created. You can add additional stages, such as a development stage.

**What's next?**
-ou can now start coding! Check out the repository that you have connected to mogenius. With `git push` your new code will automatically be built in your cloudspace. Read more about the [CI/CD pipeline](../development/cicd-pipeline.md).
-  You can also [Connect your own domain](domains.md) for each of your services you to communicate externally.

**We are proud to see you launching your first service on mogenius. Great job!**

:::info
If you need help, please take a look at our [Help & Feedback page](../general/help-feedback.md). You can connect with the mogenius community or contact us directly if you run into any problems.
:::

