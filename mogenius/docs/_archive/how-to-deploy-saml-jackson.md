---
sidebar_position: 25
title: How to deploy SAML Jackson
---

# How to deploy SAML Jackson in the cloud with mogenius


## Summary

BoxyHQ helps startups enable enterprise features in any SaaS app with just a few lines of code. Integrate SAML SSO, Audit Logs, Privacy Vault and Role Based Access in minutes. Open source and free. In this article we'll be looking at how you easily deploy SAML Jackson in the cloud as a microservice without having to take care of any configurations, security measures and more. 

## Getting started

If you already have a mogenius account, proceed to the next step. Otherwise you can sign up here: [mogenius sign-up](https://studio.mogenius.com/user/registration)

Sign up for mogenius - it's free and you can get started right away. Once you've created your account, you can create a new cloudspace that contains all your services and databases for a project, like SAML Jackson. The services all reside in your secure cloudspace and can communicate with each other (Kubernetes namespace isolation). This is a convenient way to build a cloud-native software project that consists of one or more interconnected microservices. Once you have confirmed your email and phone number, you can create a new cloudspace:

![enter image description here](https://api.mogenius.com/file/id/d86ac37d-ef95-4051-ae2d-534b97c604e2)

Choose a name for your cloudspace and select the free tier to get cloud resources at no charge, or you can also choose a subscription to upgrade your resources when you create the cloudspace or upgrade at a later stage.

![enter image description here](https://api.mogenius.com/file/id/423781c7-df51-43b7-96ed-87a1793597f8)

## Adding SAML Jackson to your cloudspace

Now are ready you to set up SAML Jackson! On the next overview page, you will see all your cloudspaces. Click on the name of the cloudspace where you want to set up SAML Jackson. Scroll down to see the environments ("Production" stage by default) and then select "Use a template" from the dropdown: 
![enter image description here](https://api.mogenius.com/file/id/c89efb97-db6f-43a8-9641-7faebc481510)

mogenius will automatically create and set up a SAML Jackson microservice for you, and add a dockerfile in one of your Git repositories. Scroll through the list until you see the SAML Jackson logo and click “Add Service” next to it.
![enter image description here](https://api.mogenius.com/file/id/4c5240c7-dcfa-4952-9844-dd0803ee3aae)

If this is the first time you are deploying a service, we need to connect your cloudspace to your Github account. Click on “Connect Github” which will ask you to grant permission to access your Github repositories.

![enter image description here](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

You will only need to do this once, your mogenius cloudspace is now connected to your GitHub account, and can access your repositories.

![enter image description here](https://api.mogenius.com/file/id/c2b7104c-8ed0-4f8a-86e4-3f23101e5fb4)

Next, you can either use an existing empty repo or create a new one by clicking the “+” symbol. Select a name for the new repo and create it. Specify a name for this service if different from the repo name, select the branch in your repo and stage in your cloudspace you want to use.

Now it's time to set the environment variables, for example if you want to SAML Jackson to connect to a database. PostgreSQL, MySQL, MariaDB, MongoDB and redis, are all supported and available as a service on  mogenius. After you set up your database, you will need the environment variables in order to connect SAML Jackson to your database. To create a database, please refer to the tutorials for [MySQL](https://docs.mogenius.com/tutorials/how-to-set-up-mysql-and-phpmyadmin-in-the-cloud), [MariaDB](https://docs.mogenius.com/tutorials/how-to-set-up-mariadb-and-phpmyadmin-in-the-cloud), [MongoDB](https://docs-testing-docs-n8aa16.prod.mogenius.io/services/databases/mongodb), [redis ](https://docs-testing-docs-n8aa16.prod.mogenius.io/services/databases/redis) or [Postgres](https://docs-testing-docs-n8aa16.prod.mogenius.io/services/databases/postgresql) on how to set up a database on mogenius. Please also refer to the SAML Jackson [Docs](https://boxyhq.com/docs/jackson/deploy/env-variables#database-configuration) on environment variables.

If you do not wish to connect to a database or modify any environment variables, you can skip this step and go straight to "Create Service" and use the pre-filled placeholders for now.

In this tutorial we have are using a Postgres database as an example, other databases follow a similar logic. The first environment variable is DB:_URL, where INTERNAL_HOSTNAME is from the Postgres service on mogenius, standard port is 5432. User name, password and database name as specified in the env var of the Postgres service. In our case, it looks like this: 

postgres://posgres-user:xQ1GsSeD@postgressamlte-k7b85p:5432/maindb

![enter image description here](https://api.mogenius.com/file/id/a3c16fda-4bad-4b7e-af9f-a219e447e56d)

You can leave DB_TYPE in this case and DB_ENGINE as per default.

Now, simply click "Create Service". 

![enter image description here](https://api.mogenius.com/file/id/c92859fc-dbc6-43cc-9f3c-662861d34211)

Your SAML Jackson service will now be built, the Dockerfile added to the specified Git repository, and deployed to your cloudspace at the same time so you can start using it almost immediately. Once the setup routines, build and deployment process are complete (usually a few minutes at most), you can start using your SAML Jackson service at the specified URL. You can find all the details on your service's overview page, where you can also customize the resources and scale by adding additional instances for your service.

![enter image description here](https://api.mogenius.com/file/id/d3cfe48c-0662-41d7-8151-7ce186867b45)

You will now have an internal hostname, e.g. samljacksontut-zoe7eg:5225 for other services within your cloudspace, and an external hostname if you chose to expose your service, e.g. samljacksontut-prod-testspace-1rva4f.mo2.mogenius.io:80