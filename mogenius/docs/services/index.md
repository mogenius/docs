---
slug: /services
---

# Service list

mogenius supports any application that can be deployed with a Dockerfile. To make this is as simple as possible we created a library of pre-configured service templates, so that can deploy your services right from mogenius without any configuration. This section holds all the service templates we currently offer, sorted by category. You can read about creating a service from template in our [quickstart guide](../getting-started/quickstart.md#1-start-from-scratch-with-a-template).  

To deploy an existing repository, follow the link below "Deploy your service with Docker".

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```