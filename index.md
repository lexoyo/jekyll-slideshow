---
layout: default
title: Galeries
---

This is a demo of the [Jekyll Gallery](https://github.com/lexoyo/jekyll-gallery/).

Here are your galleries, one per `.md` file in the folder `_galleries`:

{% for gallery in site.galleries %}
<hr>
<iframe src="{{ site.github.url }}{{ gallery.url }}" width="800px" height="600px" style="border: none; margin: auto; display: block;"></iframe>
<div style="width: 800px; margin: auto; display: block;">
<p>
<strong>To embed this gallery in a website, add this code to your page:</strong>
<textarea style="width: 800px; margin: auto; display: block;">
&lt;iframe src="[baseurl]{{ site.github.url }}{{ gallery.url }}" width="100%" height="100%" style="border: none;"&gt;&lt;/iframe&gt;
</textarea>
</p>
</div>
{% endfor %}

