---
sidebar_position: 16
title: Setting up Redis
slug: deploy-redis-in-the-cloud
---

# Setting up Redis as a microservice in the cloud


## In short

Redis can be used for key-value storage, cache or message broker. In this article we'll be looking at how you easily create and set up a Redis in the cloud (Microsoft Azure) without having to take care of any configurations, security measures and more.

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like Redis. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Adding Redis to your cloudspace

Now are ready you to set up a Redis! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up Redis. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup Redis for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the Redis logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/30bdd07f-d2c8-4ddd-aa00-4f761e2caa0f)
If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/4414057d-f15f-4d92-b6cc-6843886287fd)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specifiy a name for the database service, select the branch in your repo and stage in your cloudspace you want to use. Deployment strategy you can leave the re-create, or if you have a subscription plan that supports it, select rolling deployments. 

Now we need to set the environment variables. Most of them are pre-filled for you, and you can adjust them optionally.

![enter image description here](https://api.mogenius.com/file/id/8bcb981b-a0ef-4fd8-b1e4-acc329d2cabe)

One field is mandatory: REDIS_PASSWORD, with that other services can access Redis as a service. You can choose your password from your list of secrets, create a new one or simply have one generated for you. If you create a new secret, they will be stored in your mogenius KeyVault for easy access later on. To have a new secret generated automatically, click the wizard-button:
 
![enter image description here](https://api.mogenius.com/file/id/9ce82a26-eb36-4229-a5b7-daba90f6e8cb)

You can also change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources.

Now, simply click "Save". Redis will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using Redis at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/cee4437e-a3cc-41aa-af1d-553a52df5b06)

That’s it! You have created your first Redis  service and it will be available to access by other services in your cloudspace.

