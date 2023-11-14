---
sidebar_position: 6
---

# mogenius CLI

With `mocli`, you can observe your mogenius clusters, projects, services, and more with style right from your command line environment.


:::info
The mogenius CLI is in Beta, with a limited feature set. Follow our release notes to keep track of new features.
:::

## Installation

### Mac, Linux

Use [homebrew](https://brew.sh) to install the `mocli` on your Mac or Linux machines with the following commands:

```jsx title="Install mocli"
brew tab mogenius/mocli
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

Once you created your account, on your command line run the following command to start.

```jsx title="Launch the CLI"
mocli
```

You will initially be taken to your default browser to log in to your Mogenius account. After a successful login, you can return back to your CLI and `mocli` TUI (terminal UI) will take its shape.

## Navigation and service management

Once you're inside `mocli`, navigation is simple. Move through the lists with your arrow keys. You can select an item with the key `ENTER` and go back with `ESC`.

The colon key `:` triggers the command bar. From there on you can perform additional commands. For example, simply type `orgs` to go back to your organizations list wherever you are. Type `help` to see a list of all available commands.

If you're navigating to a specific service you can perform certain actions. Open the command bar `:` and enter your command to `start`, `stop`, `restart`, `rebuild`, or `delete` the selected service.

## Shell

Using the CLI you can launch a shell to access the containers inside each of your projects. Just select a service from one of your projects and you will see a shell item for each instance of your service. It will open a shell based on your default terminal application.
