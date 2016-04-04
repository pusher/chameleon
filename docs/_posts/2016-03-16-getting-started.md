---
layout: post
title:  "Getting Started"
categories: chameleon
permalink: /getting-started
---

Chameleon is designed to work with most frameworks. If you find a language or framework doesn't seem to be working, feel free to create a pull request.

## Importing with Sass

Create a new `chameleon_and_globals.scss` file in your sass directory, and add the following:

```scss
@import 'chameleon';
```

This will bring in the core chameleon file. However to reduce bloat, not all patterns are included by default. You can now include the relevant mixins required for your project.

For example, if you only required the grid, typography, and form patterns:

```scss
@include CHAMELEON-grid;
@include CHAMELEON-typography;
@include CHAMELEON-forms;
...
```
***

## Rails
Add chameleon to your `Gemfile`. (An auth key is required as chameleon is a private repo. Feel free to use the one below).

```ruby
gem "pusher_chameleon", :git => "https://d053890360120494d39eae185e62fb33d36263c6:x-oauth-basic@github.com/pusher/chameleon.git"
```

## Jekyll

Add chameleon to your `Gemfile`, and to your `config.yml`

```ruby
gem "pusher_chameleon", :git => "https://d053890360120494d39eae185e62fb33d36263c6:x-oauth-basic@github.com/pusher/chameleon.git"
```

```yaml
# _config.yml
gems [pusher_chameleon]
```