---
sidebar_position: 6
---

# Release notes

## v2.2.4 - 24.05.2024
- **Redesign:** With this release, we're introducing the new design of the mogenius platform. We're providing an  enhanced dark theme as the default and a distinctively improved light mode. The new themes now cater towards the specific use cases of dark and light mode even better. But most importantly, we find they just look great and we hope you feel the same. It's not just a fresh design for the platform; it also marks the starting point for our new design language, `modux`, which we will introduce in the coming weeks — stay tuned!
- **Performance improvements:** We’ve executed a significant overhaul of both the frontend and backend systems, optimizing data retrieval, application architecture, and all frontend components. This results in faster loading speeds, smoother navigation, and more efficient resource utilization.
- **Breadcrumb navigation:** To enhance navigation through projects and services, we've introduced a global breadcrumb system that allows you to quickly move through all organizational levels within the platform.
- **Storage 2.0:** The NFS storage browser has received a major update, improving the overall stability when working with volumes, folders, and files. Additionally, we've introduced enhanced monitoring for the capacity and status of a volume, aggregating the health of NFS pods, persistent volumes, and persistent volume claims from Kubernetes. It is now also possible to change the size of a volume during its creation.
- **New service creation workflow:** We heard your feedback that creating a service could be cumbersome as services were deployed immediately after running through the service creation form. Therefore, we've split the workflow into two stages. First, you'll define the basic settings for the service in a short form. The service is then created but not deployed yet. You'll be taken to the service page where you can review all settings, make additional changes, or add variables. Once you're ready, you can click Start and the deployment will begin.
- **Toggle TLS for service hostnames:** In the service settings, you can now toggle TLS/SSL for external hostnames of your service. When disabled, the hostname will be ignored by the cert-manager on the cluster. This is useful if an external party, like a CDN, is responsible for issuing the TLS certificate instead of your cluster.
- **Toggle service YAML sync:** Previously, a YAML with all your service settings was stored and updated in the repository of a service you deployed. For mono-repos, this can lead to issues, so we've introduced a toggle in the project settings to disable YAML sync for all services in the project.
- **Controlling resource limits for projects:** As an admin, you can now activate or deactivate resource limits for a project in the project settings. If enabled, you'll define a resource budget for the whole project and setting service limits is enforced for each service created in the project. If disabled, developers can create services without limits, so that pods aren't restricted in the amount of resources they claim on the cluster.
- **Improved error monitoring:** The status monitoring for services now shows any Kubernetes events when you hover over a service status. This way, you can immediately identify issues with deployments or pods without browsing through logs.
- **Log search:** Speaking of which, we've introduced a search function for logs. On each log viewer, you'll find a search icon. Search results are highlighted in the logs and if there's multiple results you can scroll through them with Enter.
- **Environment variables during Docker build:** When running a build with the mogenius pipeline you can now use default environment variables during the `Docker build`. The following variables are available via `ARG`: MO_BUILD_ID, MO_GIT_TAG, MO_GIT_COMMIT_HASH, MO_GIT_COMMIT_AUTHOR, MO_GIT_COMMIT_MESSAGE, MO_GIT_BRANCH. You can find examples for the variables in the section [CI/CD pipeline](../development/cicd-pipeline.md).
- **Queued builds in the pipeline:** The pipeline now queues builds and executes them sequentially. This approach avoids performance issues that could arise from triggering multiple builds simultaneously.
- **Active Cluster Sync `Closed beta`:**  We're introducing Active Cluster Sync, which allows you to sync all workloads of a cluster with a Git repository. In the mogenius settings of your cluster, you can define the target repository and a sync strategy. Using the push strategy, your cluster will push all workload YAMLs to the repo and keep them updated in real-time. Using the pull strategy, the cluster will be updated according to any changes in the repo. This allows you to synchronize multiple clusters for redundancy, disaster recovery, multi-cloud strategies, or migrating clusters. The feature is still in closed beta, but you can [contact us](mailto:info@mogenius.com) if you would like to discuss your use cases.

