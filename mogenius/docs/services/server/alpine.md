# Alpine

![Alpine logo](https://api.mogenius.com/file/id/4b5ddb6d-7852-4ef3-b74d-5506aba63ed4)

**[Documentation](https://docs.alpinelinux.org/user-handbook/0.1a/index.html)**  

**Description**

Alpine is an open-source Linux distribution based on musl and BusyBox. The mogenius Alpine service launches an Alpine 3.15 server.

:::info
The current service version does not support persistancy yet, which means that the server will reset if the service is restarted.  
We are working on an update to fix this.
:::

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,1 | 16 | 10 |

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

**How to deploy**  
To set up Alpine, you can add it as a service to your cloudspace. Select Alpine from the service library and follow the instructions. You will be asked to create a repository for this service. This will contain a Dockerfile that holds major configuration details. Therefore you should set the repository visibility to "private".  

Once the service is running, using your external hostname and port, you can connect to the server. Using the credentials you defined at service creation, you can now open an SSH connection:  
`ssh [user]@tcp-mo2.mogenius.io -p [your port]`.  
