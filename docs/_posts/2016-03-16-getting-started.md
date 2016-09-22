---
layout: post
title:  "Getting Started"
categories: chameleon
permalink: /chameleon/getting-started
---

Chameleon is designed to work with most frameworks. If you find a language or framework doesn't seem to be working, feel free to create a pull request.

## Importing with Sass

Create a new `chameleon_and_globals.scss` file in your sass directory, and add the following:

```scss
@import 'chameleon';
@include CHAMELEON-base;
```

This will bring in the core chameleon file, and the base styles (reset and box model). However to reduce bloat, not all patterns are included by default. You can now include the relevant mixins required for your project.

For example, if you only required the grid, typography, and form patterns:

```scss
@include CHAMELEON-grid;
@include CHAMELEON-typography;
@include CHAMELEON-forms;
...
```