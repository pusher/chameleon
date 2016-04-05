---
layout: post
title:  "Syntax Highlighting"
categories: layout
permalink: /syntax-highlighting/
---

For code snippets, a pygments typography mixin is included to highlight different languages. These styles are being used on this page to highlight the following code blocks:

### HTML
``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
</html>
```

***

### Ruby
``` ruby
Pusher.trigger('my-channel', 'my-event', {
  message: 'hello world'
});
```

***

### JavaScipt
``` javascript
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
  alert('Received my-event with message: ' + data.message);
});
```