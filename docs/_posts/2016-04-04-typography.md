---
layout: post
title:  "Typography"
categories: layout
permalink: /layout/typography/
module_import: "CHAMELEON-typography"
---

We have two core fonts: `Realtime Text` and `Proxima Nova`.

Realtime Text is used for titles and elements (such as buttons), whereas Proxima Nova is used for paragraph text.

Title classes use the Greek alphabet as a naming convention. This allows the styled heading to be seperated from the semantic tag.

For example, an H1 and an H6 with a `title--gamma` class, will both visually look the same.

<div class="pattern">
  <h1 class="title--alpha pattern-item">Page title (28px)</h1>
  <br>
  <h2 class="title--beta pattern-item">Section title - (24px)</h2>
  <br>
  <h3 class="title--gamma pattern-item">Section sub-title - (22px)</h3>
  <br>
  <h4 class="title--delta pattern-item">Paragraph title - (18px)</h4>
  <br>
  <h5 class="title--epsilon pattern-item">Paragraph sub-title - (16px)</h5>
  <br>
  <h6 class="title--zeta pattern-item">Paragraph heading - (12px)</h6>
</div>

``` html
<h1 class="title--alpha">H1 - Page title</h1>
<h2 class="title--beta">H2 - Section title</h2>
<h3 class="title--delta">H3 - Section sub-title</h3>
<h4 class="title--gamma">H4 - Paragraph title</h4>
<h5 class="title--epsilon">H5 - Paragraph sub-title</h5>
<h6 class="title--zeta">H6 - Paragraph heading</h6>
```

* * *

## Utility Classes

These classes provide a quick way to change text color and alignment.

<div class="pattern">
  <span class="u-color-primary">I will always be colored with the primary color</span>
  <br>
  <br>
  <span class="u-color-developer">I will always be colored with the developer color</span>
  <br>
  <br>
  <span class="u-color-beta">I will always be colored with the beta color</span>
  <br>
  <br>
  <span class="u-color-snow">I will always be colored with the neutral snow color</span>
  <br>
  <br>
  <span class="u-color-smoke">I will always be colored with the neutral smoke color</span>
  <br>
  <br>
  <span class="u-color-silver">I will always be colored with the neutral silver color</span>
  <br>
  <br>
  <span class="u-color-slate">I will always be colored with the neutral slate color</span>
  <br>
  <br>
  <span class="u-color-black">I will always be colored with the neutral black color</span>
  <br>
  <br>
  <span class="u-color-danger">I will always be colored with the ui danger color</span>
  <br>
  <br>
  <span class="u-color-warning">I will always be colored with the ui warning color</span>
  <br>
  <br>
  <span class="u-color-success">I will always be colored with the ui success color</span>
</div>

```html
<span class="u-color-primary">I will always be colored with the primary color</span>
<span class="u-color-developer">I will always be colored with the developer color</span>
<span class="u-color-beta">I will always be colored with the beta color</span>
<span class="u-color-snow">I will always be colored with the neutral snow color</span>
<span class="u-color-smoke">I will always be colored with the neutral smoke color</span>
<span class="u-color-silver">I will always be colored with the neutral silver color</span>
<span class="u-color-slate">I will always be colored with the neutral slate color</span>
<span class="u-color-black">I will always be colored with the neutral black color</span>
<span class="u-color-danger">I will always be colored with the ui danger color</span>
<span class="u-color-warning">I will always be colored with the ui warning color</span>
<span class="u-color-success">I will always be colored with the ui success color</span>
```

<div class="pattern u-text-align-center">
  <span>I will be aligned centrally on desktop and tablet, and left aligned on mobile</span>
</div>

```html
<div class="u-text-align-center">
  <span>I will be aligned centrally on desktop and tablet, and left aligned on mobile</span>
</div>
```

<div class="pattern u-text-align-right">
  <span>I will be aligned to the right</span>
</div>

```html
<div class="u-text-align-right">
  <span>I will be aligned to the right</span>
</div>
```
