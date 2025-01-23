---
sidebar_position: 3
---

# HashiCorp Vault

You can integrate mogenius with an existing HashiCorp Vault instance to import existing keys into your mogenius projects and allow developers to set them as secrets in their services. mogenius relies on the open-source [External secrets operator](https://github.com/external-secrets/external-secrets), which is installed as a Helm chart on your cluster during setup. Once connected to your Vault, the External Secrets Operator stores keys as secrets in Kubernetes, making them available for your mogenius projects. Here’s how to enable the integration in both your Vault instance and mogenius account.


## Prerequisites
- A running instance of HashiCorp Vault on the same Kubernetes cluster connected to your mogenius account.
- Admin access to the Vault instance.
- Access to a mogenius user with the ‘Organization admin’ role.

:::info
Currently, only Vault integrations on the same Kubernetes cluster are supported. Support for external Vaults will be added soon. Feel free to share your individual requirements on our [feedback board](https://feedback.mogenius.com).
:::

## Security considerations
Users in a mogenius project can select keys from your Vault to set them as secrets in their services. However, the keys cannot be decrypted or modified in mogenius. This is only possible with sufficient access to your Kubernetes cluster.

## Prepare HashiCorp Vault
Once Vault is running on your Kubernetes cluster, you must enable authentication for the External Secrets Operator.

### Activate Kubernetes RBAC for Vault

```bash title="Run the following command using Vault CLI"
vault auth enable kubernetes

# Success! Enabled kubernetes auth method at: kubernetes/
```

Next, set the port for your Kubernetes host.

```bash
vault write auth/kubernetes/config \
  kubernetes_host="https://$KUBERNETES_PORT_443_TCP_ADDR:443"

# Success! Data written to: auth/kubernetes/config
```
### Create a role and policy for mogenius

Now, create a policy that grants `read` and `list` permissions for a new role. This role will be used by mogenius to access your Vault’s keys.

Define `ROLE_NAME` by replacing `mo-access-role` with your preferred name. mogenius will also use this name to automatically create a service account. The variable `SECRET_PATH` will be set later in the mogenius platform, representing the path in your Vault to connect with a project.
 
```bash title="Create a new policy"

export ROLE_NAME=mo-access-role # this should be unique per cluster. mogenius will create a service account with this name

vault policy write ${ROLE_NAME} - <<EOF
path "${MO_SECRET_PATH}/*" {
  capabilities = ["read", "list"]
}
EOF
#Success! Uploaded policy: mogenius-external-secrets
```

Then, create a role using the variable defined earlier.

```bash
vault write auth/kubernetes/role/${ROLE_NAME} \
      bound_service_account_names=mo-eso-serviceaccount-${ROLE_NAME} \
      bound_service_account_namespaces=mogenius \
      policies=${ROLE_NAME}

# Success! Data written to: auth/kubernetes/role/mogenius-external-secrets
```

Great! You’ve finished preparing your HashiCorp Vault instance.

## Install the External Secrets Operator

Ensure that the External Secrets Operator is installed on your cluster. mogenius provides a pre-configured Helm chart, which you can enable in your cluster settings.

In your mogenius account, go to **Clusters**, select the cluster where you want to integrate Vault, and navigate to the **Settings** tab. Scroll down to the list of services and activate the toggle for **External Secrets Operator** to start the installation. After a few minutes, the Helm chart will be installed and can be managed in the **Helm** tab of your cluster.

Now you can create an integration with HashiCorp Vault in your mogenius project.

## Set up the integration in your mogenius project

Next, add an integration to a project. Open a project in your mogenius account or create a new one. Go to **Project Settings** and open the **Integrations** tab. Scroll down to **HashiCorp Vault** and add a new integration.

You’ll need to provide the following information:

- **Name of the integration**: An internal name to identify the integration in your project.
- **Role**: The role you specified earlier.
- **Vault Server URL**: The default is `http://vault.vault.svc.cluster.local:8200`, but yours may differ.
- **Secret Path**: The path in your Vault where the keys are stored. Only keys within this path will be available for services in this project. Other mogenius projects won’t have access.

After saving the integration settings, mogenius will test the connection to your Vault. Once you see a **Connected** status, the connection is successfully established.

## How to use the integration

You can now use the keys stored in your Vault in services managed by mogenius. Open a service and go to **Environment Variables** in the settings. Create a new variable and set the type to **Key Vault**. Then, open the secret store dropdown and select the name of your Vault integration. You can now choose a key from the dropdown. The secret containing this key will be used in your service once you save the settings.