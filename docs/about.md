# About

### <a id="introduction"></a>Introduction

Chameleon is a collection of patterns and front-end files that are used across the front-end of Pusher's products. The long-term goal, is to slowly migrate our existing repos (splash, dash, blog etc), to use one code base.

### Isn't this overcomplicating things?

CSS is a super easy language to write, which makes it very hard to manage. Chameleon has several core aims:
- Make it easier to get started on 'Pusher' projects. Projects that require front-end assets, such as colors and form elements, are already defined in Chameleon. Just include the required repo (npm/gem) and you're away.
- Reduce repetition. There are many patterns that are shared across projects. Chameleon aims to reduce the need to have to update the same code in different places.

------

## Sass
### General layout of the repo

Patterns are developed using placeholder selectors (which aren't compiled). The benefit of this, is that when the library is included in a project, only selective components will be compiled.

```scss
//----------------------------
// Buttons
//----------------------------

%button {
  @extend %PUSHER-font-weight-light;

  border-radius: 3px;
  box-shadow: none;
  color: #fff;
  ...
}
```

In order to compile a usable `.button` class, the class should be written to inherit from the placeholder selector. For example:

```scss
.button {
  @extend %button
}
```

### Variables

In order to avoid confusion with project specific variables, Chameleon variables have been prefixed with `PUSHER`.

```scss
$PUSHER-font-weight-light: 200;
...
$PUSHER-color-primary: #6EC8FB;
```

Pattern specific patterns are then namespaced with `PUSHER` and the pattern name:

```
$PUSHERmodal-max-width: 640px;
```

## Adding patterns
### What should be added?

If a pattern is, or is likely to be, repeated across several projects (splash, dash, blog, demos etc.), then it's probably worth adding it here. Only the highlevel pattern should be added.

### Format

As patterns are likely to be used across platforms, only the very base styles should be added. Where possible, margins and transforms shouldn't be used. Moving a pattern up by `10px` here, will affect it everywhere where it is referenced.

Project level changes to patterns should be made in the project itself.

### BEM
Patterns should inherit the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) methodology. Likewise, the pattern scope class should be free of any context bias. For example:

```scss
// Bad - The pattern name shouldn't reference the context in which the pattern is used.
.sidebar-widget-navigation {
  ...
}

// Good
.secondary-nav-block {
  ...
}
```