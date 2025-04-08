---
sidebar_position: 5
---

# Members & Roles

There's two levels of access management in mogenius: Organization and workspace level. On each level there's a simple set of pre-configured roles that you can use to control permissions within your teams.

## Organization
People joining your organization can have either admin, editor, or viewer role. You can invite members to join your organization from the Members page in your organization.

| Permissions | Admin | Editor | Viewer |
|---|---|---|---|
|Organization| Create, Edit, Delete | View | View|
|Clusters|Add, Edit, Delete| - | - |
|Workspaces|View all workspaces|View by invite|View by invite|
|Templates|Create, Edit, Delete| Create, Edit, Delete | View |
|Members|Add, Edit, Delete|View|View|
|Settings|Edit|View|View|

## Workspace
In a workspace you can invite users to provide them with access to Kubernetes resources. Workspaces rely on Kubernetes RBAC which means that the users and groups you define in the mogenius platform are created and updated on the Kubernetes cluster. You can invite and manage members on the **Team** tab in your workspace settings. There's three pre-defined groups that you can use.

| Permissions | Admin | Editor | Viewer |
|---|---|---|---|
|Workspace|Edit, Delete|View|View|
|Resources|Create, Edit, Delete|Create, Edit, Delete|View|
|Start/stop/restart workloads|✅|✅|-|
|Pipeline tools|✅|✅|-|
|Shell|✅|✅|-|
|Volumes|Create, Edit, Delete|Create, Edit, Delete|View|
|Integrations|Create, Edit, Delete|Create, Edit, Delete|View|
|Team members|Add, Edit, Delete|Add, Edit, Delete|View|
