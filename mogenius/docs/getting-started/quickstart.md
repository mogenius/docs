---
sidebar_position: 1
---

# Quickstart
Deploying your application with mogenius is simple. We will walk you through the first steps to launch your service in the cloud and get you back to coding in no time.

## 1. Sign up​
At first you will have to [sign up](https://studio.mogenius.com/user/registration) - Enter your email address and set a password.  
Next, verification of your email and phone number is necessary to secure your mogenius account sufficiently.  
Done? Great! You are ready to create your first cloudspace.

![Sign up](https://api.mogenius.com/file/id/7fbffa24-a76f-4ab4-9b67-671e841d089d)

## 2. Create a Cloudspace

Start your first project on mogenius by creating a cloudspace. Set a name for your cloudspace with a maximum length of 24 characters without spaces and special characters.

![enter image description here](https://api.mogenius.com/file/id/7ec47c7f-4dc0-4f5b-8a2f-b8345a369ae8)

### Your hostname

The `hostname` will fill out automatically depending on your cloudspace name. The hostname is the personal domain of your cloudspace and it will point to root level inside your production stage (don't worry about stages for now). You will get a hostname for every service and stage inside your cloudspace and depending on the design of your application you can choose which hostname to use with [your own domain](./domains.md).

You can choose from one of seven top-level domains.

mogenius.io (default)  
mogenius.org  
mogenius.info  
mogenius.net  
mogenius.eu  
mogenius.de  
mogenius.app  

### Select a plan

Select a plan that fits to the needs of your project and create the cloudspace. You can always start with a free plan and upgrade later if necessary.

[Find the right plan](./../general/plans-pricing.md)

**🥳 Congrats on creating your first Cloudspace on mogenius**

## 3. Manage and add stages

The first thing you will see inside your cloudspace is the Dashboard. It contains all the information you need to keep track of your application in the cloud. You will see here that a production stage has been created automatically. You can add further stages, for example a dev stage. For more information on stages, read [here](./../mogenius-platform/stages-and-services.md).

![manage stages](https://api.mogenius.com/file/id/c0267b73-b52f-4378-ac61-6b2717e51147)

## 4. Add your first service

Have a look at the page Stages & Services. It will give you an overview of resource consumption and health data of every service and stage. You can see that it is still empty, but we will change it quickly by launching your first service. There is two ways to do this.

### 1. Start from scratch with a template

![services](https://api.mogenius.com/file/id/1de8010c-b8fe-4fa7-9bf3-2b3790d3e8a9)

Choose the service you would like to deploy from the service library.

**Connect Github**

First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector. When creating a service we will push the config files of the specific service to an empty repository inside your Github account so can start working on the project immediately. Therefore, either select an empty repository from the dropdown menu with only a readme file inside, or create a new repo.

**General settings**

Now, give your a service a name (this will be used to create a hostname, following the pattern `service_name-stage-cloudspace_name-id.mogenius.io`).

For now, you can leave all other settings on default and create the service. For more information and advanced settings, read more about [resource management](./../cloud-management/resource-management.md).

This is it.  
**⬇️ [Jump to deploying your service](#deploy-your-service)**

### 2. Use Docker to connect your application

**Connect Github**
To launch an application you have already developed or which is currently in progress you can select Dockerfile from the service library. First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector.

![docker](https://api.mogenius.com/file/id/0cc4af4e-3076-41a3-848f-8af961b15a12)

Select your repository from the dropdown menu or search for it in the input field. Note that mogenius will look for a `Dockerfile` inside the given directory so make sure your repository contains one. When you have selected the repository with a Dockerfile inside, specify the branch that shall be used.

**General service settings**

The form fields can be filled as described below:  

| Input field | Comment |
|---|---|
|Name|The name of your service. This will be used to display to service inside your cloudspace and in the service's hostname. |
|Dockerfile name| This setting has no effect at the moment. You can leave it as is.|
|Internal Port| The port that your application exposes as defined in the Dockerfile inside your repository. |
|Expose| This setting has no effect at the moment. You can leave it as is. |
|Stage| The stage you want your service to be deployed in. |
|Deployment strategy| **Recreate:** Your service is recreated once you deploy a new version (see [CI/CD pipeline](./../development/cicd-pipeline.md)) with a short downtime while the deployment is running.<br />**Rolling:** The service is deployed without interruption of the targeted environment. [Check out plans](./../general/plans-pricing.md) for the availability of rolling deployments.|

**Environment variables**

If you need environment variables in your application you can set them here. They will be stored in your Key Vault.  
Read more about [Environment variables and secrets](../development/environment-variables-and-secrets.md).

**Resource limits**

Please check these settings before launching your service as the default settings might not be sufficient for your application. The specific resources needed for deployment depend on the design and usage of your specific service. As a tip, you can look at mogenius' pre-configured services and their resource settings as a reference.

[Read more about resource management](./cloud-management/resource-management.md).

## Deploy your service

If all settings are done you can hit "Create Service" and your service will be launched. Under the hood, mogenius will build and deploy your service with the allocated resources to a Kubernetes cluster and set up Cloudflare CDN including SSL. Your service will be available in under 5 minutes and you can start working with it immediately.

**What's next?**
- Start coding! Check out the repository that you connected with mogenius. With `git push` your new code will be built automatically in your cloudspace. Read more about the [CI/CD pipeline](../development/cicd-pipeline.md).
- [Connect your own domain](domains.md) to make your service easily memorable for users.

**We are proud to see you launching your first service on mogenius, great job!**

:::info
If you need help please have a look at our [Help & Feedback page](../general/help-feedback.md). You can connect with the mogenius community or directly contact us if problems arise.
:::

