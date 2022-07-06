# Meilisearch

![Meilisearch logo](https://api.mogenius.com/file/id/8caf409d-23b1-4871-ab96-de54052c47ca)

**[Website](https://www.meilisearch.com/)**  
**[Documentation](https://docs.meilisearch.com/)**  

**Description**

An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflows.

**Resource Requirements**

||CPU (Core)|RAM (MB)  |Temp. storage (MB)|
|--|--|--|--|
| Minimum | 0,3 | 256 | 256 |

[Learn more about how to manage resources for services](./../../cloud-management/resource-management.md)

**How to deploy**  
To set up Meilisearch, you can add it as a service to your cloudspace. Select Meilisearch from the service library and follow the instructions. The service currently uses v0.27.0 of the [official Meilisearch Docker image](https://hub.docker.com/r/getmeili/meilisearch). If you want to use a different version, edit the Dockerfile in the repository that mogenius creates in your GitHub account when deploying Meilisearch. After changing the Dockerfile, run `Rebuild` from the service detail page to let the changes take effect.