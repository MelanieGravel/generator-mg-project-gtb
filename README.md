# YO Generator dhBoilerplate with Bootstrap

##Notes

Modified by Melanie Gravel for prototyping and deployment purpose

##Originally made by...


```
   dhBoilerplate (with Bootstrap) made with love & help.
   -------------------------------------------------------------------------------
   Author            :   David Hellmann, modified by Melanie Gravel
   Website           :   https://davidhellmann.com
   Original Github   :   https://github.com/davidhellmann/generator-dhBoilerplate
```

## Intro
That's my own YO Generator who fits for my own requirements.
Last year I go most of the time with CodeKit and a more oldsql workflow.
Now, this one is more up to date :)

Big thanks to [Sascha Fuchs](https://github.com/gisu) and his [Kittn](http://kittn.de/) for a lot of help and inspiration.
Also big thanks to [Martin Herweg](https://github.com/martinherweg) and his [YO Generator](https://www.npmjs.com/package/generator-mh-boilerplate) that help me a lot too.
And last but not least thanks to all members from our Slack Channel [webdevs](http://webdevs.xyz/) — feel free to join us.


## What is inside
### This three scenarios are covered by the generator:
- Prototyping (with Twig)
- WordPress with a basic Starter Kit (WordPress itself must be Installed by Hand after the first `gulp init`)
- Craft CMS with a basic Starter Kit (Craft CMS itself must be Installed by Hand after the first `gulp init`)

### Bootstrap 4

[Bootstrap 4 Documentation] (https://v4-alpha.getbootstrap.com/getting-started/introduction/)

## Install
```
$ npm install -g generator-dhboilerplate
```


## Usage
Jump in your Working Directory and type:

```
yo dhboilerplate
```
Run through the options. When you're done grab a coffee. The node module installation take a while :)


## Commands
Intialize your Project simple with `gulp init`


### Default Task with BrowserSync

```
gulp
```


### Task for Building
This Task clean the folder, build the stuff from ground up and optimize the images and minifiy JS / CSS files. Ready for live!

```
gulp build
```


### Other Tasks
There are some other Tasks there…

```
// Clean Tasks
// Clean the specific folder in the "___dist" dir
gulp clean:templates
gulp clean:css
gulp clean:js
gulp clean:images


// Main Tasks
// All this are triggered within "gulp init" & "gulp build" task.
// Some of this are triggered within the "gulp" task.
gulp templates
gulp systemFiles
gulp modernizr
gulp compile:js
gulp sass
gulp copy:fonts
gulp images
gulp svg-single
gulp svg-sprite


// Minify Tasks
// This task are triggered within the "guld build" task.
gulp minify:js
gulp minify:sass
gulp minify:images

```

## Thanks to
- webdevs - for so many things: [Website](http://webdevs.xyz)
- Sascha Fuchs - for help help help: [Website](https://github.com/gisu)
- Martin Herweg - for help help help: [Website](https://github.com/martinherweg)
- CSS Tricks -  for Easing Map: [Website](https://css-tricks.com/snippets/sass/easing-map-get-function/)
- Florian Kutschera - for the Material Design Box Shadows: [Website](https://medium.com/@Florian/freebie-google-material-design-shadow-helper-2a0501295a2d#.f1fz5ac2o)
- Hugo Giraudel & Eduardo Bouças - for include media: [Website](http://include-media.com/)
- @LukyVj - for family.scss: [Website](http://lukyvj.github.io/family.scss/)
- inuitcss - for some snippets and inspiration: [website](https://github.com/inuitcss/inuitcss)

[![bitHound Overall Score](https://www.bithound.io/github/davidhellmann/generator-dhBoilerplate/badges/score.svg)](https://www.bithound.io/github/davidhellmann/generator-dhBoilerplate)
