// 0. Hot reload
import 'systemjs-hot-reloader/default-listener.js';
export function __reload(m) {
    if (m.component.state)
        component.setState(m.component.state);
}

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

export let component = ReactDOM.render(
    React.createElement(List, {rows: numbers}),
    document.getElementById('main')
);