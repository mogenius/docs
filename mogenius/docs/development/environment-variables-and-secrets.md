---
sidebar_position: 3
---

# Environment variables & secrets

A typical use case that envolves environment variables is an application that relies on a database. You will want the application to access the database in a robust and secure way. We considered this when building mogenius and there are some built in features that help you when working with environment variables.

You can define environment variables for each service at its creation ([more on creating services](#)). Every secret will be encrypted and then stored in the [Key Vault](#). To use a specific secret in one of your services you will call its name to receive the encrypted key. In some cases, like with phpMyAdmin this is already part of the process of creating the service (see for example [Launching phpMyAdmin with MariaDB](#)). This way a secret is never written out in any code is instead called in a secure way from the Key Vault.