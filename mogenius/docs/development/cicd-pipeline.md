---
sidebar_position: 1
---

# CI/CD pipeline

mogenius comes with a built in CI/CD pipeline, so that you can start working on your application and deploy any changes to the cloud immediately.
When creating a service you will connect your Github or Gitlab account to deploy repositories with a Dockerfile.

![connect to github](https://imagedelivery.net/T7YEW5IAgZJ0dY4-LDTpyQ/a1fdf4eb-0e83-4720-f68f-777778127f00/jpeg)

After starting your service, mogenius monitors the selected branch in your repository via webhooks. Each time your branch is updated, a new build of your service is triggered automatically.
This means that after creating a service you can work on your application and with `git push` everything is deployed on your Kubernetes cluster.

If you want to avoid an automated build, you can use `[skip ci]`. mogenius will then ignore changes to a repository whenever the string `[skip ci]` or `[ci skip]` is found in a commit message.  

**Example:** `git commit -m '[skip ci] fix 4711'`

On the CI/CD monitor in your main navigation you have a complete history of builds and can access detailed information about each build in progress.

:::info
CI/CD does not work with services that you have created from a public repository. To keep those services up to date as your code evolves, you must select "Rebuild service" on your service's detail page to deploy the latest state of your repository.
:::

## Workflow and Container Registry

The mogenius build pipeline uses dedicated build servers that run on our infrastructure. The platform handles queues and build agents automatically so that you don't have to configure anything. After a build is completed the Docker image will be pushed to the container registry that was connected with your cluster during setup.