# Content on iPads

Hey y'all,

I'll document my process in this README for posterity.

We can lock down an iPad for a slideshow with an app that displays a single website. It seems inconvenient to need to build a webpage to show a slideshow, but it's actually kind of nice to have the flexibility that websites afford. In the future, we could build something more interactive, or show an existing website (from NASA or wherever).

Here, when making our own webpages, we're using GitHub Pages, a free web hosting service from GitHub. This repository has been set up so we have the link to any file in the above directory. HTML files will show up in the kiosk app as web pages.

We're making horizontal-scrolling-snapping slideshows, using a list of images. Our iPads have a resolution of `2160x1620`

1. Download the repository by clicking the green `Code` dropdown above and clicking `Download ZIP`. Extract the files from the ZIP.
2. Duplicate the `exampleslideshow` folder and rename it something similar (no spaces). This will be part of the page URL.
3. Replace the images with the images you want in this slideshow.
4. To edit the index.html file in your new folder, right-click it and click Edit, or open the file in a text editor like Notepad (Windows), TextEdit (Mac), or VS Code (downloadable on any platform).
5. Find the list of `img` tags in the middle of the index.html file.
6. Change the list of `img` tags to match the image filenames for your slideshow, in the order you want them to appear. Something like:
```
...
<!-- CHANGE THE LIST OF img TAGS BELOW TO MATCH THE NAMES AND NUMBER OF IMAGES IN YOUR FOLDER. -->
    <div class="scroll-container">
        <img src="allosaurus.png">
        <img src="triceratops.png">
    </div>
...
```

Note that you shouldn't change the `div` tag, or anything other than the `img` tags. Pay attention to the file extension, is it `triceratops.png` or `triceratops.jpeg`?

7. While logged in as `exhibitops@pacsci.org`, click the `Add file` dropdown and click `Upload files`. Drag and drop the folder you created into this window, and click the green `Commit changes` button.

8. In a few minutes, you can find your webpage at `https://pacsciexhibits.github.io/ipadcontent/exampleslideshow` where you can replace the last string, `exampleslideshow`, with your folder's name.'

9.  That URL can go in the URL field on the iPad kiosk app of your choosing.

Reach out to me with any questions:\
Oliver Norred\
olivernorred@gmail.com