## v2.1.0 - 06.02.2024
- **Renaming instances:** On the service level, we changed the wording from "Instance" to "Pods." This aligns with the common Kubernetes terminology and helps avoid confusion when reading logs, public documentation, or articles.
- **New service status:** We've introduced a new service status system that provides a transparent view of each step in the pipeline: build, deployment, and pods. This change allows for more precise identification of the source of any issues. Errors in these steps are now detailed in the respective logs on the service page.
- **Shell:** After implementing it in `mocli` we've also added the shell to the user interface. You will find it in the header bar on each service page. The shell allows you to directly interact with the container of each pod.
- **Streamed build logs:** Our build logs have been enhanced with real-time streaming, allowing you to monitor the build process as it happens. This feature is available when using the in-cluster build pipeline introduced in v2.0.0. Feel free to contact us if you'd like to switch your cluster to the new pipeline.
- **Custom Kubernetes Deployment Templates:** It's now possible to customize the default configurations for creating deployments on your Kubernetes cluster. You can achieve this by adding a template to your cluster. More information and an example template will be provided shortly.
- **Organisation admins in projects:** Organization admins now appear in the members section of a project by default. This change makes it easier to identify admins for assistance or to request changes.
- **Bugfixes:**
    - The deployment strategy "Rolling" couldn't be selected when creating a new service.
    - In some cases services were displayed in the wrong stage.
    - Using `npm install` in the Dockerfile could lead to a timeout with registry.npmjs.org.

## v2.0.1 - 19.12.2023
- **Multi-domain services:** You can now add multiple domains to a single service. In your service settings open “Ports & Domain.” You’ll find a plus icon next to the domain section where you can add more domains. They will be added to the ingress of your service in Kubernetes and your service will listen to all hostnames. Make sure to set a DNS record to the newly added hostnames.
- **Resource settings:** The resource setting when creating or updating a service received a new UI. We replaced the sliders to adjust resource limits with simple input fields and a table-like layout for better overview.

## v2.0.0 - 07.12.2023
We've been working on this update for quite some time and it includes major improvements in all areas of the mogenius platform. We will describe each feature of this update in dedicated posts and docs articles during the upcoming days. Here's a summary of what's new:

