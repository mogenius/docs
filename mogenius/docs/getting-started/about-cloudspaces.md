---
sidebar_position: 2
---

# About Cloudspaces

The cloudspace is your project where you will set up your application and services. After creation your cloudspace is immediately online and accessible through the hostname.

**We handle the following steps in the background when you create a Cloudspace**

- Create and deploy a namespace inside a Kubernetes Cluster on Microsoft Azure
- Create Kubernetes namespace secrets
- Update the ingress setup
- Set up Cloudflare
- Prepare the CI/CD pipeline

Inside your Cloudspace you can add services to build your application by using a pre-configured template or by connecting your Dockerfile.
- [Rely on pre-configured services to start from scratch](./../mogenius-platform/services.md)
- [Use Docker to launch an existing applications](./../services/docker.md)
