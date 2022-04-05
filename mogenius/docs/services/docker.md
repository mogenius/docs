# Docker

![enter image description here](https://api.mogenius.com/file/id/806b2ee7-da69-493f-9c11-3a10c20b866e)

**Useful links**  
**[Website](https://www.docker.com/)**  
**[Documentation](https://docs.docker.com/)**  

**Description**

Docker is a widely used solution to deploy applications inside containers. You can use Docker to launch your existing application with mogenius.

**Resource Requirements**

:::info

The minimum and optimum resource requirements depend on your specific application. It might be useful to check out [our recommendations](./../cloud-management/resource-management.md) for other pre-configured services as a reference.

:::

[Learn more about how to manage resources for services](./../cloud-management/resource-management.md)

**How to deploy your application with Docker**  
To launch your application with a Dockerfile select it from the service library. Connect a repository from your Github account that contains a Dockerfile. After creating your service the application will be built as configered in your Dockerfile. Note that `docker.compose` is not yet supported but will be covered soon. To connect multiple services in your cloudspace with Docker, you need to configure the Dockerfile for each service individually.  

[Read a detailed tutorial on how to create a service with Docker.](./../tutorials/how-to-deploy-docker-in-the-cloud.md)