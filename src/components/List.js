import { React, ReactDOM } from '../_lib.js';

var ListItem = React.createClass({
    getInitialState: function() {
        return {index: this.props.index};
    },
    click: function(e) {
        this.setState({index: 5});
    },
    render: function() {
        return <li onClick={this.click}>n --> {this.state.index}</li>
    }
});

var List = React.createClass({
    render: function() {
        var rows = this.props.rows.map(function(n) {
            return <ListItem index={n} />;
        });
        return <ul>
            Hi, I'm a list component.
            {rows}
        </ul>
    }
});

export { List };