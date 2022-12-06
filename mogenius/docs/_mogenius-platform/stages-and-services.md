# Stages & Services

Here you will find an overview of the stages and installed services. 

On this page you can:
- Add, manage & delete stages
- Add Services

[Bild header]
By default, you have set up one production stage. If you want to add more stages, click the settings icon and select Manage Services. Here you can add new stages or delete others. *Please note that at least one production stage must be enabled. It is not possible to delete it.

Hostname: A hostname is automatically assigned to the production stage. Other hostnames are generated based on the stage name.

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

**Allocated** = the value claimed by already installed services.
**In use** = the value of resources already in use
**Consumed** = the value that has already been consumed

In the resources widget you can see the total utilization of the resources assigned to you in a stage.  In the widget you will find a percentage listing, the available value and the actually used value.
We will inform you if you exceed certain values. If the utilization exceeds 80%, a warning (orange) will be displayed. If the utilization exceeds 90%, an error warning (red) is displayed.

More: [Resourcemanagement](#)

## The service area

![services](https://api.mogenius.com/file/id/2a76e055-1f0b-496c-88d8-12b6eb3bade6)  
In this area, all installed services are displayed as widgets. For a quick overview, you can see the status and load of the services in each widget. If the service belongs to a group, this is shown at the bottom right of the tile. Service groups show which services work together and access the same secret and environment variables.
