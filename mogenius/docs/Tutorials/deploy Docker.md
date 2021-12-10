---
sidebar_position: 13
title: How to deploy a Docker app
slug: deploy-docker-in-the-cloud
---

# Hosting, building and deploying your Docker application in the cloud

## In short

In this article we'll be looking at how you can build and deploy an application from a Dockerfile to the cloud (Microsoft Azure) with just a few clicks.

## Getting started

If you already have a mogenius account, you can skip this step. 
Sign up for mogenius - it's free and you can get started right away. Once you're signed up, create a new cloudspace that contains all your services for a project. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Building and deploying your Docker application

Now are ready you to deploy your Docker application! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your Docker application. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)


Select “Dockerfile” from the Service Library.

![enter image description here](https://api.mogenius.com/file/id/94f14c52-ea95-4ae5-8ba1-caede0571c69)

### Grant access to your Git repository

If this is the first time you are deploying a service, we need to connect your cloudspace to your Github account. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

### Configure your service

Now choose the repository with the Dockerfile in it from the dropdown menu.

Select the branch in your repository and the stage in your cloudspace that you want to use. Determine the port as specified in the Dockerfile. You can optionally add environment variables and change resources such as CPU cores, memory, and persistent storage that are required for your app to run. 

![enter image description here](https://api.mogenius.com/file/id/9efd6b72-1dff-4a25-9efc-9f7e1cfdfb3d)

### Build and deploy

Now click "Save" and your Dockerfile will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build and deployment processes are completed (usually a few minutes at most), you can start using your Docker app at the URL provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.

That’s it! You have created a service running your Docker application and it will be available to access by other services via the URL that has been assigned to your service, so you will have something like this: `docker-prod-yourcloudspace-qx6r52.mogenius.io`

![enter image description here](https://api.mogenius.com/file/id/b3bcd568-e7bb-45f1-a8e0-b5c07f63ba4f)

