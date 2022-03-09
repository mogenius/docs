---
sidebar_position: 18
title: How to deploy pgAdmin
---

# Deploying pgAdmin in the cloud in less than 1 minute


## In short

pgAdmin is an open source software for development and administration of PostgreSQL databases. In this article we'll be looking at how you easily create and set up pgAdmin in the cloud (Microsoft Azure) without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like pgAdmin. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Adding pgAdmin to your cloudspace

Now are ready you to set up pgAdmin! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up pgAdmin. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup pgAdmin for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the pgAdmin logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/ebb57fbe-b61f-4a74-a35b-9d2c78d3944b)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
 

![enter image description here](https://api.mogenius.com/file/id/886e945b-84e6-4d8c-b271-0f05bcbaa014)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for this service, select the branch in your repo and stage in your cloudspace you want to use.

Now we need to set the environment variables: Email and password, which will be your user credentials to log into pgAdmin later on. Select each value either from the secrets dropdown list or create a new one with the "+" button.

![enter image description here](https://api.mogenius.com/file/id/ef0fa7df-79d0-4585-a3e3-97a9b1e8ac57)

Now, simply click "Save". Your pgAdmin service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your pgAdmin service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/39364b05-f0f6-48e4-8375-93c5375b21c9)

You can now access this service shown at the URL, which will look something like this: [pgadmin-prod-yourcloudspace-0516lh.mo1.mogenius.io](https://pgadmin-prod-yourcloudspace-0516lh.mo1.mogenius.io/)

Click on the URL to access your pgAdmin user interface. You can now copy the e-mail/user name and password from your mogenius key vault, or enter them manually and log in.

![enter image description here](https://api.mogenius.com/file/id/b980ea97-8bb4-4cee-a98c-8b32eb7ef78c)

To connect to a PostgreSQL database select "Add new server". In the section Connection set the host to the internal hostname of your service - you'll find it on the detail page of your service (serviceName-ID). Then copy the username of your database user from the service settings of PostgreSQL. The password for this user is stored in your key vault. You can leave all other fields on default and save to start the connection. You're done and should be able to access your PostgreSQL database through pgAdmin.