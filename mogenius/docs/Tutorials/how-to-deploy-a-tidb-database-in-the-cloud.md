---
sidebar_position: 3
title: Launching a TiDB database
---

# Launching TiDB database in the cloud with a few clicks


## In short

For most applications you will need to store data, and a popular service to use for that is TiDB. In this article we'll be looking at how you easily create and set up a database in the cloud (Microsoft Azure) without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like TiDB. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/7ec47c7f-4dc0-4f5b-8a2f-b8345a369ae8)

## Creating a new TiDB database

Now are ready you to set up a TiDB database! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up your TiDB database. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup TiDB for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the TiDB logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/b3189929-af19-4ceb-b298-e65e4293716a)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

![enter image description here](https://api.mogenius.com/file/id/e515c02d-3412-4a88-9662-42d0900363d2)

Specifiy a name for the database service, select the branch in your repo and stage in your cloudspace you want to use.

You can add environment variables (optional). You can also change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources.

![enter image description here](https://api.mogenius.com/file/id/8d860955-f473-4a8f-a984-7726dc776078)

Now, simply click "Save". Your TiDB database will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your TiDB database at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/5f464b71-a0b8-49e4-a1c3-b45fc1cb88a5)

That’s it! You have created your first TiDB database service and it will be available to access by other services.


