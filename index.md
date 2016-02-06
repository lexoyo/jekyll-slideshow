---
layout: default
title: Galeries
---

This is a demo of the [Jekyll Gallery](http://lexoyo.me/jekyll-gallery/).

Here are your galleries:

<ul>
{% for gallery in site.galleries %}
<li><a href="{{ site.github.url }}{{ gallery.url }}">{{ gallery.title }}</a></li>
{% endfor %}


