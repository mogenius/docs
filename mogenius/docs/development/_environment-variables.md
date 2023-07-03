---
sidebar_position: 5
---

# Environment variables

You can define environment variables for each service during setup or later.  To use a particular secret in one of your services, call its name to get the encrypted key. In some cases, such as phpMyAdmin, this is already part of the process of creating the service (see for example [Launching phpMyAdmin with MariaDB](./../tutorials/how-to-set-up-mariadb-and-phpmyadmin-in-the-cloud.md)). This way, a secret is never passed in plain text, but retrieved from the Key Vault in a secure way.