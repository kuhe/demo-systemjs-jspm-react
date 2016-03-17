
if (1) {

    require('react');
    require('react-dom');

    /*
    We do a preload of babel and its jsx transform to allow the bundler to package the libraries needed for
    in-browser ES6/JSX

    This file is not actually part of the dependency chain for the client application.
    The actual libraries should be surfaced in _lib.js
     */

    require('systemjs-plugin-babel');
    require('../jspm_packages/npm/babel-plugin-transform-react-jsx@6.6.0/lib/index.js');

}