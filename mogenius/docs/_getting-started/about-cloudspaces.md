---
sidebar_position: 3
---

# About cloudspaces

A cloudspace is your project where you will set up your application and services. After creation your cloudspace will be immediately online and accessible via the hostname.

![cloudspace structure](https://api.mogenius.com/file/id/a89ae14f-8a37-4a05-999e-f6b80380a877)

**We do the following steps in the background when you create a cloudspace**

- Create and deploy a namespace in a Kubernetes Cluster on Microsoft Azure
- Create Kubernetes namespace secrets
- Update the ingress setup
- Set up Cloudflare
- Prepare the CI/CD pipeline

Within your cloudspace you can add services to build your application using a pre-configured template or by connecting to a Dockerfile.
- [Rely on pre-configured services to start from scratch](./../mogenius-platform/services.md)
- [Use Docker to launch an existing application](./../services/docker.md)
