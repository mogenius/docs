---
sidebar_position: 2
---

# Quickstart
Deploying your application with mogenius is easy. Here's a walkthrough of the most important steps for setting up a project on mogenius and deploying your first application on your Kubernetes cluster.

## 1. Sign up​
First, [sign up](https://app.mogenius.com/user/registration) by providing your email address along with choosing a password. Afterward, you will receive an email containing a verification link to confirm your email address and finalize the account creation process (please remember to check your spam folder if needed)

## 2. Create an organization

Create an organization, which represents the highest level in the mogenius account hierarchy. This allows you to have multiple organizations, each fully isolated with its own access management and billing system.

## 3. Set up a Kubernetes cluster

Now, let's move on to the exciting part: connecting to a Kubernetes cluster. Once you have set up the cluster, you will be able to create multiple projects and deploy services through an automated pipeline.

### Prerequisites
To successfully complete this step, you will need the following:
- A domain you own, to which you can add a DNS record.
- A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work.
- A working installation of `kubectl`.
- A working installation of `Helm`.

:::info
If any of these poses challenges for you, or if you don't want to run mogenius with your own Kubernetes cluster, check out our section [Managed clusters](./../cluster-management/managed-clusters.md).
:::

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/6BiG3CpMa0b0Nyn1LZ64-" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

First, set up a cluster in mogenius. In your organization, navigate to Clusters. Select "Create cluster" and enter details for the required settings:

| Input field | Comment |
|---|---|
|Display name|The internal name of your cluster in mogenius, only for display purposes. |
|Cluster name|The name of your cluster. It must match the actual name of your cluster in Kubernetes.|
|Hostname|The domain that you want to connect with your cluster.|

## 4. Install mogenius on the cluster

Before you continue, make sure that you have a running Kubernetes cluster where you have admin access. Next, You will install mogenius on the cluster using `Helm` in order to create and manage applications on the cluster through the mogenius platform.  
In the Connect section, review the settings for your Helm installation. Select the services that you want to be installed by mogenius and save your selection. Now copy the install `Helm` chart.

Open a terminal and connect to your Kubernetes cluster. Now paste the `Helm` chart and hit Enter to start the installation. mogenius is now being installed on your cluster in a new namespace.

Check the Connect page of your cluster in mogenius. You'll receive a notification once the installation is finished. Then, only two more things are required in the cluster settings to complete your setup:
- Enter the external load balancer IP address and create a DNS record for your domain with this IP address so that services deployed through mogenius will automatically get a hostname.
- Enter credentials for your container registry. Images created in the mogenius CI/CD pipeline will be pushed to this registry.

**Done - your cluster is ready! 🥳 You can now create your first project and start deploying.**

## 5. Create a project ##

Head to the Projects section in your organization and click Create project. Select your cluster from the list, enter a name for your project and set resource limits. The limits work like a budget for your project, so that you can control how much resources each team can use for their services. Confirm your settings to create the project.

## 6. Deploy a service ##

Your project is ready. Now you can deploy your first service on the cluster. As an example we'll deploy an application from a Git repository. If you don't have a dockerized application you can also proceed with a template or container image.  
On your project dashboard click Create and select Bring your own code from the dropdown menu.

Now enter the details for your service:

| Input field | Comment |
|---|---|
|Service name|The name of your service. It must be unique on your cluster and it will be used to create a hostname. |
|Stage/environment|Select the stage that your service should be deployed in. Leave it at default Production for now.|
|Deployment strategy|Decide whether you want Kubernetes to perform zero-downtime deployments (rolling deployments) for your service. If you're in a development environment, you can leave this option at its default setting.|
|Git integration|To set up the Git integration, choose either GitHub, GitLab, or Access Token as your preferred option. Follow the provided instructions to establish the connection between mogenius and your Git host.|
|Repository|Once your integration is active select the repository that you want to deploy from the list.|
|Git Branch|Set the branch that you want to deploy.|
|Dockerfile Name and Docker Context|Per default this is set to search for a 'Dockerfile' at root level in the repository.|
|Resource limits|Assign resource limits for CPU, RAM and temporary storage that your service can access at maximum.|
|Environment variables|Create environment variables and secrets if necessary|
|Ports|Set the internal port of your application and decide if you want to expose it to the internet.|

You're ready to create your service. Here's what happens automatically once you confirm the settings:
- A service is created on your Kubernetes cluster
- The repository is built with the mogenius CI/CD pipeline
- The image is pushed to your registry and deployed on your cluster
- The ingress is updated and an SSL certificate issued

You can view the progress in the workflow logs in the header of your mogenius dashboard. Once all steps are completed your service is running.

**Congratulations on deploying your first service with mogenius 🎉**

:::info
If you need help, please take a look at our [Help & Feedback page](../help-and-feedback/index.md). You can contact us directly if you run into any problems.
:::

