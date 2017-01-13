---
layout: post
title:  "Visibility"
subtitle: "There are a number of utility classes, including a set of visibility classes. These allow content to be hidden under certain circumstances (for example at differing screen sizes)."
categories: layout
permalink: /layout/visibility/
module_import: "CHAMELEON-visibility-classes"
---

Each breakpoint has it's own set of classes that can be used:

```sass
$breakpoints: (
  small: 0,
  medium: 640px,
  large: 1024px,
  xlarge: 1200px,
  xxlarge: 1440px,
);
```

``` html
<div class="hide-for-small"></div>
<div class="hide-for-large"></div>
...
<div class="show-for-medium"></div>
<div class="show-for-xlarge"></div>
...
```
