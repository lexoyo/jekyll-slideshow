---
layout: default
title: Galeries
---

This is a demo of the [Jekyll Gallery](http://lexoyo.me/jekyll-gallery/).

Here are your galleries:

{% for gallery in site.galleries %}
<iframe src="{{ site.github.url }}{{ gallery.url }}" width="800px" height="600px" style="border: solid 1px; margin: auto; display: block;"></iframe>
{% endfor %}


