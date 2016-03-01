#### An attempt to get

JSPM 0.17 (beta) working with React.

#### Notes:

ES6 (Babel) + JSX support is possible, but it's slow as hell in dynamic load (over 200 files to import).

Recommend sticking to ES5 for quicker load speed.

#### Build

Bundles/builds assume your external libraries are imported to _lib.js and that your entry point is main.js.

npm run bundle: this bundles the _lib.js file (i.e. React), leaving your own files imported from main.js to be loaded asynchronously.

npm run build: you must reconfigure the head to only import your built file, since this is the standalone static version.

For a full asynch load (slow), remove the bundle file from loading in your HTML.