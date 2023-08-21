---
sidebar_position: 6
---

# mocli

With `mocli`, you can observe your Mogenius clusters, projects, services, and more with style right from your command line environment.


:::info
The mogenius CLI is in Beta, with a limited feature set. Follow our release notes to keep track of new features for the it.
:::

## Installation

### Mac, Linux

Use [homebrew](https://brew.sh) to install the `mocli` on your Mac or Linux machines with the following commands:

```jsx
brew tab mogenius/mocli
brew install mocli
```

> Be aware that on Linux with a headless machine, `mocli` would unfortunately not function as it currently requires a browser to login to our platform. TBA...

### Windows

TBA...

```jsx
--- infos will follow ---
```

## Getting Started

You need an account for mogenius to use `mocli`. If you do not have one yet [sign up here](https://app.mogenius.com).

Once you created your account, on your command line run the following command to start.

```jsx
mocli
```

You will initially be taken to your default browser to log in to your Mogenius account. After a successful login, you can go back to your CLI and `mocli` TUI(terminal UI) will take its shape!

## Basic Usage

Once you're inside `mocli`, navigation is as easy as pie. Simple traverse through the lists with your arrow keys. You can select an item with the key `ENTER` and go back with `ESC`.

The colon key `:` is a special key that triggers the command bar. From there on you can perform additional commands. For example, simply type `orgs` to go back to your organisations list wherever you are. Or type `:help` to see a list of all available commands.
