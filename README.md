btw
===

btw - the world's smallest background tweener
---------------------------------------------

**Btw** the smallest and fastest jQuery based solution to create beautiful elements with endlesly rotating blending images in your webpages. It weighs in only **710 bytes** minified and *311 bytes* gzipped.

Most image tweeining / background blending plugins out there are a great bloat. They endlesly pester you with flexibility and a wads of settings. On top of that, most of them don't even overlay images properly. **Btw** does just one thing and does it right.

### Usage

The elaborate way:

```javascript
$(function() {
  var images = ['/your.jpg', '/set.jpg', '/of.jpg', '/images.jpg'];
  var showtime = 3000;
  var transitiontime = 2000;
  $('#some.element').btw(images, showtime, transitiontime );
});
```

There shorthand:

```javascript
$(function() {
  $('#some.element').btw(
    ['/your.jpg', '/set.jpg', '/of.jpg', '/images.jpg'],
    3000,
    2000
  );
});
```

### Contact
You are welcome to visit http://jqp.herokuapp.com//btw for more information.  
You may contact the author at toni [at] formalibre [dot] si.