- **Custom service templates:** In addition to public service templates, you can now create your own templates inside each organization. The organization navigation received a new section "Templates" where you can create and edit templates that will be available in each project under "Custom templates".
- **In-cluster build pipeline:** So far, the built-in CI/CD pipeline was running on a managed pipeline in our cloud. We developed a new pipeline that runs on the Kubernetes cluster where you're deploying the service. This allows decentralized pipelines on your own infrastructure, avoids bottlenecks and improves the speed of each build. So far, this is the default for local Kubernetes setups and we'll roll it out to cloud-based clusters shortly. By request we can enable the local pipeline for your cluster individually.
- **Improved local Kubernetes support:** We improved the support of local Kubernetes setups (e.g. Docker Desktop, minikube, k3s) to enable production-like test environments on local machines for Devs and DevOps. This means, after connecting mogenius with your local Kubernetes, a project will provide you with environments that behave just like in the cloud. This setup includes:
  - In-cluster builds
  - A local container registry on your Kubernetes
  - A MetalLB loadbalancer that provides you with an external
  - SSL certificates based on our domain `local.mogenius.io` for each service that you're deploying locally
  - To enable the local setup, make sure that all services are installed on your cluster settings page. To complete it run `mocli cluster local-dev-setup` on your terminal.  
  - Want to see it in action? Bene [recorded a session](https://www.youtube.com/watch?v=w4PVBDPwURQ) about this feature, check it out!
- **Improved cluster connection:** The onboarding of a new Kubernetes cluster received a major update to be easier and faster:
  - To install the mogenius operator you can now decide between a CLI command and installing a Helm chart.
  - After installing the operator, it will automatically detect cluster services that are already present (e.g. a metrics server). You can then decide which services should be deployed additionally (e.g. cert-manager, IngressController, etc.).
  - If an IngressController is installed on a cluster the loadbalancer IP will be added to the cluster settings automatically.
  - Region and cluster type are detected automatically so that you don't need to fill this out manually anymore.
  - The "Connect" tab was removed and the service list was moved to the "Settings" page.
- **Cluster backup:** You can now backup all services, configurations and resources of a cluster with a single YAML. In your cluster settings you'll find a new button on the bottom of the page. You can deploy everything on a new cluster via `kubectl apply -f yourcluster_backup.yaml`. This allows you to either restore a cluster, or to easily migrate workloads from one cluster to another.
- **Cluster analyzer:** Each cluster now has an additional tab "Analyze" which provides a scan for potential misconfigurations in Kubernetes, resource allocation issues, or best practices. The scan is based on the open-source solution Popeye.
- **New log viewer:** The logs on services page were improved for higher performance, reliability, and stability.
- **Service YAML:** When deploying a repository with mogenius, a new folder `.mogenius` will be added to your repo in Github or Gitlab automatically. The folder will hold a YAML file with the configuration of your service in mogenius. If you deploy a repository on multiple stages in mogenius (e.g. Dev, Production) with connections to different branches a YAML for each branch will be created (e.g. main.yaml, dev.yaml). Note that the current version updates the YAML in your repo as the configurations change in mogenius. However, if you change the YAML in your repo the changes are not reflected in mogenius yet. This will be included in future versions.
- **Organization settings**: In each organization you'll now find a section for "Settings" to modify name and metadata of your organization.
- **New role Organization editor:** The role "Organization Editor" was added. This role can edit templates on organization level, create new projects, and manage team members. Editors are not allowed to access clusters or modify organization settings.
- **Image pull policy:** In the service settings we added the option `Image pull policy` which reflects the respective [Kubernetes setting](https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy). This allows you to define how new images a pulled when your containers are starting.
- **UI refactoring and improvements:** The user interface received a major refactoring to improve performance and user experience when navigating through the platform.
- **A ton of bugfixes:** We fixed multiple issues including improved UI responsiveness for different service scenarios, better error handling, and much more.

## v1.6.8 (mocli) - 14.11.2023
- Added service management commands to `start`, `stop`, `restart`, `rebuild`, and `delete` services.
- Added a shell feature to log into each container inside a project.
- Check out the [CLI documentation](../development/mogenius-cli.md) for further details.

## v1.19.0 - 20.09.2023

- **New service type: CronJobs**. Now you can deploy CronJobs to your Kubernetes cluster with mogenius. Read more about CronJobs on [this page](../deploying-applications/cronjobs.md).
- The service type "Bring your own Code" was renamed. It is now called "Repository" to better reflect the fact that this service is created from Github or Gitlab repositories.
- Integrations were moved from the user settings to project level. This way, git integrations are no longer connected to a specific user account. Instead they can be managed by every project admin.
- The built-in NFS storage solution received a new NFS server image. It relies on the latest NFS version 4 and supports file locks. This image is available to new projects created from now on.
- Bugfixes
  - The storage browser received multiple updates fixing errors in the UI and during file uploads.
  - Invitations to organizations and projects failed when users were not registered already.
  - During sign up, some users were not forwarded to their account automatically after confirming their email address.
  - Storage consumption wasn't displayed on the project dashboard correctly.
  - Deleting a service wasn't possible when it's repository didn't exist, or wasn't connected anymore.
  - The wrong organization was displayed in some cases when switching between two organizations.
  - When a build failed the link in the workflow logs didn't point to the CI/CD monitor correctly.
  - Accepting an invite to an organization occasionally returned a 403 error.