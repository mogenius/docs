# Ghost CMS

![Ghost logo](https://api.mogenius.com/file/id/8a5ce9eb-63cd-4fb0-935c-4859ba304ea9)

**[Website](https://ghost.org/)**  
**[Documentation](https://ghost.org/docs/)**  

**Description**

Ghost is a light-weight headless CMS based on a modern Node.js tech stack. It's fast and efficient with great capabilities to cover developer requirements, like an API-driven approach and the option to choose between using the default Ghost front-end, or a popular framework (Next.js, Gatsby, VuePress etc.).

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,4 | 512 | 512 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To start a new Ghost project, you can deploy it as a service to your cloudspace. Select Ghost from the service library and follow the instructions.  
You'll be asked to create a new repository in the process. This will hold the Dockerfile for Ghost and you can use it to control the version your Ghost CMS uses.

By default your Ghost project will run on SQlite, so no database is required to get started.  
You can access your Ghost site through the external hostname of your service. Access the admin panel through /ghost to start working with your project.