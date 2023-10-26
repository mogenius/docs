---
sidebar_position: 9
---

# Git integration

You can connect mogenius with Git hosts to deploy services directly from your repositories. There's two options to set up a Git integration:
1. In your mogenius profile, go to Integrations
2. When creating a service that relies on a repository you'll be asked to select the integration that you want to use

:::info
If you're running a self-hosted Gitlab instance, you can connect via [Access Token](#access-tokens).
:::

## Connect by login
Select one of the buttons "Connect with Gitlab" or "Connect with Github" to set up the integration using your login credentials from Github or Gitlab. You'll be directed to a page where you login at you Git host. Next, you'll set the scope of the integration and decide if mogenius will have full access to all repositories, or limited access for selected repositories. Once you confirm you'll be redirected back to mogenius and you can continue creating services.   Read more about this [here](../deploying-applications/deploy-from-a-repository.md).

## Access Tokens
Select "Access Token" if you want to connect with Github or Gitlab using a personal access token. Requirements for the token depend on the Git host you're using:

### Github
First, create an access token in your Github account. To do that, go to your settings and in the section "Developer settings" open "Personal access tokens."

Github has two options for creating access tokens. The required permissons depend on the type you select:

**Fine-grained personal access token**
- Either for all repositories, or for selected repositories
- Repository permissions
  - Administration (read/write)
  - Commit statuses (read/write)
  - Contents (read/write)
  - Webhooks (read/write)

**Tokens (classic**)
- repo (Full control of private repositories)
- admin:repo_hook (Full control of repository hooks)

**Finish setup**  
Once you retrieved the token, go back to mogenius integrations and select the option "Access token." Make sure you set the toggle to "Github", enter your access token and confirm.

### Gitlab
With Gitlab there are several scopes in your account where you can create an access token: User, Group, or Project. Depending on your desired scope of permissions, go to the respective settings and open the section "Access Tokens."

**The minimum required permissions are**
- api
- read_repository
- write_repository

:::info
Note that the role `Maintainer` or higher is required for the connected user.
:::

**Finish setup**  
Once you retrieved the token, go back to mogenius integrations and select the option "Access token." Make sure you set the toggle to "Gitlab." If you're connecting to a cloud-hosted Gitlab instance, set the domain to `https://gitlab.com`. For a self-hosted Gitlab instance, enter the domain of your Gitlab, e.g. `https://gitlab.yourcompany.com`. Next, enter your access token and confirm.