---
sidebar_position: 4
---

# Services in detail

Services are the core of mogenius as they are the tool to launch your application in the cloud. We are going to cover how to create a service inside your cloudspace so that you can start working on your application right away.

## How to create a service

There are several entry points in mogenius to create a new service. Either you open the service library through the main navigation, or you click "Add Service" inside one of your stages. You will then see a range of available services to choose from. 

**There are now two ways to create a service**

### Deploy a boilerplate template to start a new project

Most of the services you will see in the service library are pre-configured templates. To begin a new project, select your desired application type from the overview and click "Add Service."

![enter image description here](https://api.mogenius.com/file/id/6a24df90-112d-4d50-b3f4-b457faeb3807)

First, we need to connect your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![connect github](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.
Next, you can either use an existing empty repo with at least one branch or create a new one by clicking the “+” symbol. Select a name for the new repo and create it.

Select the branch in your repo and the stage in your cloudspace you want to use. You can optionally add environment variables and change the resources like CPU cores, memory and persistent storage. By default we have pre-configured these for optimum and efficient usage of your resources. You can always access these settings later.

![enter image description here](https://api.mogenius.com/file/id/e99ae0ea-d2ab-4a86-857b-00430b9a5c40)

Now, simply click "Save". Your service template will be built, added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start coding and access your service at the hostname. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/3a8c6249-53d0-468e-a089-987cd7861547)

That’s it! You have created your first service and it will be available to access by other services via the hostname that has been assigned to your service. Note that mogenius comes with a [built in CI/CD pipeline](#) so you can start working with the repository right away.

### Use an existing application with Dockerfile

If you have already developed a service that you want to deploy with mogenius you will only need a Dockerfile inside the repository that you will connect. Then select "Dockerfile" from the mogenius service library.

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories. You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

Now choose the repository with the Dockerfile in it from the dropdown menu.

Select the branch in your repository and the stage in your cloudspace that you want to use. Determine the port as specicifed in the Dockerfile. Next you can optionally add environment variables and change resources such as CPU cores, memory, and persistent storage. By default we set some minimum recommendations but you will probably need to adjust them to the specific requirements of your application. Note that you can always change these settings later.

![enter image description here](https://api.mogenius.com/file/id/9efd6b72-1dff-4a25-9efc-9f7e1cfdfb3d)

Now just click "Save" and your Dockerfile will be used to deploy your service to your cloudspace. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your service at the hostname provided. You can find all the details on your service overview page, where you can also customize and scale resources by adding additional instances for your service.

That’s it! You have created your own service and it will be available to access by other services via the hostname that has been assigned to your service. The built in CI/CD pipeline of mogenius will now listen to any changes of the connected repository and deploy them directly in your cloudspace. Read more about this [here](./../development/cicd-pipeline.md). 

![enter image description here](https://api.mogenius.com/file/id/bf6c5471-ffb7-42a5-9adf-922d832f3b98)
