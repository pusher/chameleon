# Pusher Chameleon

[![npm version](https://badge.fury.io/js/pusher-chameleon.svg)](https://badge.fury.io/js/pusher-chameleon) [![Gem Version](https://badge.fury.io/rb/pusher-chameleon.svg)](https://badge.fury.io/rb/pusher-chameleon)

Chameleon is a library of front-end assets that can be used across Pusher. The general layout and grid have been taken from Foundation for Sites, with our custom components and elements added in on top.

## How to use

Chameleon can currently be imported as both a node module, and a ruby gem. Then, import the base chameleon stylesheet in to your project. This includes all of the functions, variables, and mixins that are required:

```sass
// For a node project
@import "~pusher-chameleon/stylesheets/chameleon.scss";

// For a ruby project via sprockets
@import "chameleon";
```

You can pick and choose which components you require, so these will need to be explicitly included:

```sass
@include CHAMELEON-grid;
@include CHAMELEON-typography;
...
```


## Publishing a new version

Follow these steps to publish a new version of Chameleon:

- Ensure you're logged in to npm and RubyGems on your local machine
- Update the version number in `package.json`
- Run `rake chameleon:publish`

This rake task will publish a new version of Chameleon to the npm registry, push to RubyGems, and build a new version of the docs.

## Documentation

[Read the Docs](https://pusher.github.io/chameleon)