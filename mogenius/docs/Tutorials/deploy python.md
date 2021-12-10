---
sidebar_position: 10
title: Create a python app
slug: launch-python-in-the-cloud
---

# How to deploy your Python app to the cloud in no time

## In short

In this article we'll be looking at how you can start a new or deploy an existing Python project to the cloud (Microsoft Azure). 

## Getting started

If you already have a mogenius account, proceed to the next step. 
Sign up for mogenius - it's free and you can get started right away. Once you're signed up, create a new cloudspace that contains all your services for a project, like Python. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Deploying a Python app

Now are ready you to deploy your Python app! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your Python application. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

### Now there are two options to get Python apps deployed: 

### 1 - Creating a new boilerplate template

Create a new project and mogenius will automatically create and setup a boilerplate Python template in your Git repository. You can then start coding in the newly created repo or re-use existing code. Click on “Add Service” underneath the Python on the next page.

![enter image description here](https://api.mogenius.com/file/id/357816e0-b502-45f4-bb09-9dc20f4aadef)

![enter image description here](https://api.mogenius.com/file/id/6d4de3b2-52f6-4aa0-b1a9-82b9eae1ab49)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)


You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Select the branch in your repo and stage in your cloudspace you want to use. You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources

Now, simply click "Save". Your Python boilerplate template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your Python app at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/8244a6de-9e27-4495-8d5f-2fe006be02e3)

That’s it! You have created your Python service and it will be available to access by other services via the URL that has been assigned to your service, in this instance `python-prod-yourcloudspace-qx6r52.mogenius.io`

### 2 – Deploying an existing Python app as Dockerfile

If you have already built your Python application, use an existing docker file or simply add a docker file to your repo. Select “Dockerfile” from the Service Library.
![enter image description here](https://api.mogenius.com/file/id/69c15fc1-2763-4c64-93c7-0e068df8295f)

Now choose the repository with the Dockerfile in it from the dropdown menu.

Select the branch in your repository and the stage in your cloudspace that you want to use. Determine the port as specified in the Dockerfile. You can optionally add environment variables and change resources such as CPU cores, memory, and persistent storage that are required for your app to run. 

![enter image description here](https://api.mogenius.com/file/id/9efd6b72-1dff-4a25-9efc-9f7e1cfdfb3d)

Now just click "Save" and your Dockerfile will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your Python app at the URL provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.

That’s it! You have created your Python service and it will be available to access by other services via the URL that has been assigned to your service, so you will have something like this: `python-prod-yourcloudspace-qx6r52.mogenius.io`

![enter image description here](https://api.mogenius.com/file/id/d0684a45-d5e2-4225-898f-104848219aaf)



