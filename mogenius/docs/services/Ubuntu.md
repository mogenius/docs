# Ubuntu

![Ubuntu logo](https://api.mogenius.com/file/id/afe76ebc-385d-46aa-b846-85aa7d105f1d)

**[Website](https://ubuntu.com/)**  

**Description**

Ubuntu is an open-source Linux distribution based on Debian. The mogenius Ubuntu service launches an Ubuntu 18.04 server based on [https://github.com/rastasheep/ubuntu-sshd](https://github.com/rastasheep/ubuntu-sshd).

:::info
The current service version does not support persistancy yet, which means that the server will reset if the service is restarted.  
We are working on an update to fix this.
:::

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,5 | 512 | 300 |

[Learn more about how to manage resources for services](./../cloud-management/resource-management.md)

**How to deploy**  
To set up Ubuntu, you can add it as a service to your cloudspace. Select Ubuntu from the service library and follow the instructions. You will be asked to create a repository for this service. This will contain a Dockerfile that holds major configuration details. Therefore you should set the repository visibility to "private".  

Once the service is running, you can connect to the server:  
`ssh root@tcp-dev.mogenius.io -p 53144`  


The default password is `test1234`, please change it immediately through the Dockerfile.
