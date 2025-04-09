---
sidebar_position: 9
---

# mogenius CLI

With `mocli`, you can observe your mogenius clusters, workspaces, resources, and more with style right from your command line environment.

:::info
The mogenius CLI is in Beta, with a limited feature set. Follow our release notes to keep track of new features.
:::

## Installation

### Mac, Linux

Use [homebrew](https://brew.sh) to install the `mocli` on your Mac or Linux machines with the following commands:

```jsx title="Install mocli"
brew tap mogenius/mocli
brew install mocli
```

> Be aware that on Linux with a headless machine, `mocli` would unfortunately not work as it currently requires a browser to log in to our platform.

### Windows

```jsx title="Install mocli"
scoop bucket add mocli https://github.com/mogenius/homebrew-mocli
scoop install mocli
```

## Getting Started

You need an account for mogenius to use `mocli`. If you do not have one yet [sign up here](https://app.mogenius.com).

Once you created your account, on your command line run following command. Your browser will open to log you in on the CLI with your mogenius account.

```jsx title="Launch the CLI"
mocli login
```

## Connecting a cluster

You can use the CLI to install the mogenius operator on your Kubernetes cluster. Follow the steps to connect your cluster:
1. 

