---
sidebar_position: 2
---

# Local Kubernetes

You can connect mogenius with any Kubernetes installation, which means you can also run local setups. The platform comes with dedicated infrastructure for local Kubernetes setups that allows you to create a production-like environment for testing and debugging on local machines.

The local environment allows you to easily deploy any application on Kubernetes on your own and with unseen speed. If you want to avoid waiting time, long feedback loops and potential mismatches between your local setup and cloud-based Kubernetes environment, the local mogenius setup is just for you. 

## Installing Kubernetes

First, you'll need a Kubernetes on your local machine. The following distributions are just a collection but there's many more that will work.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/): The native Docker application for Mac and Windows has a built-in Kubernetes. No further installation required, just open the application settings, go to "Kubernetes" and check the box for "Enable Kubernetes."
- [minikube](https://minikube.sigs.k8s.io/docs/start/): minikube is a local Kubernetes that is easy to set up and mostly dedicated for learning and testing.
- [k3s](https://k3s.io/): k3s is a lightweight Kubernetes distribution which is quickly deployed on local machines.

## Deploying the mogenius operator

To connect your local Kubernetes with mogenius refer to the steps explained on the page [Installing mogenius.](./installing-mogenius.md) After the operator is installed, you'll be asked to install additional services on Kubernetes. Those are pre-configured tools like an IngressController, metrics-server and loadbalancer to get your Kubernetes ready for deployments immediately.

## Enable the local setup

Once all services are installed you can enable your local setup to create an external IP address. This way, your services also receive SSL certificates.

Use the [mogenius CLI](../development/mogenius-CLI.md) to run the following command:
```jsx
mocli cluster local-dev-setup
```

## Your local environment

You're now ready to create a project and start deploying services. Check out the options in [Deploying applications](../deploying-applications/index.md) to deploy the first container on your local Kubernetes. mogenius automatically deploys your applications on Kubernetes and provides you with an easy-to-use interface for observing and managing your containers. You'll work with Kubernetes easily, without the complexity and with unseen productivity!

mogenius has several features that enable you to test applications quickly and deploy them locally, just like on a cloud-based Kubernetes cluster:

### Local build pipeline
A build-in CI/CD pipeline allows you to build and deploy repositories right from Github or Gitlab. Based on a Dockerfile, the repo is built on your Kubernetes and deployed immediately. Read more about deploying from a repository [here.](../deploying-applications/deploy-from-a-repository.md)

### Local container registry
mogenius (optionally) installs a local container registry on your Kubernetes. This way, no external registry is required and your setup is running independantly from other tools.

### MetalLB loadbalancer
One of the optional cluster services that are installed during cluster setup is MetalLB. Together with the cert-manager it provides your services with external hostnames and even SSL certificates to allow proper testing under production-like conditions.

### ImagePullPolicy
One feature in your service setting is the image pull policy. In a local environment you can use it to bring your deployments to real speed. Set it to "Never" in order to automatically pull an image that is already available locally.

## Check out our recorded session about local environments
<iframe width="100%" height="400" src="https://www.youtube.com/embed/VRkZnrwdyvw?si=k6WdDkYDj47SiI28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>