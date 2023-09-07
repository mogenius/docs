---
sidebar_position: 4
---

# CronJob

You can create Kubernetes CronJobs as a service type in mogenius. You can create CronJobs based on a repository, or on a container image. You'll specify the cron schedule and basic settings for your jobs and mogenius will take care of the appropriate configurations and workloads on Kubernetes.

## Create a service
In a project click "+ Add" on your dashboard or inside a stage. From the dropdown select "Cronjob" and on the next page fill in the required fields.

### Source
Each time your job is running a pod will start on your cluster temporarily. The pod requires a base image and you can decide if you want to use an existing image from a registry, or if mogenius should build the image based on a repository from Github or Gitlab.

### Source container image
If you're using an existing image for your CronJob, enter the image path from your container registry and fill in the additional container settings if necessary.  
For more details on these settings refer to [container images](container-images.md).

### Source git repository
If you want to create the base image from a repository, select the repo from your Github or Gitlab account. After creating your service, mogenius will automatically build the image based on a Dockerfile and set it in your CronJob.
You can read more about deploying from a git repository [here](deploy-from-a-repository.md).

### Cron settings
Configure your CronJob with a schedule and some guardrails:
- Cron expression: Your CronJob will be triggered according to this schedule. The syntax follows standardized cron expressions and you can use tools like crontab.guru to easily create your cron expression.
- Number of allowed restarts: If your CronJob fails, this setting determines the number of restarts after which the job is considered unsuccessful. The job will be stopped and executed again according to the schedule.
- Maximum duration in seconds: This sets the limit of seconds that each job is allowed to run. If the job reaches this limit it will be stopped as unsuccessful.

### Resource limits
Next you can set the resource limits for your service. By default we set some minimum recommendations but you will probably need to adjust them to the specific requirements of your application. Note that you can always change these settings later.

### Environment variables
This is an optional setting which depends on the application you want to deploy. You can set plain text variables, secrets, or volume mounts.

### Ports
Determine the ports that your application uses. mogenius supports HTTPS, TCP and UDP. Use the setting "Expose" to make your application available outside of your project through the specific port.

### Create and deploy
Now just click "Create Service" and your CronJob will be created. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), your CronJob is set up successfully.

### Working with the CronJob
The service state indicates what your CronJob is doing on the cluster. Once the CronJob is created it will be in `Active` state until it is triggered. When the job is running the show will be in the state `Running`. If a run was unsuccessful the state will switch to `Error`.

To manually trigger your CronJob open the context menu on your service page and click `Force run CronJob`.



