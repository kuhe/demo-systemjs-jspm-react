#### JSPM 0.17 (beta) examples (optionally with ES6/JSX for React).

### Installation

    npm i
    jspm install

(installing additional npm modules with jspm > jspm install npm:module_name)

### What is this?

You get 3 bundling modes for JS apps: Normal, Harmony, and Production

````
npm run bundle
npm run bundle-harmony
npm run bundle-prod
````

Each bundle operation packages your libraries into a single file, but loads your own application code asynchronously.

They give you, respectively

* CJS in the browser with neither build step nor watchers (edit and reload)
* ES6/JSX in the browser with neither build step nor watchers (edit and reload, but slower)
* Your app in a single file

#### Notes:

JS tooling is truly horrible as of March 1st, 2016, and has been for quite some time. Like, 2 to 15 years or so depending on who you ask.

_This doesn't fix any of that (sad chuckle)._

This was actually more of an exercise in experiencing how horrible it is and how hard it was to get this configuration running.
And, it probably won't work in 3 weeks as api-breaking changes are made at random to any portion of its dependencies.

#### Build Assumptions

Your application entry point is src/main.js.

Your libraries are imported in _lib.js and (Harmony only) matched in _lib-harmony.js.

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
It works without a local build step or watcher.

JSPM: a package manager just for SystemJS, to allow you to write "require('react')" in your browser code, and magically have it work. Otherwise you'd have to manually
map the module 'react' to its location in node_modules or bower_components.

React: view rendering...

### Configuration Modes

See index.html or src/main.js for how to configure the 3 bundle modes (Normal, Harmony, and Production).