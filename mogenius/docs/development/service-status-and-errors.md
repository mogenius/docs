---
sidebar_position: 11
---

# Service status and errors

Each service in mogenius has several status components that provide real-time information about the health of your application in Kubernetes, as well as build and deployment pipelines. To ensure that status information are actionable for each developer, the platform aggregates data from several resources and abstracts complexity wherever it is possible and useful. 

## Container images

## Repositories

## Cronjobs

Cronjobs consist of several resources in Kubernetes which can make it difficult to interprete the status of a Cronjob correctly. You can read more about how to read the service status here.
- Cronjob: This status is green if the Cronjob is deployed and scheduled on your cluster. Your can use the `Stop` button to delete the Cronjob.
- Job: This status is only shown if a job is currently running or if there's a failed job in your history.
- Pod: To initiate a job, Kubernetes starts a Pod for each run of your Cronjob. Therefore, this status is only shown if a job is currently running. A green status indicates that the job was started successfully. If a Pod is in a red error state
- Job history: