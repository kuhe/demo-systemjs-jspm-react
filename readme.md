#### JSPM 0.17 (beta) working with React.

JS tooling is truly horrible as of March 1st, 2016, and has been for quite some time.

Like, 2 to 15 years or so depending on who you ask. This doesn't fix any of that. This was actually
more of an exercise in experiencing how horrible it is and how hard it was to get this configuration running.
And, it probably won't work in 3 weeks as api-breaking changes are made at random to any portion of its dependencies.

#### Notes:

ES6 (Babel) + JSX support is possible, but it's slow as hell in dynamic load (over 200 files to import).

Recommend sticking to ES5 for quicker load speed. Or try and get a hot-reload working (don't).

#### Build

Bundles/builds assume your external libraries are imported to _lib.js and that your entry point is main.js.

npm run bundle: this bundles the _lib.js file (i.e. React), leaving your own files imported from main.js to be loaded asynchronously.

npm run build: you must reconfigure the head to only import your built file, since this is the standalone static version.

For a full asynch load (slow), remove the bundle file from loading in your HTML.

### Examples

are contained in src:

````
/src
    /components(-es5)  - sample React component implementations in Babel/JSX and ES5
    _lib.js  - aggregation of packaged external libraries
    main.js  - sample entry point and application boot
````

### What is JSPM, SystemJS, or React

SystemJS: loads modules in many formats (CJS, ES6, AMD), with plugins (babel, TS, JSX) with no build step, in the browser. SystemJS also has a bundler, for production.
JSPM: a package manager just for SystemJS, to allow you to write "require('react')" in your browser code, and magically have it work. Otherwise you'd have to manually
map the module 'react' to its location in node_modules or bower_components.
React: view rendering...

### Configuration Modes

1. You didn't run any build or bundle:
````
<head>
    <script src='jspm_packages/system.js'></script>
    <script src='jspm.browser.js'></script>
    <script src='jspm.config.js'></script>
</head>
<body>
    This can handle ES6 and JSX, but is slow as hell since it imports 300 files worth of
    React and Babel before being able to run your code.
    I would've liked to find a pre-bundled Babel, but I couldn't.

    jspm.browser is a light browser config for pathing.
    jspm.config is mostly a path config for the system.js loader. It is
    constructed automatically as you use JSPM to install modules.
    <script>
        System.config({
            packages: {
                src: {
                    defaultExtension: 'js'
                }
            }
        });
        System.import('src/main')
    </script>
</body>
````

2. You bundled the library via npm run bundle:
````
<head>
    <script src='jspm_packages/system.js'></script>
    <script src='jspm.browser.js'></script>
    <script src='jspm.config.js'></script>
    <script src='src_build/_lib.min.js'></script>
</head>
<body>
    This imports react minified, but your own application code asynchronously.
    Doesn't work for transpilation (ES6/JSX)
    <script>
        System.config({
            packages: {
                src: {
                    defaultExtension: 'js'
                }
            }
        });
        System.import('src/main')
    </script>
</body>
````

3. You built the application fully. (currently doesn't work, minification error)
````
<head>
    <script src='src_build/main.min.js'></script>
</head>
<body>
    ...
    <script>
        // no need to call system import
    </script>
</body>
````