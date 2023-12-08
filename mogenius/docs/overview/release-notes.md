---
sidebar_position: 6
---

# Release notes

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