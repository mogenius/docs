# Mosquitto

![Mosquitto logo](https://api.mogenius.com/file/id/6f35382b-d700-431e-a2b0-7872c0e31da1)

**[Website](https://mosquitto.org)**  
**[Documentation](https://mosquitto.org/documentation/)**  

**Description**

Eclipse Mosquitto is a leightweight open source message broker that implements the MQTT protocol. The MQTT protocol relies on a publish/suscribe model to carry out messages which makes it suitable for Internet of Things use cases.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,2 | 64 | 100 |

[Learn more about how to manage resources for services](./../../development/resources.md)

**How to deploy**  
To set up Mosquitto, you can add it as a service to your cloudspace. Select Mosquitto from the service library and follow the instructions. You will be asked to create a repository for this service. This will contain a Dockerfile that holds major configuration details. Therefore you should set the repository visibility to "private".  

To connect to your Mosquitto service use the external hostname. Per default the authentication is set to username 'mogenius' and password 'mogenius'. You should change this immediately in the Dockerfile.

There is also a detailed tutorial available on [how to launch Mosquitto with mogenius](./../../tutorials/how-to-deploy-mosquitto-in-the-cloud.md).

