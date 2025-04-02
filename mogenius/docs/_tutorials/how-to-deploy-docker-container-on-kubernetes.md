---
sidebar_position: 1
title: Deploy a Docker container on Kubernetes
---

# How to deploy a Docker container from a Git repository on a Kubernetes cluster

## In short

In this tutorial, we'll be looking at how you can build an application from a Dockerfile in a Git repository, and then deploy it on a Kubernetes cluster. We'll provide you with a step-by-step guide that you can replicate to deploy your Docker container.

## Getting started

We assume that you already have a mogenius account. If not, you can create one here and either join an existing organization or start a free trial of the platform: [https://app.mogenius.com/user/registration](https://app.mogenius.com/user/registration)

If you are already connected to the Kubernetes cluster in which you want to deploy, you can skip the next step and proceed to step 2.

## Create an organization
Create an organization, which represents the highest level in the mogenius account hierarchy. This allows you to have multiple organizations, each fully isolated with its own access management and billing system.

## 1. Connecting to a Kubernetes cluster

### Installing mogenius

mogenius allows you to connect with Kubernetes clusters by installing the mogenius operator on a cluster. Once installed, you can start deploying projects and manage Kubernetes workloads through the mogenius platform. To begin the installation process, you'll first need to create a cluster in mogenius.

### Prerequisites

To successfully complete the next steps, you will need the following:

-   A domain you own, to which you can add a DNS record.
-   A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work.
-   A working installation of  `kubectl`.
-   A working installation of  `Helm`.
-   Kubernetes cluster admin permissions

### Resource requirements

The mogenius operator consists of several pods that will be deployed to your Kubernetes cluster. It will require CPU and GB RAM.

### Create a cluster in mogenius

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/6BiG3CpMa0b0Nyn1LZ64-" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

In your organization open "Clusters" and select "Add cluster." Enter a display name for your cluster and confirm.

***Please note: This will create a management pane for a Kubernetes cluster in mogenius. It will not create an actual Kubernetes cluster.***

### Install the operator on Kubernetes

To connect mogenius with Kubernetes you'll need to install our operator on Kubernetes. On the next screen you'll see two options, either via CLI command or by installing a Helm chart. Choose your option and copy the command to a terminal. Make sure to execute it in the proper kubecontext. The operator will now be installed on your cluster.

You can monitor the installation in mogenius. Once the installation was successful, your cluster will switch to the state  `Connected`. As long as no connection to the operator could be established the state will be  `Disconnected`.

You'll now be asked if you want to install additional services on the cluster, such as an IngressController or metrics-server. The services are optional but they ensure that you'll be able to deploy services successfully using mogenius.

If you're encountering issues with installing the operator, check out common problems in the section  [Troubleshooting clusters](https://docs.mogenius.com/cluster-management/troubleshooting-clusters).

### Next steps

Congrats, your cluster is now connected with mogenius 🎉  
To complete the setup, continue with the section  [Cluster settings](https://docs.mogenius.com/cluster-management/cluster-settings).

### Cluster settings

On the "Settings" tab, you can manage metadata, domain, container registry, and more. To deploy applications on your cluster, setting up a domain is required. To use the mogenius CI/CD pipeline, it is also necessary to connect a container registry.

### General Cluster Information

Modify metadata information of your cluster and set the type of Kubernetes service you're using.

### Loadbalancer

Fill in the form fields to connect your cluster with a domain:

-   Loadbalancer IPs: Enter the external load balancer IP address of your cluster. This is only available if an ingress controller is installed on your cluster. If you don't have one already, you can install an ingress controller together with the mogenius operator (see  [installing mogenius](https://docs.mogenius.com/cluster-management/installing-mogenius)).
-   Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.
-   Note that these settings are filled out automatically if possible.

### Connecting your domain

In your DNS settings, create two records of type A:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

### Container registry

Mogenius has a pre-configured internal CI/CD pipeline. To use the pipeline, you'll need to connect a container registry that will be used to store and deploy the container images created by the mogenius pipeline.

-   Container registry url: Select your container registry from the dropdown, or enter the url to your registry manually.
-   Container registry path: Provide the path to your desired directory inside the registry.
-   User: Enter a user name that you want to use to authenticate with the registry.
-   PAT: Enter a personal access token from your registry for authentication.

## 2. Create a project

After this step, you will see your project overview page. Now simply create a new project, provide a name, and the resource settings for the projects. The resource settings are limits for this project that all applications you want to deploy in this project will have available. Later on, you can invite team members to collaborate on this project.

## 3. Add a new service to your project

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/cllbzw4rl0dyw1l19nca0ffty" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

Select the newly created project, which will take you to the project dashboard. You'll see an overview of the available resources for this project and the environments available. By default, there is one production environment. Each environment or stage represents a Kubernetes namespace. In the navigation section "Stages and Services," you can add additional environments, like "Development" or "Testing." In the project dashboard, select "Bring your own code" in the environment where you want to deploy your Dockerfile.

## 4. Connect to your Git account

Next, you'll see the "Add a service" page. If your account or project is not already connected to a Git account, that's the next step you'll need to take. Choose "GitHub," "GitLab," or "Access token" and follow the instructions. Now you can access the repositories from your Git account. You should see a dropdown menu below the indicated Git connection. Choose the repository with the Dockerfile from the dropdown menu.

## 5. Configure your Docker file settings and resource limits

Select the branch in your repository and the environment in your project space that you want to use. Determine the port as specified in the Dockerfile. You can optionally add environment variables and change resource limits such as CPU cores, memory, and temporary storage required for your application to run, or the number of instances you want to deploy (Kubernetes pods).

## 6. Build and deploy

You're ready to create your service. Here's what happens automatically once you confirm the settings:

-   A service is created on your Kubernetes cluster.
-   The repository is built with the mogenius CI/CD pipeline.
-   The image is pushed to your registry and deployed on your cluster.
-   The ingress is updated, and an SSL certificate is issued.

You can view the progress in the workflow logs in the header of your mogenius dashboard. Once all steps are completed, your service is running, and you can start addressing your Docker application at the hostname generated for this service, which you will find at the top of the service detail page. There is an internal hostname that other services in your project can access, and if you selected to expose your service, there will be an external hostname as well.

## 7. Monitor and scale

On the service detail page, you can now access the build, deployment, and application runtime logs at any time, which are aggregated in near-real-time from Kubernetes and the build process. You can also stop, restart, or rebuild your service or scale it horizontally or vertically by adjusting the resource limits or adding additional instances (Kubernetes pods). You can change or add additional environment variables. You can also run vulnerability checks to detect dependencies and security issues of your container.
