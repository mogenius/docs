---
sidebar_position: 9
title: Deploy next.js to the cloud
slug: deploy-nextjs-to-the-cloud
---

# Creating and deploying Next.js apps to the cloud

## In short

In this article we'll be looking at how you can start a new or deploy an existing Next.js project to the cloud (Microsoft Azure) in literally under 1 minute.

## Getting started

If you already have a mogenius account, you can skip this step. 
Sign up for mogenius - it's free and you can get started right away. Once you're signed up, create a new cloudspace that contains all your services for a project, like Next.js. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/7ec47c7f-4dc0-4f5b-8a2f-b8345a369ae8)

## Deploying Next.js

Now are ready you to deploy Next.js! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your Next.js application. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

### Now there are two options to get Next.js deployed: 

### 1 - Creating a new boilerplate template

Create a new project and mogenius will automatically create and setup a boilerplate Next.js template in your Git repository. You can then start coding in the newly created repo or re-use existing code. Click on “Add Service” underneath the Next.js logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/eb8f8ca9-9728-4fbb-a967-a393c00de9e0)

![enter image description here](https://api.mogenius.com/file/id/a1c36fd5-2946-4cd5-a52f-2097f752fdb2)

If this is the first time you are deploying a service, we need to connect your cloudspace to your Github account. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)


You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Select the branch in your repo and stage in your cloudspace you want to use. You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources

Now, simply click "Save". Your Next.js boilerplate template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your Next.js at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/729ceb84-d1c9-42e2-ac10-f09dd1e19dfe)

That’s it! You have created your Next.js service and it will be available to access by other services via the URL that has been assigned to your service, in this instance `nextjs-prod-yourcloudspace-qx6r52.mogenius.io`

### 2 – Deploying an existing Next.js app as Dockerfile

If you have already built your Next.js application, use an existing docker file or simply add a docker file to your repo. Select “Dockerfile” from the Service Library.

![enter image description here](https://api.mogenius.com/file/id/94f14c52-ea95-4ae5-8ba1-caede0571c69)
Now choose the repository with the Dockerfile in it from the dropdown menu.

Select the branch in your repository and the stage in your cloudspace that you want to use. Determine the port as specified in the Dockerfile. You can optionally add environment variables and change resources such as CPU cores, memory, and persistent storage that are required for your app to run. 

![enter image description here](https://api.mogenius.com/file/id/9efd6b72-1dff-4a25-9efc-9f7e1cfdfb3d)

Now just click "Save" and your Dockerfile will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your Next.js app at the URL provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.

That’s it! You have created your Next.js service and it will be available to access by other services via the URL that has been assigned to your service, so you will have something like this: `nextjs-prod-yourcloudspace-qx6r52.mogenius.io`

![enter image description here](https://api.mogenius.com/file/id/f6a4b701-ff10-4952-9c47-11e2457f4952)

