---
sidebar_position: 3
---

# Deploy a template

The service library contains a wide range of templates to deploy pre-configured services, like databases, frameworks, backend or monitoring tools, and many more. To deploy a service template, select your desired application type from the overview and click "Add Service."

When selecting templates you will encounter two types of forms:
- Template container images
- Template repositories

For container images you will see that an image and tag are preset. For template repositories a git integration is required. Select the type of your git integration (Github, Gitlab, or Access Token) and authorize the connection with your git host. You'll then be asked to create a new repository. mogenius will push the boilerplate code from the template to this repository.

Now check the remaining settings and fill in the required fields:

### Ports
Determine the ports that your application uses. mogenius supports HTTPS, TCP and UDP. Use the setting "Expose" to make your application available outside of your project through the specific port.

### Environment variables
This is an optional setting which depends on the application you want to deploy. You can set plain text variables, secrets, or volume mounts.

### Resource limits
Next you can set the resource limits for your service. By default we set some minimum recommendations but you will probably need to adjust them to the specific requirements of your application. Note that you can always change these settings later.

### Create and deploy
Now just click "Create Service" and your repository will be built and deployed as a service to your project. Once the setup routines, build and deployment processes are complete (usually a few minutes at most), you can start using your service by accessing it via it's hostnames. You will find the internal and external hostnames on your service page.
