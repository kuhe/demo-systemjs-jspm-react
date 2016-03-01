'use strict';

var _libJs = require('../_lib.js');

var ListItem = _libJs.React.createClass({
    displayName: 'ListItem',
    getInitialState: function() {
        return {index: this.props.index};
    },
    click: function(e) {
        this.setState({index: 5});
    },
    render: function render() {
        return _libJs.React.createElement(
            'li',
            {onClick: this.click},
            'n --> ',
            this.state.index
        );
    }
});

var List = _libJs.React.createClass({
    displayName: 'List',

    render: function render() {
        var rows = this.props.rows.map(function (n) {
            return _libJs.React.createElement(ListItem, { index: n });
        });
        return _libJs.React.createElement(
            'ul',
            null,
            rows
        );
    }
});

module.exports = List;