---
sidebar_position: 20
title: How to deploy Flask
---

# Setting up Flask in a scalable cloud environment in just a few minutes

## In short

Flask is a lightweight WSGI web application framework written in Python. In this article we will be looking at how you can easily set up a new Flask project using cloud resources (Microsoft Azure). With mogenius this will take you just a few minutes, and you don't have to deal with lengthy configuration work.

## Getting started

If you already have a mogenius account, you can skip this step. 
Sign up for mogenius - it's free and you can get started right away. Once you're signed up, create a new cloudspace that contains all your services for a project, like Flask. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Deploying Flask

Now are ready to set up and deploy your project! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your application. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

### Creating a new boilerplate template

Create a new project and mogenius will automatically create and setup a boilerplate Flask template in your Git repository. You can then start coding in the newly created repo or re-use existing code. Click on “Add Service” underneath the Flask logo on the next page.
![enter image description here](https://api.mogenius.com/file/id/407d9c7e-628c-48b7-ba62-25d8059ef505)
![enter image description here](https://api.mogenius.com/file/id/e8bf69d3-8499-47c4-a6c3-7c223a00db57)

If this is the first time you are deploying a service, we need to connect your cloudspace to your Github account. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)


You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Select the branch in your repo and stage in your cloudspace you want to use. You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources

Now, simply click "Save". Your boilerplate templates will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your project at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/8be9cb0e-cde1-4521-bbcd-2a389b54a866)

That’s it! You have created your Flask project and it will be available to access via the URL that has been assigned to your service, in this instance [pythonflask-prod-hellyeah-vj7kuu.dev.mogenius.io](https://pythonflask-prod-hellyeah-vj7kuu.dev.mogenius.io/)
