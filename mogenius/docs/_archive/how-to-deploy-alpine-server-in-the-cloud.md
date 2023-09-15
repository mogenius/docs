---
sidebar_position: 5
title: Launch an Alpine server
---

# How do I deploy and run Alpine as microservice in the cloud?

## In short

Alpine Linux is a security-oriented, lightweight Linux distribution based on musl libc and busybox. In this article we'll be looking at how you easily create and set up Alpine in the cloud as a microservice without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like Alpine. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/a8c2aaca-fbe7-401a-bf63-0c99024e2c94)

## Adding Alpine to your cloudspace

Now are ready you to set up Alpine! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up Alpine. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

mogenius will automatically create and setup Alpine for you and add a dockerfile in one of your Git repositories. Click on “Add Service” underneath the Alpine logo on the next page.
![enter image description here](https://api.mogenius.com/file/id/91d78150-ac0a-4e8d-98aa-957125ad5b50)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
 
![enter image description here](https://api.mogenius.com/file/id/ec9042cb-ed36-4cf8-9573-97a7f283c590)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for this service, select the branch in your repo and stage in your cloudspace you want to use.

Now we need to set the environment variables: user name and password, which will be your user credentials to access Alpine later on, Select each value either from the secrets dropdown list or create a new one with the "+" button.Per default the user name is set to 'mogenius'. 

![enter image description here](https://api.mogenius.com/file/id/8603043e-a7dd-4170-ae07-c25746185601)

Now, simply click "Save". Your Alpine service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your Alpine service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/47dfe349-6e64-444f-b8af-78ed334ccbda)

You will now have an internal hostname, e.g. alpine4-v045gu:2222 for other services within your cloudspace, and an external hostname if you chose to expose your service, e.g. tcp-mo2.mogenius.io:23212.


