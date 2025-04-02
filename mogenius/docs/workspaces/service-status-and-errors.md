---
sidebar_position: 11
---

# Service status and errors

Each service in mogenius has several status components that provide real-time information about the health of your application in Kubernetes, as well as build and deployment pipelines. To ensure that status information is actionable for each developer, the platform aggregates data from several resources and abstracts complexity wherever it is possible and useful. 

## Container images
Services deployed directly from a container registry have two status components:
- Deployment: This status tracks the health of the deployment on Kubernetes. If this status shows an error, it usually relates to issues during deployments. You’ll find details about each issue in the Events log on your service page.
- Pod: This status element displays the health of each pod of your service. Once a deployment is successful, a green pod status should indicate the successful creation of one or more pods. If a pod is in an error state, the service log will usually show an issue that led to a crash of the application. If the crash is related to a scheduling issue, check the Events log for any deployment-related information.

## Repositories
In addition to deployment and pod status, services that are created based on a repository have an additional build status. This monitors the status of the recent build of this service in the internal build pipeline. If the build status indicates an error, you will find a detailed log in the build logs. In this case, no deployment will be triggered, and your most recent successful deployment won’t be affected.

## Cronjobs
Cronjobs consist of several resources in Kubernetes, which can make it difficult to interpret the status of a Cronjob correctly. You can read more about how to interpret the service status here.
- Cronjob: This status is green if the Cronjob is deployed and scheduled on your cluster. You can use the Stop button to delete the Cronjob.
- Job: This status is only shown if a job is currently running or if there’s a failed job in your history.
- Pod: To initiate a job, Kubernetes starts a pod for each run of your Cronjob. Therefore, this status is only shown if a job is currently running. A green status indicates that the job was started successfully. If a pod is in a red error state, the last job terminated with an error state.
- Job history: The job history shows status and logs for current as well as recent jobs.

## Operator log
Most actions performed in the mogenius platform by a user are handled by the mogenius operator on the Kubernetes cluster to create, update, or delete the required resources in Kubernetes. If the operator encounters an error while executing a certain job, the error message will be logged in the operator log on your service page.