---
layout: default
title: Galeries
---

Here are your galleries:

<ul>
{% for gallery in site.galleries %}
<li><a href="{{ gallery.url }}">{{ gallery.title }}</a></li>
{% endfor %}


