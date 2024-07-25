---
sidebar_position: 4
---

# CronJob

You can create Kubernetes CronJobs as a service type in mogenius. You can create CronJobs based on a repository, or on a container image. You'll specify the cron schedule and basic settings for your jobs and mogenius will take care of the appropriate configurations and workloads on Kubernetes.

## Create a service
In a project click "+ Create" on your dashboard or inside an environment. From the dropdown select "Cronjob" and on the next page fill in the required fields.

### Source
Each time your job is running a pod with a container will start on your cluster temporarily. The container requires a base image and you can decide if you want to use an existing image from a registry, or if mogenius should build the image based on a repository from Github or Gitlab.

### Source container image
If you're using an existing image for your CronJob, enter the image path from your container registry and fill in the additional container settings if necessary.  
For more details on these settings refer to [container images](container-images.md).

### Source git repository
If you want to create the base image from a repository, select the repo from your Github or Gitlab account. After creating your service, mogenius will automatically build the image based on a Dockerfile and set it in your CronJob.
You can read more about deploying from a git repository [here](deploy-from-a-repository.md).

### Cron settings
Configure your CronJob with a schedule and some guardrails:
- Failed job history: The number of failed jobs that should be stored on the logs page of your service, to access past logs of your cronjob.
- Succeeded job history: The number of succeeded jobs that should be stored on the logs page of your service, to access past logs of your cronjob.
- Cron expression: Your CronJob will be triggered according to this schedule. The syntax follows standardized cron expressions and you can use tools like [crontab.guru](https://crontab.guru) to easily create your cron expression.
- Number of allowed restarts: If the job fails the pod will be restarted automatically. This setting determines the number of restarts after which the job is considered unsuccessful. The pod will be killed and and the job is executed again according to the schedule.
- Maximum duration in seconds: This sets the limit of seconds that each job is allowed to run. If the job reaches this limit it will be stopped as unsuccessful.

Click "Create" and your Cronjob will be created in draft mode. You can now review additional settings, like Resource limits, environment variables, ports, and health checks.

Once you're ready, click "Start." Your Cronjob will now be deployed on Kubernetes and the first job will be scheduled. You can navigate to the logs tab of your Cronjob to monitor your jobs.

## Force run

To manually trigger your Cronjob use the button `Force run CronJob` in the action bar on your service page. A job will be triggered immediately, regardless of your Cron schedule. The schedule will not be interrupted by this action. 



