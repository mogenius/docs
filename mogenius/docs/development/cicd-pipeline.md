---
sidebar_position: 2
---

# CI/CD pipeline

mogenius comes with a built in CI/CD pipeline so that you can start working on your application and deploy any changes to the cloud immediately.
When [creating a service](#) you will connect your Github account so that mogenius can push pre-configured services in an empty repository or to deploy an existing application via container file.

![connect to github](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

After launching your service mogenius will listen to the selected repository. Anytime your repository is updated, a new build of your service will automatically be triggered.
This means, after creating a service you can work on your application and with `git push` everything is deployed to the cloud.

If you want to avoid an automated build you can use `[skip ci]`. mogenius will ignore changes to a repository whenever the string `[skip ci]` or `[ci skip]` is found inside a commit message.  

**Example:** `git commit -m '[skip ci] fix 4711'`

Under the page [CI/CD monitor](#) you will have complete history of builds and canaccess detailed information to any currently running build.