---
sidebar_position: 28
title: How to deploy Ubuntu
---

# How to deploy and run an Ubuntu server in the cloud?


## Summary

Ubuntu is a Linux distribution based on Debian. In this article we'll be looking at how you easily create and set up an Ubuntu server in the cloud as a microservice without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like Ubuntu. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/d86ac37d-ef95-4051-ae2d-534b97c604e2)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/423781c7-df51-43b7-96ed-87a1793597f8)

## Adding Ubuntu to your cloudspace

Now are ready you to set up Ubuntu! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up Ubuntu. Scroll down to see the environments ("Production" stage by default) and then select "Use a template" from the dropdown: 
![enter image description here](https://api.mogenius.com/file/id/c89efb97-db6f-43a8-9641-7faebc481510)

mogenius will automatically create and set up Ubuntu for you, and add a dockerfile in one of your Git repositories. Scroll through the list until you see the Ubuntu logo and click “Add Service” next to it.
![enter image description here](https://api.mogenius.com/file/id/9bc3f8ab-3e5c-4624-a3ff-72455882a947)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
![enter image description here](https://api.mogenius.com/file/id/b16b90fd-2ac1-49b8-add6-a5d0345cbec7)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Specify a name for this service, select the branch in your repo and stage in your cloudspace you want to use.
![enter image description here](https://api.mogenius.com/file/id/c92859fc-dbc6-43cc-9f3c-662861d34211)

Now, simply click "Create Service". Your Ubuntu service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your Ubuntu service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/91dc4086-82f2-48ec-8c42-512135e3ac06)

You will now have an internal hostname, e.g. ubuntuuu-hf9516:22 for other services within your cloudspace, and an external hostname if you chose to expose your service, e.g. tcp-mo1.mogenius.io:32631
