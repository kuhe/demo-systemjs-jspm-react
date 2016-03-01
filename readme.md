#### JSPM 0.17 (beta) working with React.

JS tooling is truly horrible as of March 1st, 2016, and has been for quite some time.

Like, 2 to 15 years or so depending on who you ask.

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