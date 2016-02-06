---
layout: default
title: Galeries
---

This is a demo of the [Jekyll Slideshow](https://github.com/lexoyo/jekyll-slideshow/).

Here are your slides, one per `.md` file in the folder `_slides`:

{% for slide in site.slides %}
<hr>
<iframe src="{{ site.github.url }}{{ slide.url }}" width="800px" height="600px" style="border: none; margin: auto; display: block;"></iframe>
<div style="width: 800px; margin: auto; display: block;">
<p>
<strong>To embed this slide in a website, add this code to your page:</strong>
<textarea style="width: 800px; margin: auto; display: block;">
&lt;iframe src="[baseurl]{{ site.github.url }}{{ slide.url }}" width="100%" height="100%" style="border: none;"&gt;&lt;/iframe&gt;
</textarea>
</p>
</div>
{% endfor %}

