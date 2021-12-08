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
| Optimum | 0,2 |256| 1

[Learn more about how to manage resources for services](#)

**How to deploy DjangoCMS**  
DjangoCMS is a service group, meaning that it bundles several services together and deploys them at once. When creating a DjangoCMS service, mogenius deploys the Django API, an nginx webserver and a MySQL database. They will be available as single services in your cloudspace but they are automatically connected to work together.
To install this service, go to the [service library](#) and switch to Service Groups. Select the service DjangoCMS and click on "Add service". Follow the instructions on the screen and finalise the process by clicking on Create Service.  
We have written a detailed tutorial on [how to launch DjangoCMS with mogenius](#).
