---
sidebar_position: 3
---

# Stages & Services

This is your overview of stages and the associated services. 

On this page you can:
- Add, manage & delete stages
- Add Services

[Bild header]
By default you will have one production stage set up. If you want to add more stages, click on the settings icon and select "Manage services" Here you can add new ones or delete others. *Please note that at least one production stage must be activated. It is not possible to delete it.

Hostname: The production stage is automatically assigned a hostname. Other hostnames are generated on the basis of the stage name.

More: [About Domains](#)

## Resource widgets
[Bild widgets]

|Type|Unit  |Value|
|--|--|--|
| CPU | allocated |core|
| RAM | allocated |GB|
| Storage | in use |GB|
| Traffic | consumption |GB|
| Temp. Storage | in use |GB|

**Allocated** = the value that already installed services take up.
**In use** = the value of resources already in use
**Consumed** = the value that has already been consumed

In the resource widget you can see the total utilisation of your allocated resources at a stage.  In the widget you will find a percentage list, the available value and the actually used value.
We will inform you if you exceed certain values. If the utilisation exceeds 80%, we display a warning (orange). If the utilisation exceeds 90%, we display an error warning (red).

More: [Resourcemanagement](#)

## The service area

![services](https://api.mogenius.com/file/id/2a76e055-1f0b-496c-88d8-12b6eb3bade6)  
In this area, all installed services are displayed as widgets. For a quick overview, you can see the status and load of the services in each widget. If the service belongs to a group, this is shown at the bottom right of the tile. Service groups show which services work together and access the same secret and environment variables.
