---
sidebar_position: 17
title: Setting up PostgreSQL
---

# Setting up PostgreSQL as a microservice in the cloud


## In short

PostgreSQL is a popular open source relational database management system. In this article we'll be looking at how you easily create and set up a PostgresSQL instance in the cloud (Microsoft Azure) with minimum admistration and configuration required.

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like PostgreSQL. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Adding PostgreSQL to your cloudspace

Now are ready you to set up a PostgreSQL! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up PostgreSQL. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup PostgreSQL for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the PostgreSQL logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/da5087e4-58cf-41fa-a4aa-99ba089512e8)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/65b7d992-c819-4025-8ff2-1e49bf8955ff)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for the database service, select the branch in your repo and stage in your cloudspace you want to use. Deployment strategy you can leave the re-create, or if you have a subscription plan that supports it, select rolling deployments. 

Now we need to set the environment variables. Most of them are pre-filled for you, and you can adjust them optionally.

![enter image description here](https://api.mogenius.com/file/id/876a954a-455e-4e47-ad8f-2dc46ab2c34d)

There are four mandatory environment variables, two of which you need to fill in: 1) POSTGRES_DB - simply type in a name - and 2) POSTGRES_PASSWORD, with that other services can access PostgreSQL as a service. You can choose your password from your list of secrets, create a new one or simply have one generated for you. If you create a new secret, they will be stored in your mogenius KeyVault for easy access later on. To have a new secret generated automatically, click the wizard-button:
 
![enter image description here](https://api.mogenius.com/file/id/9ce82a26-eb36-4229-a5b7-daba90f6e8cb)

You can also change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources.

Now, simply click "Save". PostgreSQL will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using PostgreSQL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/b8827312-5dcd-4f0b-8cf0-279a53f757f0)

That’s it! You have created your first PostgreSQL service and it will be available to access by other services in your cloudspace.

