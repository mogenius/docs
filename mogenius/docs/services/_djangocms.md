---
sidebar_position: 15
---

# DjangoCMS

![docusaurus logo](https://api.mogenius.com/file/id/48fec170-05df-434e-9462-c2cf434c5eb2)

**Useful links**  
**[Website](https://www.django-cms.org/en/)**  
**[Documentation](https://docs.django-cms.org)**  

**Description**

django CMS is a free and open source content management system platform for publishing content on the World Wide Web and intranets. It is written in Django language framework, with Python.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. Storage (MB)|
|--|--|--|--|
| Minimum | 0,2 |256| 100

[Learn more about how to manage resources for services](./../cloud-management/resource-management.md)

**How to deploy DjangoCMS**  
DjangoCMS is a service group, which means that it bundles multiple services and deploys them at once. When you create a DjangoCMS service, mogenius provides the Django API, an nginx web server, and a MySQL database. They will be available as individual services in your cloudspace, but are automatically connected to work together.
To install this service, go to the [service library](./../mogenius-platform/service-library.md) and switch to Service Groups. Select the service DjangoCMS and click  "Add service". Follow the instructions and finalize the process by clicking "Create Service".  
There is a detailed tutorial available on [how to launch DjangoCMS with mogenius](#).
