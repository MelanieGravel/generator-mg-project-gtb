# YO Generator MG Project GTB (Gulp, Twig, Bootstrap)


```
               .  .
               |\/|
              *****
          **********
        *************
                 ****
                 *****
                 ****
                ****
               ****
              ****                                        
             *****                 *************************
            *****         ******************************* 
           ******    **********************************
           ******** *********************************
           *****************************************
            ************************************* 
             **************************************
             ********************x******************* 
               *************************************
    ************************************************************
    *                                                          *
    *       ,--./,-.     MG Project GTB                        *
    *      / #      \    ---------------------------------     * 
    *     |          |   Mélanie Gravel                        *
    *      \        /    melanie082@gmail.com                  *
    *       `._,._,'     https://github.com/MelanieGravel/     *
    *                                                          *
    ************************************************************
```

## Intro
This Boilerplate, branched from David Hellman's [*dhBoilerplate*](https://github.com/davidhellmann/generator-dhBoilerplate), was modifified for prototyping purpose and a default integration of Bootstrap 4.


## What's inside?

### Bootstrap 4

[Bootstrap 4 Documentation](https://v4-alpha.getbootstrap.com/getting-started/introduction/)

## Install
```
$ npm install -g generator-mg-project-gtb
```


## Usage
Jump in your Working Directory and type:

```
yo mg-project-gtb
```
Run through the options. When you're done grab a coffee. The node module installation take a while. :)


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

HIS LOGO

```
   dhBoilerplate (with Bootstrap) made with love & help.
   -------------------------------------------------------------------------------
   Author            :   David Hellmann
   Website           :   https://davidhellmann.com
   Original Github   :   https://github.com/davidhellmann/generator-dhBoilerplate
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
