---
layout: post
title:  "Typography"
categories: layout
permalink: /layout/typography/
---

We have two core fonts: `Realtime Text` and `Proxima Nova`.

Realtime Text is used for titles and elements (such as buttons), whereas Proxima Nova is used for paragraph text.

Title classes use the Greek alphabet as a naming convention. This allows the styled heading to be seperated from the semantic tag.

For example, an H1 and an H6 with a `title--gamma` class, will both visually look the same.

<div class="pattern">
  <h1 class="title--alpha">H1 - Page title</h1>
  <br>
  <h2 class="title--beta">H2 - Section title</h2>
  <br>
  <h3 class="title--delta">H3 - Section sub-title</h3>
  <br>
  <h4 class="title--gamma">H4 - Paragraph title</h4>
  <br>
  <h5 class="title--epsilon">H5 - Paragraph sub-title</h5>
  <br>
  <h6 class="title--zeta">H6 - Paragraph heading</h6>
</div>

``` html
<h1 class="title--alpha">H1 - Page title</h1>
<h2 class="title--beta">H2 - Section title</h2>
<h3 class="title--delta">H3 - Section sub-title</h3>
<h4 class="title--gamma">H4 - Paragraph title</h4>
<h5 class="title--epsilon">H5 - Paragraph sub-title</h5>
<h6 class="title--zeta">H6 - Paragraph heading</h6>
```