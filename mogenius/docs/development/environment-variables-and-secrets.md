---
sidebar_position: 3
---

# Environment variables & secrets

A typical use case for environment variables is an application that relies on a database. You  want the application to access the database in a robust and secure way. We took this into account with built in features to help you work with environment variables.

You can define environment variables for each service as it is created ([more on creating services](#)). Each secret is encrypted and then stored in the [Key Vault](#).  To use a particular secret in one of your services, call its name to get the encrypted key. In some cases, such as phpMyAdmin, this is already part of the process of creating the service (see for example [Launching phpMyAdmin with MariaDB](#)). This way, a secret is never written in code, but retrieved from the Key Vault in a secure way.