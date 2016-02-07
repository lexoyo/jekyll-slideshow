# Jekyll Slideshow

Jekyll Slideshow is a slideshow solution to help you display your pictures in your website. This is mainly intended to embed slideshow in static websites, i.e. websites generated with [static website generators](https://www.staticgen.com/) such as [Jekyll](http://jekyllrb.com/) and [Silex](http://www.silex.me).

You can use [Prose, a visual editor which plugs into Github](http://prose.io/) and host it on Github Pages for free.

[Here is a demo](http://lexoyo.me/jekyll-slideshow/).

At the core of this project there is work from other people:

* [Jekyll](http://jekyllrb.com/)
* [JQuery lightSlider](http://sachinchoolur.github.io/lightslider/)

## user guide

1. [Fork this code on github](https://github.com/lexoyo/jekyll-slideshow/fork)
2. Edit the file `_slides/my-pics1.md` with [Prose](http://prose.io/), add images in the list and save the file
3. Check the changes on `http://yourgithubusername.github.io/jekyll-slideshow/`

You can make more slideshows by adding `.md` files in `_slides`, [like this one](./_slides/my-pics1.md). The picures can be stored in any folder or sub folder, but when you add it to a slideshow, use a relative path, e.g.

```
* ![A nice pic of mine](my-pics1/pic1.jpg)
* ![Another nice pic of mine](my-pics1/pic2.jpg)
```

In the meta data of a slideshow's `.md` file, you can use these params, which come from [lightSlider's doc](http://sachinchoolur.github.io/lightslider/settings.html)

* item
* loop
* mode (slide or fade)
* speed
* pause
* vertical
* auto
* pauseOnHover

