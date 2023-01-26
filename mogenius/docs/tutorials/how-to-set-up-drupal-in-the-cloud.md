---
sidebar_position: 26
title: How to deploy Drupal
---

# How to set up and run Drupal in the cloud in less than 5 minutes


## Summary

Drupal is an open-source content management platform written in PHP and distributed under the GNU General Public License. In this article we'll be looking at how you easily create and set up Drupal in the cloud as a microservice without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like Drupal. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/d86ac37d-ef95-4051-ae2d-534b97c604e2)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/423781c7-df51-43b7-96ed-87a1793597f8)

## Adding Drupal to your cloudspace

Now are ready you to set up Drupal! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up Wordpress. Scroll down to see the environments ("Production" stage by default) and then select "Use a template" from the dropdown: 
![enter image description here](https://api.mogenius.com/file/id/c89efb97-db6f-43a8-9641-7faebc481510)

mogenius will automatically create and set up Drupal for you, and add a dockerfile in one of your Git repositories. Scroll through the list until you see the Drupal logo and click “Add Service” next to it.
![enter image description here](https://api.mogenius.com/file/id/f7c8ece6-dfd7-4384-9ae0-a0fabec41a02)

If this is the first time you are deploying a service, we need to connect your cloudspace to your repository. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/4df5afc0-9762-45dc-8d18-3fe4e8ebccee)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it. Specify a name for this service if different from the repo name, select the branch in your repo and stage in your cloudspace you want to use.

Now it's time to set the environment variables. There are four environment variables you have to set in order to connect Drupal to a database, which needs to be set up at this point. To create a database, you can use a SQL database like MySQL or MariaDBPlease refer to the tutorials for [MySQL](https://docs.mogenius.com/tutorials/how-to-set-up-mysql-and-phpmyadmin-in-the-cloud), or [MariaDB](https://docs.mogenius.com/tutorials/how-to-set-up-mariadb-and-phpmyadmin-in-the-cloud)  on how to set up a database on mogenius. 

The first environment variable is the name of the database: 
![enter image description here](https://api.mogenius.com/file/id/07fcf2e2-c9fc-462c-8864-de561b892ff8)
For MySQL, the default database name created when setting up MySQL is "mysqldb" and for MariaDB it is "mysql".

The second environment variable is the DB password. 

![enter image description here](https://api.mogenius.com/file/id/3a9ad44c-11aa-44c0-9685-6cc3778d71fc)

Select the right secret from the list, which needs to be the root password, i.e. mySQL root password or MariaDB root password. 

Now enter the database user, which needs to be 'root' for MySQL and MariaDB. ![enter image description here](https://api.mogenius.com/file/id/d73df565-509a-401e-96d6-952f1abcb7b3)

The last environment variable required is the database host, simply select the correct database host from the list, which consists of database services avauilable in your cloudspace. 
![enter image description here](https://api.mogenius.com/file/id/fec49977-a56c-4cd0-b769-69299cfe4526)

Now, simply click "Create Service". 

![enter image description here](https://api.mogenius.com/file/id/c92859fc-dbc6-43cc-9f3c-662861d34211)

Your Drupal service will now be built, the dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your Drupal service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/5adcabb3-d8d8-485e-b8f8-67b1cf2a8e5e)

You will now have an internal hostname, e.g. drupalcms3-y3gxsj:8080 for other services within your cloudspace, and an external hostname if you chose to expose your service, e.g. drupalcms3-prod-severecapital-afooyl.mo2.mogenius.io:80

![enter image description here](https://api.mogenius.com/file/id/6d418db7-2877-40c8-b6d9-26afa1daf73f)


