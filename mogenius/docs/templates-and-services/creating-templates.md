---
sidebar_position: 1
---

# Creating templates

The template section in your organization allows you to create and manage service templates for each project. This way, you can configure services once and each team can re-use them. With custom templates you avoid errors with service configurations, set standards in your organizations, and improve productivity by eliminating repeating tasks.

To create a new template, go to "Templates" in your organization and click the plus icon. In the template form you can pre-define the settings of a service and control the configurations that can later be used by teams in each project.

Use the reference below to create your template. Note that you can always save it in an unpublished state and test the template in any of your projects. Your team will only see the template after you published it.

| Input field | Comment |
|---|---|
|Template details| Use these fields to describe your service template and to deliver any relevant details for users of the template. Tags will be used to sort templates in the template library by category. |
|State|If you save your template in an unpublished state, it will only be available to organization admins. This allows you to test your template in any project. Once it's published it can be used by everyone with the role "Project editor" or higher.|
|App type|Set the reference for your template. The type repository acts as boilerplate code. When the template is deployed, users are asked to create a new repository to which the template repository will be cloned. If you set the type to container image you can define an imagine and version that will be pre-set for services.|
|Setup commands|When deploying a repository template you can define setup commands that will be executed after checking out the template repository. You can use these commands for example to seed files in the service's repository.|
|Resource limits|Pre-define the settings for resource limits. Those will be minimum settings for resource limits and users can increase them later in their service individually. This way, you can make sure that services created from your template have enough resources to start properly.|
|Port settings|Define one or more ports that will be pre-set for the template service. These settings help to avoid errors and they can later be changed by users.|
|Environment variables|When defining environment variables you set types, names, and values for each variable. Furthermore, with the lock toggles you can configure which fields can be modified by users and if they can delete a variable from the service settings. If you leave name or value of a variable empty, the user can fill them out later. Setting the type to `Key Vault` will require the user to store the variable value as an encrypted secret.|
