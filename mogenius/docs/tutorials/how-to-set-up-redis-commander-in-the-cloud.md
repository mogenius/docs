---
sidebar_position: 22
title: How to set up redis commander
---

# Deploying redis commander as microservice in the cloud in less than 1 minute


## In short

redis commander is a redis web management tool written in node.js. In this article we'll be looking at how you easily create and set up redis commander as a microservice in the cloud (Microsoft Azure) without the hassle of time-consuming setup and Kubernetes management.

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like redis commander. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace.

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

## Adding redis commander to your cloudspace

Now are ready you to set up redis commander! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up redis commander. On the next page, click "Service Library" in the left menu.

mogenius will automatically create and setup redis commander for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the redis commander logo on the next page.

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for this service, select the branch in your repo and stage in your cloudspace you want to use.

Now we need to set the environment variables: Email and password, which will be your user credentials to log into redis commander later on, Select each value either from the secrets dropdown list or create a new one with the "+" button.

Now, simply click "Save". Your redis commander service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your redis commander service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

You can now access this service shown at the URL, which will look something like this: rediscommander-prod-mrsdoubtfire-l6l6sr.dev.mogenius.io

Click on the URL to access your redis commander user interface.
