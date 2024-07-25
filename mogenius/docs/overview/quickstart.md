---
sidebar_position: 2
---

# Quickstart
Getting started with mogenius is easy. Here's a walkthrough of the most important steps for setting up a project on mogenius and deploying your first application on your Kubernetes cluster.

## 1. Sign up​
First, [sign up](https://app.mogenius.com/user/registration) by providing your email address along with choosing a password. Afterward, you will receive an email containing a verification link to confirm your email address and finalize the account creation process (please remember to check your spam folder if needed)

## 2. Create an organization

Create an organization, which represents the highest level in the mogenius account hierarchy. This allows you to have multiple organizations, each fully isolated with its own access management and billing system.

## 3. Connect a Kubernetes cluster

Now, let's move on to the exciting part: connecting to a Kubernetes cluster. Once you have connected your cluster, you will be able to create multiple projects and deploy services through an automated pipeline.

### Prerequisites
To successfully complete the next steps, you will need the following:
- A Kubernetes cluster. We recommend a managed Kubernetes service, like EKS (Amazon AWS), AKS (Microsoft Azure) or GKE (Google Cloud Platform), but any cluster with Kubernetes version 1.24 or higher will work. To get started, a [local Kubernetes](../cluster-management/local-cluster.md) like Docker Desktop, k3s, or minikube is also a great option.
- A domain you own, to which you can add a DNS record.
- A working installation of `Helm` and `kubectl`
- OR optionally the [mogenius CLI](../development/mogenius-CLI.md)
- Kubernetes cluster admin permissions

:::info
If you want to explore mogenius before connecting it with your cluster, check out the demo organization in your account. If you don't want to run mogenius with your own Kubernetes cluster, check out our section [Managed clusters](./../cluster-management/managed-clusters.md).
:::

<div style={{ position: 'relative', paddingBottom: 'calc(56.25782227784731% + 41px)', height: 0 }}>
      <iframe src="https://app.supademo.com/embed/iy17UxSmsVTaPPiLgHhlQ" frameBorder="0" loading="lazy" webkitAllowFullScreen mozAllowFullScreen allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>

After creating your organization, add a cluster and follow the steps for either a remote (cloud, or on-premise), or a local Kubernetes. Enter a name (this will only be used to display the cluster in mogenius) and proceed to install the operator.

## 4. Install mogenius on the cluster

Before you continue, make sure that you have a running Kubernetes cluster where you have admin access. Next, you will install the mogenius operator on the cluster using `Helm` or [mocli](../development/mogenius-CLI.md) to connect your cluster with the mogenius platform.

Copy the `Helm` or `mocli` command. Open a terminal and make sure that your kubecontext is set to the cluster that you want to connect with mogenius. Paste and execute the install command, return to mogenius, and click "I ran the command." The UI will confirm once the operator has established a connection with the mogenius controlplane.

:::info
Having trouble connecting the operator? Check out the [troubleshooting section.](../cluster-management/troubleshooting-clusters.md)
:::

## 5. Install Helm charts

Once the operator is connected, proceed with installing Helm charts to finish your Kubernetes setup. Some services from the list are required to support the mogenius feature-set, like pod stats and traffic collector. Additionally, you can select recommended Helm charts from the list, like an ingress controller or cert manager. 

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
|External secrets operator|Required to use the Hashicorp Vault integration in a project.|

Once you made your selection, confirm with "Install" and the Helm charts will be deployed to your cluster. Since some of them depend on each other, the installation can take a moment.

:::info
Using a local Kubernetes? Make sure to run `mocli cluster local-dev-setup` to create a bridge interface. This will provide your services with an external hostname and SSL. [Read more >](./local-cluster.md)
:::

## 6. CI/CD setup

Each mogenius project comes with a built-in pipeline to build and deploy container images automatically. The pipeline builds images based on Dockerfiles and pushes them to a container registry. In this step, you can provide credentials to your registry to use the pipeline. If you previously installed the internal registry Helm chart, you can skip this step. The external registry is also optional, if you don't want to use the internal build pipeline and deploy images directly from an external registry instead.

## 7. Hostname & IP address

Finally, set up a domain for services deployed on your cluster:
Loadbalancer IP: If an IngressController is running on your cluster, the external loadbalancer IP address of your cluster will usually be filled out automatically. If the IP address is not set automatically, you can enter it manually.
- Loadbalancer Host: Enter a hostname for your cluster. Each service on the cluster that is exposed to the internet will be created under a subdomain of this hostname by default. Later, you can set individual domains in the settings of each service.

Now, create two records of type A in the DNS settings at your domain provider:

|Type|Name (example)|Target|
|---|---|---|
|A|yourdomain.com|LOADBALANCER_IP|
|A|*.yourdomain.com|LOADBALANCER_IP|

:::tip
Working on a local Kubernetes? The host will be set to `local.mogenius.io` if possible. This way, services deployed on your local Kubernetes will receive SSL certificates.
:::
  
**Done - your cluster is ready! 🥳 You can now create your first project and start deploying.**

## 8. Create a project ##

Head to the Projects section in your organization and click Create project. Select your cluster from the list, enter a name for your project and optionally set resource limits. The limits work like a budget for your project, so that you can control how much resources each team can use for their services. If limits are activated, this also acts like a policy for each service, requiring to define resource limits in the service settings. Confirm to create the project.

## 9. Deploy a service ##

Your project is ready. Now you can deploy your first service on the cluster. As an example we'll deploy an application from a Git repository. If you don't have a dockerized application you can also proceed with a template or container image.  
On your project dashboard click Create and select `Repository` from the dropdown menu.

Now enter the details for your service:

| Input field | Comment |
|---|---|
|Service name|The name of your service. It must be unique to the environment and it will be used to create a hostname. |
|Environment|Select the environment that your service should be deployed in. You can leave it at Default right now.|
|Git integration|To set up the Git integration, choose either GitHub, GitLab, or Access Token as your preferred option. Follow the provided instructions to establish the connection between mogenius and your Git host.|
|Repository|Once your integration is active select the repository that you want to deploy from the list.|
|Git Branch|Set the branch that you want to deploy.|
|Dockerfile Name and Docker Context|Per default this is set to search for a 'Dockerfile' at root level in the repository.|

You're ready to create your service. Next, you can add more settings, like environment variables, resource limits, ports, healthchecks, autoscaling, and more. Once you're happy with your settings, click `Start`. This will trigger the build pipeline and once your image is pushed to the container registry, it will be deployed to your cluster. In the background the mogenius operator creates the required workloads on Kubernetes and keeps them up to date when you modify your service in mogenius.

You can view the progress in the logs section on your service page. Each step of the pipeline has its own log for build, Kubernetes events, and pods. The service status indicates the progress of your deployment and any potential issues. Once you see green status for build, deployment, and pods your service is deployed successfully.

**Congratulations on deploying your first service with mogenius 🎉**

:::info
If you need help, please take a look at our [Help & Feedback page](../help-and-feedback/index.md). You can contact us directly if you run into any problems.
:::

