---
sidebar_position: 1
---

# Quickstart
Deploying your application with mogenius is simple. We will walk you through the first steps to launch your first service to the cloud and get you back to coding in no time.

## **1. Sign up​**
At first you will have to [sign up](https://studio.mogenius.com/user/registration) - Enter your email address and set a password.

Next, verification of your email and phone number is necessary to secure your mogenius account sufficiently.

Done? Great! You are ready to create your first cloudspace.

![enter image description here](https://api.mogenius.com/file/id/c2d27ebb-a5a1-4407-b82a-e3b73d1f192d)

## **2. Create a Cloudspace**

Start your first project on mogenius by creating a cloudspace. Set a name for your cloudspace with a maximum length of 24 characters without spaces and special characters.

![enter image description here](https://api.mogenius.com/file/id/e13f43d9-0a18-49ce-96b3-ca27a7de5fa7)

**2.1. Your hostname**

The `hostname` will fill out automatically depending on your cloudspace name. The hostname is the personal domain of your cloudspace and it will point to root level inside your production stage (don't worry about stages for now). You will get a hostname for every service and stage inside your cloudspace and depending on the design of your application you can choose which hostname to use with [your own domain](./domains.md).

You can choose from one of seven top-level domains.

mogenius.io (default)
mogenius.org
mogenius.info
mogenius.net
mogenius.eu
mogenius.de
mogenius.app

**2.2. Select a plan**

Select a plan that fits to the needs of your project and create the cloudspace. You can always start with a free plan and upgrade later if necessary.

[Find the right plan](./../general/plans-pricing.md)

**🥳 Congrats on creating your first Cloudspace on mogenius**

## **3. Manage and add stages**

The first thing you will see inside your cloudspace is the Dashboard. It contains all the information you need to keep track of your application in the cloud. You will see here that a production stage has been created automatically. You can add further stages, for example a dev stage. For more information on stages, read [here](./../mogenius-platform/stages-and-services.md).

![manage stages](https://api.mogenius.com/file/id/c0267b73-b52f-4378-ac61-6b2717e51147)

## **3.2. Add your first service**

Have a look at the page Stages & Services. It will give you an overview of resource consumption and health data of every service and stage. You can see that it is still empty, but we will change it quickly by launching your first service. There is two ways to do this.

### 1. Start from scratch with a template

![services](https://api.mogenius.com/file/id/653f94b7-b2de-444d-a387-90ac3352be98)

Choose the service you would like to deploy from the service library.

First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector IMAGE HERE. When creating a service we will push the config files of the specific service to an empty repository inside your Github account so can start working on the project immediately. Therefore, either select an empty repository from the dropdown menu with only a readme file inside, or create a new repo.

Now, give your a service a name (this will be used to create a hostname, following the pattern service_name-stage-cloudspace_name-id.mogenius.io).

For now, you can leave all other settings on default and create the service. For more information and advanced settings, read more about [managing services](#).

### 2. Use Docker to connect your application

To launch an application you have already developed or which is currently in progress you can select Dockerfile from the service library. First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector.
![docker](https://api.mogenius.com/file/id/c6776718-d86a-48c1-9ca7-619f3482acd3)
