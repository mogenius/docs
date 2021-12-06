---
sidebar_position: 2
title: Set up MySQL & phpMyAdmin
slug: hosting-mysql-phpmyadmin
---

# Creating a MySQL database + phpMyAdmin securely on Microsoft Azure


## In short

For most applications you will need to store data, and one of the most popular services to use for that is MySQL. In this article we'll be looking at how you easily create and set up a database in the cloud (Microsoft Azure) without having to take care of any configurations, security measures and more. Also, we’ll be adding a phpMyAdmin service to access and administrate your newly MySQL database.

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like MySQL. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Creating a new MYSQL database

<![endif]--> Now are ready you to set up a MySQL database! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up your MySQL database. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup MySQL for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the MySQL logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/d55eea97-efb6-4e9b-a0d8-d6e1fc67b89f)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specifiy a name for the database service, select the branch in your repo and stage in your cloudspace you want to use.

Now we need to set the environment variables. Most of them are pre-filled for you, and you can adjust them optionally.

![enter image description here](https://api.mogenius.com/file/id/bafbe414-61d9-402a-8469-0d7d9fa90854)


 Two fields are mandatory: ROOT password and MySQL password, with that other services can access this MySQL database. You can choose your passwords from your list of secrets, create a new one or simply have one generated for you. If you create a new secrent, they will be stored in your mogenius KeyVault for easy a ccess later on. To have a new secret generated automatically, click the wizard-button:
 
![enter image description here](https://api.mogenius.com/file/id/9ce82a26-eb36-4229-a5b7-daba90f6e8cb)

You can also change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources.

Now, simply click "Save". Your MySQL database will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your MySQL database at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/5a0e3dfe-11d4-49a9-a5fd-f01f4397fe61)

That’s it! You have created your first MySQL database service and it will be available to access by other services via the URL that has been assigned to your service, in this instance https://myfirstmysql-prod-megawebapp-c6ck57.dev.mogenius.io/

## Adding phpMyadmin for database administration

Go back to the Service Library to add another service to your cloudspace.

There, select phpMyAdmin from the list of services.

![enter image description here](https://api.mogenius.com/file/id/0a9010b0-e63e-4444-b184-a879c3fdb0e7)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specifiy a name for this service, select the branch in your repo and stage in your cloudspace you want to use.

Now we need to set the environment variables, two of which are mandatory: Root password and Hostname, which is the MySQL service you just set up. Select the right secret for Root password from the dropdown menu and the MySQL service you just set up from the dropdown menu for host name.

![enter image description here](https://api.mogenius.com/file/id/efc66e1c-5e49-4166-a3c7-946881f83c93)

Now, simply click "Save". Your phpMyAdmin service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your phpMyAdmin service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.
	
You can how access this service shown at the URL, which will look something like this: https://myfirstphpmyadmin-prod-megawebapp-c6ck57.dev.mogenius.io/

Click on the URL to access your phpMyAdmin user interface. You can now copy the password for the root user from your mogenius KeyVault and log in.

![enter image description here](https://api.mogenius.com/file/id/16b1e40b-daeb-4bc6-bf16-161b6777468a)
