import { React, ReactDOM } from '../_lib.js';

var ListItem = React.createClass({
    render: function() {
        return <li>n --> {this.props.index}</li>
    }
});

var List = React.createClass({
    render: function() {
        var rows = this.props.rows.map(function(n) {
            return <ListItem index={n} />;
        });
        return <ul>
            {rows}
        </ul>
    }
});

export { List };