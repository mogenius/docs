---
sidebar_position: 6
---

# Release notes

## v.1.19.0 - 20.09.2023

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