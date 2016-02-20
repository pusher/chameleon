# About

### <a id="introduction"></a>Introduction

Chameleon is a collection of patterns and front-end files that are used across the front-end of Pusher's products. The long-term goal, is to slowly migrate our existing repos (splash, dash, blog etc), to use one code base.

### Isn't this overcomplicating things?

CSS is a super easy language to write, which makes it very hard to manage. Chameleon has several core aims:
- Make it easier to get started on 'Pusher' projects. Projects that require front-end assets, such as colors and form elements, are already defined in Chameleon. Just include the required repo (npm/gem) and you're away.
- Reduce repetition. There are many patterns that are shared across projects. Chameleon aims to reduce the need to have to update the same code in different places.

------

## Sass Layout
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