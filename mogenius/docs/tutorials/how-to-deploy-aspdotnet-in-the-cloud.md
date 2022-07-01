---
sidebar_position: 15
title: How to deploy ASP.NET
---

# How do I deploy ASP.NET Core MVC and ASP.NET Core Web API?


## In short

ASP.NET MVC is a web application framework developed by Microsoft that implements the model–view–controller (MVC) pattern, the minimalistic ASP.NET Core API is ideal for microservices and apps. In this article we'll be looking at how you easily create and set up ASP.NET Core MVC and Web API in the cloud as a microservice without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like ASP.NET. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Adding ASP.NET Core MVC and Web API to your cloudspace

Now are ready you to set up ASP.NET Core MVC and Web API! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up ASP.NET Core MVC. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup ASP.NET services for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the ASP.NET Core MVC logo on the next page.
![enter image description here](https://api.mogenius.com/file/id/2004d293-a141-4a68-af8e-a1feb5cb2ee3)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
 
![enter image description here](https://api.mogenius.com/file/id/aac5a7ce-deb3-4a49-b7b2-f702785d58d8)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for this service, select the branch in your repo and stage in your cloudspace you want to use.

Now, simply click "Save". Your ASP.NET Core MVC service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your ASP.NET Core MVC service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/fbefb13a-f170-4e37-acdd-468f2d1ab97a)

Now simply repeat the same to deploy the ASP.NET Web API service following the same steps as above. 

You will now have an internal hostname, e.g. aspnetmvc-0vbmxw:5000 for other services within your cloudspace, and an external hostname if you chose to expose your service, e.g. aspnetmvc-prod-testest-3w95tm.mo2.mogenius.io:80

![enter image description here](https://api.mogenius.com/file/id/8e9a923f-93da-4b2a-b863-0c77cf1f5f72)
