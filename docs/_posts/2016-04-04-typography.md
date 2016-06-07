---
layout: post
title:  "Typography"
categories: layout
permalink: /layout/typography/
---

We have two core fonts: `Realtime Text` and `Proxima Nova`.

Realtime Text is used for titles and elements (such as buttons), whereas proxima nova is used for paragraph text.

There are no base typography classes. Everything is inherited through the heading tags.

For the most part header styles should be inherited through the appropriate semantic tag, however where this doesn't make sense, corresponding classes are also available (`.h1` == `<h1>`)

<div class="pattern">
  <h1>H1 - Page title</h1>
  <br>
  <h2>H2 - Section title</h2>
  <br>
  <h3>H3 - Section sub-title</h3>
  <br>
  <h4>H4 - Paragraph title</h4>
  <br>
  <h6>H6 - Paragraph Heading</h6>
</div>

``` html
<h1>H1 - Page title</h1>
<h2>H2 - Section title</h2>
<h3>H3 - Section sub-title</h3>
<h4>H4 - Paragraph title</h4>
<h6>H6 - Paragraph Heading</h6>
```