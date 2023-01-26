---
sidebar_position: 1
title: How to deploy FastAPI
---

# An easy way of deploying a FastAPI application in Kubernetes

## In short

In this article, we will examine how to quickly create or deploy a FastAPI application on Kubernetes in a public cloud, using mogenius, a Virtual DevOps platform that significantly streamlines cloud infrastructure tasks and automates 90% of the processes. With mogenius, deploying microservice architectures can be done in mere minutes. For more information, visit [mogenius.com](https://mogenius.com)

## Getting started


If you already have an account with mogenius, proceed to the next step. If not, sign up for the mogenius Community Plan - it is free and you can start using it immediately. Once you have signed up, create a new cloudspace, which will serve as your project workspace and contain all of your cloud resources. By default, it will include a production stage, but you can also quickly create additional environments.

Each environment or stage is a Kubernetes namespace, which ensures strict isolation. Within your cloudspace, you can deploy services and allocate resources to them, such as Kubernetes pod limits, and assign them to specific environments. The services within one environment can securely communicate with each other, making it an efficient way to build cloud-native software projects that consist of one or more connected microservices. So, sign up, confirm your email address, and you will be ready to set up your first cloudspace.

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://demo.arcade.software/OQAXt4kwX6rbYoTdqXSm?embed" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
<br />

 
-   Choose a name for your cloudspace and select the Community Plan option to access free cloud resources. Then click 'Create new' - your cloudspace will be set up, and you will be taken to the cloudspace dashboard.

-   You are now ready to deploy your FastAPI application! On the next overview page, you will see all of your cloudspaces. Click on the name of the cloudspace where you want to deploy your FastAPI application.

Now, there are three options to deploy your FastAPI app:

## 1 - Use a pre-configured service template
<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://demo.arcade.software/vGgM9qrIeEcDB4LGx8xY?embed" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
<br />


 -   Select "Use a template" from the cloudspace dashboard. With this option, mogenius will automatically create and add a boilerplate FastAPI template to your Git repository, allowing you to start coding in the newly created repo or to use existing code. Browse the service library or use the search function to find the FastAPI  service, then click "Add service."

-   Next, if this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Continue with GitHub,” which will prompt you to grant permission to access your GitHub repositories. You will only need to do this once, as your mogenius cloudspace will now be connected to your GitHub account and can access your repositories.
-   Next, create a new repository by clicking “+ Add repository.” Select a name for the new repository and create it. By default, this will also be the name of your service, but you can also change it to a different name.
-   You can leave all settings at default for now, as you can change them at any point later when the service is up and running.
-   Now, simply click "Create Service." Your FastAPI boilerplate template will be built, added to the specified Git repository, and deployed to your cloudspace simultaneously, allowing you to start using it almost immediately. Once the setup routines, build, and deployment process are complete (usually only a few minutes), you can start coding in your repository and access your FastAPI at the specified hostname. Every time you commit any changes to your repository, it will trigger a new build-deploy process automatically (CI/CD).
-   You can find all the details on your service's overview page, view metrics, access service logs, add resources, and add additional instances for your service (Kubernetes pods).

That's it! You have created your FastAPI service, and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. fastapi-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: fastapi-template-prod-myaccount-afooyl.mo2.mogenius.io:80

## 2 - Deploy an existing FastAPI application from your repository with a Dockerfile

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://demo.arcade.software/Uz67vWCPUwypUb9oyOze?embed" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>


-   If you have already developed your FastAPI application, use an existing Dockerfile or add one to your repository. Select “Bring your own code” from the cloudspace dashboard.

-   If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Continue with GitHub,” which will prompt you to grant permission to access your GitHub repositories.
-   You will only need to do this once, as your mogenius cloudspace will now be connected to your GitHub account and can access your repositories.
-   Now, choose the repository with the Dockerfile in it from the dropdown menu.
-   Select the branch in your repository and the stage in your cloudspace that you want to use.
-   Optionally, add environment variables.
-   Adjust resources such as CPU cores, memory, and temporary storage to meet the requirements of your application.
-   Select a protocol and enter the port for the application as defined in your Dockerfile.
-   Now, just click "Create Service," and the Dockerfile will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build, and deployment processes are completed (usually only a few minutes), you can start using your FastAPI app at the hostname provided.
-   You can find all the details on your service's overview page, view metrics, access service logs, add resources, and add additional instances for your service (Kubernetes pods).

That's it! You have created your FastAPI service, and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. fastapi-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: fastapi-template-prod-myaccount-afooyl.mo2.mogenius.io:80


## 3 - Deploy an existing FastAPI application from a container image

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://demo.arcade.software/ocqOSUDt0ixY0oX5Azrj?embed" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>


-   If you have already developed and containerized your FastAPI application, you can deploy a container image directly from a container registry. Select “Container Images” from the cloudspace dashboard.

-   Enter the name of the container image under "Container Image" and the version, e.g. nodejsapp:latest. In this example, we are deploying the latest version of a sample Dockerfile from DockerHub. By default, the lookup will be from DockerHub, but you can also enter the path to any other container registry here.
-   You can also deploy private images by entering the container secret.
-   Enter image commands and command arguments if needed, otherwise leave them blank.
-   Adjust resources such as CPU cores, memory, and temporary storage to meet the requirements of your application.
-   Select a protocol and enter the port for the application as defined in your container image.
-   Now, just click "Create Service," and the container image will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines and deployment processes are completed (usually only a few minutes), you can start using your FastAPI app at the hostname provided. 
-   You can find all the details on your service's overview page, view metrics, access service logs, add resources, and add additional instances for your service (Kubernetes pods).

That's it! You have created your FastAPI service, and it will be available to access by other services via the internal hostname that has been assigned to your service, e.g. fastapi-template-8b4tp5:3000. If you choose to expose this service, you will also have an external hostname that can be accessed from outside your cloudspace, it looks like this: fastapi-template-prod-myaccount-afooyl.mo2.mogenius.io:80
