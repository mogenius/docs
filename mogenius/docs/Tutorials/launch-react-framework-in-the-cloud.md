---
sidebar_position: 6
title: How to quickstart React
slug: launch-react-framework-in-the-cloud
---

# How to quickstart a React application framework in the cloud

## In short

In this article we'll be looking at how you can quíckly start a new or deploy an existing React  application project to the cloud (Microsoft Azure).

## Getting started

If you already have a mogenius account, proceed to the next step. 
Sign up for mogenius - it's free and you can get started right away. Once you're signed up, create a new cloudspace that contains all your services for a project, like React. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/115e92a0-6daa-4b15-9420-438448351d89)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/7ec47c7f-4dc0-4f5b-8a2f-b8345a369ae8)

## Setting up and deploying a React framework

Now are ready you to deploy React! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to deploy your React application. On the next page, click "Service Library" in the left menu:

![enter image description here](https://api.mogenius.com/file/id/a12d10f1-4b9b-4adb-95ec-db193e1db440)

### Now there are two options to get React deployed: 

### 1 - Creating a new boilerplate template

Create a new project and mogenius will automatically create and setup a boilerplate React template in your Git repository. You can then start coding in the newly created repo or re-use existing code. Click on “Add Service” underneath the React logo on the next page.

![enter image description here](https://api.mogenius.com/file/id/9283ab3f-1867-42a0-8dab-b91566bd8822)

![enter image description here](https://api.mogenius.com/file/id/6a24df90-112d-4d50-b3f4-b457faeb3807)
If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Select the branch in your repo and stage in your cloudspace you want to use. You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources.
![enter image description here](https://api.mogenius.com/file/id/e99ae0ea-d2ab-4a86-857b-00430b9a5c40)

Now, simply click "Save". Your React boilerplate template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your React app at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/3a8c6249-53d0-468e-a089-987cd7861547)

That’s it! You have created your React service and it will be available to access by other services via the URL that has been assigned to your service, in this instance `react-prod-yourcloudspace-qx6r52.mogenius.io`

### 2 – Deploying an existing React app as Dockerfile

If you have already built your React application, use an existing docker file or simply add a docker file to your repo. Select “Dockerfile” from the Service Library.

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories. You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

Now choose the repository with the Dockerfile in it from the dropdown menu.

Select the branch in your repository and the stage in your cloudspace that you want to use. Determine the port as specicifed in the Dockerfile. You can optionally add environment variables and change resources such as CPU cores, memory, and persistent storage. By default, we have pre-configured these for optimal and efficient use of your resources. Make sure to change the port according to your Dockerfile specifications.

![enter image description here](https://api.mogenius.com/file/id/9efd6b72-1dff-4a25-9efc-9f7e1cfdfb3d)

Now just click "Save" and your Docker file will be deployed to your cloudspace and ready to use almost immediately. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your React app at the URL provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.

That’s it! You have created your React service and it will be available to access by other services via the URL that has been assigned to your service, so you will have something like this: `react-prod-yourcloudspace-qx6r52.mogenius.io`


![enter image description here](https://api.mogenius.com/file/id/bf6c5471-ffb7-42a5-9adf-922d832f3b98)
