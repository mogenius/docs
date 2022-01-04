---
sidebar_position: 4
---

# Known issues

:::info
Since mogenius is still in the closed alpha phase, the number of users on the platform is currently limited. If you have not yet gained access, we recommend that you register for the beta on our [website](https://mogenius.com). We will open the doors for the beta soon and notify you when we are ready.
:::

**For Alpha testers, here is a list of known issues that you won't need to report.**

|Area|Description|
|---|---|
|Main navigation| The CI/CD monitor page is still under development. However, you can already use the built in CI/CD features. For more information [read here](../development/cicd-pipeline.md).|
|Services|When creating a service the state will switch to "Running" once the build process is finished. When opening the service URL immediately you might still receive an error that the page is not available. After a few seconds you can refresh the page and should see the mogenius logo.|
|Stages & Services|An active service will indicate his resource consumption on the page Stages & Services. The colors may indicate that a service is reaching his resource limit (orange, red). This is not functional yet, instead focus on the consumption in percentage for every resource.|
|||