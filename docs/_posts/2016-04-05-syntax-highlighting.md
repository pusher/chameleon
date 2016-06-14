---
layout: post
title:  "Syntax Highlighting"
subtitle: "For code snippets, a pygments typography mixin is included to highlight different languages."
categories: layout
permalink: /layout/syntax-highlighting/
---

To use the mixin, just ensure that your codesnippets are wrapped in a `.highlight` class.

**Ruby**

``` ruby
Pusher.trigger('my-channel', 'my-event', {
  message: 'hello world'
});
```

***

**JavaScript**

``` javascript
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert('Received my-event with message: ' + data.message);
});
```