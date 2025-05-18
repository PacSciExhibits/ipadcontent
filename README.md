# Content on iPads

Hey y'all,

I can handle most of this stuff, but I'll document my process in this README for posterity.

We can lock down an iPad for a slideshow with an app that displays a single website. It seems inconvenient to need to build a webpage to show a slideshow, but it's actually kind of nice to have the flexibility that HTML affords. In the future, we could build something more interactive, or show an existing website (from NASA or wherever).

Here, when making our own webpages, we're using GitHub Pages, a free web hosting service from GitHub. This repository has been set up so we have the link to any file in the above directory. HTML files will show up in the kiosk app as web pages.

We're making horizontal-scrolling-snapping slideshows, using a list of images. Our iPads have a resolution of `2160x1620`

1. Download the repository by clicking the green `Code` dropdown and clicking `Download ZIP`
2. Copy the `exampleslideshow` folder and rename it something similar (no spaces). This will be part of the page URL.
3. Replace the images with the images you want in this slideshow.
4. To edit the index.html file in your new folder, right-click it and click Edit, or open the file in a text editor like Notepad (Windows), TextEdit (Mac), or VS Code (downloadable on any platform).
5. Find the list of `img` tags in the middle of the index.html file.
6. Change the list of `img` tags to match the image filenames for your slideshow. Something like:

```
...
<!-- CHANGE THE LIST OF img TAGS BELOW TO MATCH THE NAMES AND NUMBER OF IMAGES IN YOUR FOLDER. -->
    <div class="scroll-container">
        <img src="allosaurus.png">
        <img src="triceratops.png">
    </div>
...
```

Note that you shouldn't change the `div` tag, or anything other than the `img` tags.