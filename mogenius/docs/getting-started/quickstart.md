---
sidebar_position: 1
---

# Quickstart
Deploying your application with mogenius is easy. We'll walk you through the first steps to get your service up and running in the cloud, and you can get back to coding in no time.

## 1. Sign up​
First you will have to [sign up](https://studio.mogenius.com/user/registration) - Enter your email address and choose a password.  
Next, verification of your email address and phone number is required to sufficiently secure your mogenius account.  
Done? Great! You are now ready to create your first cloudspace.

![Sign up](https://api.mogenius.com/file/id/7fbffa24-a76f-4ab4-9b67-671e841d089d)

## 2. Create a Cloudspace

Start your first project on mogenius by creating a cloudspace. Set a name for your cloudspace with a maximum length of 24 characters without spaces and special characters.

![enter image description here](https://api.mogenius.com/file/id/7ec47c7f-4dc0-4f5b-8a2f-b8345a369ae8)

### Your hostname

The Hostname is automatically filled in, depending on your cloudspace name. This hostname is the personal domain of your cloudspace and points to the root level within your production stage (don't worry about stages  for now). You get a hostname for each service and stage in your cloudspace, and depending on the design of your application, you can choose which hostname to use with [your own domain](./domains.md).

You can choose from one of seven top-level domains.

mogenius.io (default)  
mogenius.org  
mogenius.info  
mogenius.net  
mogenius.eu  
mogenius.de  
mogenius.app  

### Select a plan

Choose a plan that fits your project's needs and create the cloudspace. You can always start with a free plan and upgrade later if needed.

[Find the right plan](./../general/plans-pricing.md)

**🥳 Congrats on creating your first cloudspace on mogenius**

## 3. Manage and add stages

The first thing you will see in your cloudspace is the dashboard. It contains all the information you need to keep track of your application in the cloud. You will see here that a production stage has been automatically created. You can add more stages, for example, a development stage. For more information about stages, see [here](./../mogenius-platform/stages-and-services.md).

![manage stages](https://api.mogenius.com/file/id/31024a53-d670-43f8-b6fc-221cdf3c4083)

## 4. Add your first service

Take a look at the Stages & Services page. It gives you an overview of the resource consumption and state of each service and stage. As you can see, it is still empty, but we will quickly change that by starting your first service. There are two ways to do this.

### 1. Start from scratch with a template

![services](https://api.mogenius.com/file/id/1de8010c-b8fe-4fa7-9bf3-2b3790d3e8a9)

Choose the service you would like to deploy from the service library.

**Connect Github**

First, you need to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have granted access, you will see a repository selector. When you create a service, the config files for that service are moved to an empty repository in your Github account, so you can start working on the project immediately. Therefore, either select an empty repository from the drop-down menu that contains only a readme file, or create a new repository.

**General settings**

Now give your a service a name (this is used to create a hostname, following the pattern `service_name-stage-cloudspace_name-id.mogenius.io`).

For now, you can leave all other settings at default and create the service. For more information and advanced settings, read more about [resource management](./../cloud-management/resource-management.md).

That's it!
**⬇️ [Jump to deploying your service](#deploy-your-service)**

### 2. Use Docker to connect your application

**Connect Github**
To launch an application that you have already developed or that is in progress, you can select Dockerfile from the service library. First, you need to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have granted access, you will see a repository selector.

![docker](https://api.mogenius.com/file/id/0cc4af4e-3076-41a3-848f-8af961b15a12)

Select your repository from the dropdown menu or search for it in the input field. Note that mogenius will look for a `Dockerfile` inside the given directory so make sure your repository contains one. When you have selected the repository with a Dockerfile inside, specify the branch that you want to use.

**General service settings**

The form fields can be filled in as described below:  

| Input field | Comment |
|---|---|
|Name|The name of your service. This will be used to display the service in your cloudspace and the hostname of the service. |
|Dockerfile name| This setting has no effect at the moment. You can leave it as is.|
|Internal Port| The port that your application provides as defined in the Docker file in your repository. |
|Expose| This setting has no effect at the moment. You can leave it as is. |
|Stage| The stage you want your service to be deployed in. |
|Deployment strategy| **Recreate:** Your service is recreated once you deploy a new version (see [CI/CD pipeline](./../development/cicd-pipeline.md)) with a short downtime while the deployment is running.<br />**Rolling:** The service is deployed without interruption. [Check out plans](./../general/plans-pricing.md) for the availability of rolling deployments.|

**Environment variables**

If you need environment variables in your application, you can set them here. They are stored in your Key Vault.  
Read more about [Environment variables and secrets](../development/environment-variables-and-secrets.md).

**Resource limits**

Please review these settings before you start your service, as the default settings may not be sufficient for your application. The specific resources required for deployment depend on the design and usage of your specific service. For orientation you can view the mogenius preconfigured services and their resource settings for reference.

[Read more about resource management](./cloud-management/resource-management.md).

## Deploy your service

When all settings are done, you can click "Create service" and your service will be started. In the background, your service will be created and deployed with the allocated resources in a Kubernetes cluster and the Cloudflare CDN including SSL will be set up. Your service will be up and running in less than 5 minutes and you can start working with it immediately.

**What's next?**
- You can now start coding! Check out the repository that you connected with mogenius. With `git push` your new code will be built automatically in your cloudspace. Read more about the [CI/CD pipeline](../development/cicd-pipeline.md).
- [Connect your own domain](domains.md) to make your service easily memorable for users.

**We are proud to see you launching your first service on mogenius, great job!**

:::info
If you need help, please take a look at our [Help & Feedback page](../general/help-feedback.md). You can connect with the mogenius community or contact us diretly if you encounter any problems.
:::

