---
sidebar_position: 1
---

# Quickstart
Deploying your application with mogenius studio is simple. We will walk you through the first steps to get you back to coding in no time.

## **1. Sign up​**
At first you will have to sign up - Enter your email address and set your password.

Next, verification of your email and phone number is necessary to secure your mogenius account sufficiently.

Done? Great! You are ready to create your first CloudSpace.

## **2. Create a CloudSpace**

Start your first project on mogenius by creating a Cloudspace. Set a name for your Cloudspace with a maximum length of 24 characters without spaces and special characters.


**2.1. Your hostname**

The **hostname** will fill out automatically depending on your cloudspace name. The **hostname** is the personal domain of your cloudspace and it will point to root level inside your production stage (don't worry about stages now). You will get a hostname for every service and stage inside your Cloudspace and depending on the design of your application you can choose which hostname to use with [your own domain](#).

You can choose from one of seven first level domains.

mogenius.io (default)
mogenius.org
mogenius.info
mogenius.net
mogenius.eu
mogenius.de
mogenius.app

**2.2. Select a plan**

Select a plan that fits to the needs of your project and create the cloudspace. You can always start with a free plan and upgrade later if necessary.

[Find the right plan](#)

**🥳 Congrats on creating your first Cloudspace on mogenius**

## **3. Manage and add stages**

The first thing you will see inside your Cloudspace is the Dashboard. It contains all the information you need to keep track of your application in the cloud. You will see here, that a production stage has been created automatically. You can add further stages here, for example a dev stage. For more information on stages, read [here](#).

IMAGE HERE

## **3.2. Add your first service**

Have a look at the page Stages & Services. It will give you an overview of resource consumption and health data or every service and stage. You can see that it is still empty, but we will change it quickly by launching your first service. There is two ways to do this, follow the button to see all available services.

**1. Start from scratch with a template**

Choose the service you would like to deploy from the service library.

First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector IMAGE HERE. When creating a service we will push the config files of the specific service to an empty repository inside your Github account so can start working on the project immediately. Therefore, either select an empty repository from the dropdown menu with only a readme file inside, or create a new repo.

Now, give your a service a name (this will be used to create a hostname, following the pattern service_name-stage-cloudspace_name-id.mogenius.io).

For now, you can leave all other settings on default and create the service. For more information and advanced settings, read more about [managing services](#).

**2. Use Docker to connect your application**

To launch an application you have already developed or which is currently in progress you can select Dockerfile from the service library. First you will have to connect Github to your mogenius account. Follow the instructions from Github and authorize mogenius to access your repositories. Once you have given access you will see a repository selector IMAGE HERE. 
