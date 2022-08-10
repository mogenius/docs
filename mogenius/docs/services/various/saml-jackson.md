# SAML Jackson

![SAML Jackson logo](https://api.mogenius.com/file/id/2d93c4d9-a322-44da-bf7b-0d7b3a6bfe9d)

**[Documentation](https://boxyhq.com/docs/jackson/overview)**  

**Description**

SAML Jackson is an open-source service provided by [BoxyHQ](https://boxyhq.com/). You can use it to implement SAML SSO authentication in your application with just a few lines of code.  

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,3 | 128 | 128 |

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

## How to deploy  
**Database**  
SAML Jackson requires a database to start, so make sure you have a running database before starting SAML Jackson. In our service template we rely on [Postgres](../databases/postgresql.md), which you can also easily deploy from the mogenius service library. Once you have a database, select SAML Jackson from the service library and follow the instructions.

:::info
Make sure to fill the placeholders in the environment variable `DB_URL` with your Postgres data. Once you entered the details of your Postgres it should look something like this postgres://user:SECRET@postgres-123456:5432/database.
:::

If you want to use another type of database, change the environment variables according to the [Jackson docs](https://boxyhq.com/docs/jackson/deploy/env-variables#database-configuration).

**Admin UI**  
To access the admin UI of your service, you'll need to configure the accepted email domains and connect to an SMTP server to enable magic links when signing in. Follow the [Jackson docs](https://boxyhq.com/docs/jackson/deploy/env-variables#admin-ui-configuration) to set up the environment variables accordingly.  

**Version**  
The service currently uses v1.0.4 of their [official Docker image](https://hub.docker.com/r/boxyhq/jackson). If you want to use a different version, edit the Dockerfile in the repository that mogenius creates in your GitHub account when deploying SAML Jackson. After changing the Dockerfile, your service will rebuild automatically with the updated version.

