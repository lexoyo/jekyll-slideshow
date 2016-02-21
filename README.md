# Jekyll Slideshow

`Jekyll Slideshow` is a Jekyll boilerplate which generates slideshows with your pictures and texts, so that you can embed them in a static websites, i.e. in websites generated with [static website generators](https://www.staticgen.com/) such as [Jekyll](http://jekyllrb.com/) and [Silex](http://www.silex.me).

You can use Github to edit your slides and upload pictures, Github Pages will automatically generate your slideshows and publish it online for free. It is not a Jekyll plug-in but a set of layouts and collection. 

[Here is a demo](http://lexoyo.me/jekyll-slideshow/).

At the core of this project there is work from other people:

* [Jekyll](http://jekyllrb.com/)
* [JQuery lightSlider](http://sachinchoolur.github.io/lightslider/)

## user guide

1. [Fork this code on github](https://github.com/lexoyo/jekyll-slideshow/fork)
2. Edit the file `_slides/my-pics1.md` on github and save the file, this will make Github pages build your slideshows
3. Check the changes on `http://yourgithubusername.github.io/jekyll-slideshow/`

You can make more slideshows by adding `.md` files in `_slides`, [like this one](./_slides/my-pics1.md). The picures can be stored in any folder or sub folder, but do not forget to add it to a slideshow like in the examples.

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
* controls
* pager
* adaptiveHeight

You can also style and animate the elements on the slides with the "style" property in the front matter data

```
style:
  body:
    duration: 10000
    init:
      position: absolute
      bottom: 0
      width: 200%
    from:
      left: 0
    to:
      left: -100%
```

