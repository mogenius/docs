# CI/CD pipeline

mogenius comes with a built in CI/CD pipeline, so that you can start working on your application and deploy any changes to the cloud immediately.
When [creating a service](./deploying-services.md) you will connect your Github account to allow mogenius to push preconfigured services to an empty repository or deploy an existing application via container file.

![connect to github](https://api.mogenius.com/file/id/88626d92-fa15-4d9e-8598-6a914daa633c)

After starting your service, mogenius monitors the selected repository. Each time your repository is updated, a new build of your service is triggered automatically.
This means that after creating a service you can work on your application and with `git push` everything is deployed in the cloud.

If you want to avoid an automated build, you can use `[skip ci]`. mogenius will then ignore changes to a repository whenever the string `[skip ci]` or `[ci skip]` is found in a commit message.  

**Example:** `git commit -m '[skip ci] fix 4711'`

On the CI/CD monitor in your main navigation you have a complete history of builds and can access detailed information about each build in progress.

:::info
CI/CD does not work with services that you have created from a public repository. To keep those services up to date as your code evolves, you must select "Rebuild service" on your service's detail page to deploy the latest state of your repository.
:::