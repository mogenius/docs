---
sidebar_position: 1
title: How to deploy NestJS
---

# Deploying a NestJS application in Kubernetes in 60 seconds

## In short

In this article we'll be looking at how you can create a new or deploy an existing NestJS app in Kubernetes in a public cloud in literally under 1 minute.

## Getting started

If you already have a mogenius account, proceed to the next step. 
Sign up for the mogenius Community Plan - it's free and you can get started right away. Once you're signed up, create a new cloudspace that is your project workspace and contains cloud resources. By default it includes a production stage, you can also spin up additional environments in seconds. 

Each environment or stage is a Kubernetes namespace, so strictly isolated. In your cloudspace you can deploy services and allocate resources to them (Kubernetes pod limits) then to an environment. The services in one environment can securely communicate with each other. This is a convenient way to build a cloud-native software project that consists of one or more connected microservices. So, sign up, confirm your e-mail address and then you are ready to set up your first cloudspace. 

<div style="position: relative; padding-bottom: calc(56.25782227784731% + 41px); height: 0;"><iframe src="https://demo.arcade.software/OQAXt4kwX6rbYoTdqXSm?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

 - Choose a name for your cloudspace and select the Community Plan option to get free cloud resources. Then click 'Create new' - your cloudspace will be set up and you will get to the cloudspace dashboard.
 - Now are ready you to deploy NestJS! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your NestJS application. 
 - Now there are three options to get your NestJS app deployed: 

**1 - Use a pre-configured service template**
<div style="position: relative; padding-bottom: calc(56.25782227784731% + 41px); height: 0;"><iframe src="https://demo.arcade.software/uc9m28Yuxe4K07CZ9jfF?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

 - Select "Use a template" from the cloudspace dashboard. With this option, mogenius will automatically create and add a boilerplate NESTJS template to your Git repository. You can then start coding in the newly created repo or re-use existing code. Browse the service library or use the search function to find the NestJS service and click "Add service". 

 - Next, if this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Continue with GitHub” which will ask you to grant permission to access your GitHub repositories. You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account and can access your repositories.
 - Next, you you need to create a new repository by clicking “+ Add repository” . Select a name for the new repository and create it. By default, this will also be the name of your service, but you can also change it to a different name.
 -  You can leave all settings at default for now, you can change these at any point later when the service is up and running.
 - Now, simply click "Create Service". Your NestJS boilerplate template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time, so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding in your repository and access your NestJS at the specified hostname. Every time you commit any changes to your repository it will trigger a new build deploy process automatically (CI/CD). 
 - You can find all the details on your service's overview page, view metrics, access service logs, add resources and add additional instances for your service (Kubernetes pods).
 - That’s it! You have created your NestJS service and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. nestjs-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: nestjs-template-prod-myaccount-afooyl.mo2.mogenius.io:80

**2 - Deploy an existing NestJS app from your repository with a Dockerfile**
<div style="position: relative; padding-bottom: calc(50.3515625% + 41px); height: 0;"><iframe src="https://demo.arcade.software/4nNMs0qyQzKZRMLcpTUG?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

 - If you have already developed your NestJS application, use an existing docker file or simply add a docker file to your repository. Select “Bring your own code” from the cloudspace dashboard.
  
 - If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Continue with GitHub” which will ask you to grant permission to access your GitHub repositories.
 - You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account and can access your repositories.
 - Now choose the repository with the Dockerfile in it from the dropdown menu. 
 - Select the branch in your repository and the stage in your cloudspace that you want to use. 
 - You can optionally add environment variables.
 - Change resources such as CPU cores, memory, and temporary storage to meet the requirements of your application.
 - Select a protocol and enter the port for the application as defined in your dockerfile.
 - Now just click "Create Service" and the Dockerfile will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build and deployment processes are completed (usually a few minutes at most), you can start using your NestJS app at the hostname provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.
 - You can find all the details on your service's overview page, view metrics, access service logs, add resources and add additional instances for your service (Kubernetes pods).

- That’s it! You have created your NestJS service and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. nestjs-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: nestjs-template-prod-myaccount-afooyl.mo2.mogenius.io:80


**3 - Deploy an existing NestJS app from a container image**
<div style="position: relative; padding-bottom: calc(50.3515625% + 41px); height: 0;"><iframe src="https://demo.arcade.software/QJJIQZh5jRLzc1RjqlBe?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>
 - If you have already developed and containerized your NestJS application you can deploy a container image directly from a container registry. Select “Container Images” from the cloudspace dashboard.
  
 - Enter the name of the container image under "Container Image" and the version, e.g. nestjsapp:latest. In this example, we are deploying the latest version of a sample dockerfile from DockerHub. By default the lookup will be from DockerHub, you can also enter the path to any other container registry here. 
 - You can also deploy private images if you enter the container secret. 
 - Enter image commands and command arguments if needed, otherwise leave blank.
 - Change resources such as CPU cores, memory, and temporary storage to meet the requirements of your application.
 - Select a protocol and enter the port for the as defined in your container image.
 - Now just click "Create Service" and the container image will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines and deployment processes are completed (usually a few minutes at most), you can start using your NestJS app at the hostname provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.
 - You can find all the details on your service's overview page, view metrics, access service logs, add resources and add additional instances for your service (Kubernetes pods).

- That’s it! You have created your NestJS service and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. nestjs-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: nestjs-template-prod-myaccount-afooyl.mo2.mogenius.io:80