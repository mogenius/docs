---
sidebar_position: 2
---

# About Cloudspaces

The Cloudspace is your project where you will set up your application and services. After creation your Cloudspace is immediately online and accessible through the hostname.

**We handle the following steps in the background when you create a Cloudspace**

- Create and deploy a namespace inside a Kubernetes Cluster on Microsoft Azure
- Create Kubernetes namespace secrets
- Update the ingress setup
- Set up Cloudflare
- Prepare the CI/CD pipeline

Inside your Cloudspace you can add services to build your application by using a pre-configured template or by connecting your Dockerfile.
- [About docker upload](#)
- [About services](#)
