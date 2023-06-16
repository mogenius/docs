---
slug: /deploying-applications
---

# Deploying applications

The mogenius platform offers several ways of deploying containerized applications to a Kubernetes cluster. Currently we support deploying services from git repositories, container registries and templates. We're extending these options soon by features like Docker compose, Helm charts, Terraform modules and more.

You will find details about creating each service type on the pages below:

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```