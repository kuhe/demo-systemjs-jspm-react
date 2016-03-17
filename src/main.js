// 1. Regular and Reliable, JavaScript
// Make sure to enable import of _lib.min.js in index.html [npm run bundle]

//var _lib = require('./_lib.js');
//var React = _lib.React,
//    ReactDOM = _lib.ReactDOM;
//var List = require('./components-es5/List.js');

// 2. Harmony
// Make sure to enable import of _lib-dev.js in index.html [npm run bundle-dev]

import { React, ReactDOM } from './_lib.js';
import { List } from './components/List.js';

// 3. ES5 Bundled from Harmony
// Make sure to enable import of main.min.js in index.html [npm run bundle-app]

var numbers = [],
    n = 10000;
while (n--) {
    numbers.push(n);
}

var __react_test = function(rows) {
    ReactDOM.render(
        React.createElement(List, {rows: rows}),
        document.getElementById('main')
    );
};

var main = function() {
    console.log('hmm...');
    __react_test(numbers);
    return 0;
};

if (typeof window === 'object') {
    window.__react_test = __react_test;
    main();
}
