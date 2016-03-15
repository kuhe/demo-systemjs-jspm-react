//import 'systemjs-hot-reloader/default-listener.js';
//
//export function __reload(m) {
//    if (m.component.state)
//        component.setState(m.component.state);
//}

import { React, ReactDOM } from './_lib.js';
import { List } from './components/List.js';

//var _lib = require('./_lib.js');
//var React = _lib.React,
//    ReactDOM = _lib.ReactDOM;
//var List = require('./components-es5/List.js');


var numbers = [],
    n = 10000;
while (n--) {
    numbers.push(n);
}

window.__react_test = function(rows) {
    ReactDOM.render(
        React.createElement(List, {rows: rows}),
        document.getElementById('main')
    );
};

console.log('hmm...');

window.__react_test(numbers);