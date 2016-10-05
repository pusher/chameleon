# About

Chameleon is a library of front-end assets that can be used across Pusher. The general layout and grid have been taken from Foundation for Sites, with our custom components and elements added in on top.

# Publishing a new version

Follow these steps to publish a new version of Chameleon:

- Ensure you're logged in to npm and RubyGems on your local machine
- Update the version number in `package.json`
- Run `rake chameleon:publish`

This rake task will publish a new version of Chameleon to the npm registry, push to RubyGems, and build a new version of the docs.

# Documentation

[Read the Docs](https://pusher.github.io/chameleon)