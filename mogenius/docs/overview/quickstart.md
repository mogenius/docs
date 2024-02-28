---
sidebar_position: 2
---

# Quickstart
Deploying your application with mogenius is easy. Here's a walkthrough of the most important steps for setting up a project on mogenius and deploying your first application on your Kubernetes cluster.

## 1. Sign up​
First, [sign up](https://app.mogenius.com/user/registration) by providing your email address along with choosing a password. Afterward, you will receive an email containing a verification link to confirm your email address and finalize the account creation process (please remember to check your spam folder if needed)

## 2. Create an organization

Create an organization, which represents the highest level in the mogenius account hierarchy. This allows you to have multiple organizations, each fully isolated with its own access management and billing system.

## 3. Connect a Kubernetes cluster

Now, let's move on to the exciting part: connecting to a Kubernetes cluster. Once you have connected your cluster, you will be able to create multiple projects and deploy services through an automated pipeline.

### Prerequisites
To successfully complete the next steps, you will need the following:
- A domain you own, to which you can add a DNS record.
- A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work. To get started, a [local Kubernetes](./local-cluster.md) like Docker Desktop, k3s, or minikube is also a great option.
- A working installation of `Helm` and `kubectl`
- OR optionally the [mogenius CLI](../development/mogenius-cli.md)
- Kubernetes cluster admin permissions

:::info
If any of these poses challenges for you, or if you don't want to run mogenius with your own Kubernetes cluster, check out our section [Managed clusters](./../cluster-management/managed-clusters.md).
:::

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/iy17UxSmsVTaPPiLgHhlQ" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

First, set up a cluster in mogenius. In your organization, navigate to Clusters. Select "Create cluster" and enter a name for your cluster. This will only be used to display the cluster in mogenius.

## 4. Install mogenius on the cluster

Before you continue, make sure that you have a running Kubernetes cluster where you have admin access. Next, You will install the mogenius operator on the cluster using `Helm` or [mocli](../development/mogenius-cli.md) to connect your cluster with the mogenius platform.

Copy the `Helm` or `mocli` command. Open a terminal and make sure that your kubecontext is set to the cluster that you want to connect with mogenius. Paste the install command and return to mogenius. You'll see a notification once the operator is connected.

## 5. Complete your cluster setup

After executing the install command, return back to the mogenius user interface and click "I ran the command." The UI will confirm once the operator has established a connection with the mogenius controlplane. To finish your setup you'll now see a list of services that you can install to get your cluster deployment-ready.

The operator scans your cluster and automatically offers a subset of services from the following list, depending on your cluster type and any existing services.

|Service|Description|
|---|---|
|Ingress Controller|Installs a traefik ingress controller to handle traffic from outside the cluster and more.|
|Metrics server|Maintained by Kubernetes-SIGs, handles metrics for built-in autoscaling pipelines.|
|cert-manager|Install the cert-manager to automatically issue Let's Encrypt certificates to your services.|
|Clusterissuer|Responsible for signing certificates.|
|mogenius-traffic-collector|Collects and exposes detailed traffic data for your mogenius services for better monitoring.|
|mogenius-pod-stats-collector|Collects and exposes status events of pods for services in mogenius.|
|Internal container registry|A Docker-based container registry inside Kubernetes.|
|MetalLB loadbalancer|A load balancer for local clusters (e.g. Docker Desktop, k3s, minikube, etc.).|

Select the services that you want to install on your cluster and confirm. You'll be taken to the settings page of your cluster while the services are installed.

:::info
Using a local Kubernetes? Make sure to run `mocli cluster local-dev-setup` to create a bridge interface. This will provide your services with an external hostname and SSL. [Read more >](./local-cluster.md)
:::

## 6. Check cluster settings

Open the cluster settings and check the following sections to make sure that your cluster is ready for deployments.

 - Hostname and IP: If an ingress controller is installed the loadbalancer IP will be populated automatically. If you're using a local cluster, a default hostname will also be added. For remote clusters, enter your domain. In this case you'll need to set a DNS record for this hostname that points to the loadbalancer IP.
 - Container registry: The registry is used for the internal CI/CD pipeline in mogenius, if you want to build and deploy from Github or Gitlab repositories. If you didn't install the internal container registry service you can connect an external registry here. The form supports any external registry, you'll just need to paste the path.

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

