# Working with persistent storage

Each cloudspace has access to managed persistent NFS storage. On the dashboard, you can see how much storage is available in your plan and how much of it you have already used. In the Free plan, for example, this is 4GB of storage.

Every service in your cloudspace can access the storage by creating a `volume mount` in the service settings. Here is an example of what this looks like for a MySQL database.

Create the volume mount as an environment variable and define the path where your service's data is stored.
![volume mount](https://api.mogenius.com/file/id/baf99668-2cab-4a41-ac60-a90fbe5a311e)

Additionally, you always need to change the owner to a non-root user by defining an `CHANGE_OWNER` environment variable. For security reasons it is not possible to access storage of a service as the root user (See also the [instructions at creating a service](./deploying-services.md#deploy-your-own-code-using-docker)). The `CHANGE_OWNER`variable should look something like this.
![change owner](https://api.mogenius.com/file/id/a3024485-38e4-4d47-9a8e-0485aab46260)

You can also manage paths and files inside your storage with your [File Browser](./../mogenius-platform/file-browser.md).