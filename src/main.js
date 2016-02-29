import React from 'react';
import ReactDOM from 'react-dom';

var Jsx = <jsx></jsx>;

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

ReactDOM.render(
    <List rows={[1,2,3,4,5]} />,
    document.getElementById('main')
);

ReactDOM.render(
    <ListItem index={"hi"} />,
    document.getElementById('alt')
);

window.__react_test = function(rows) {
    ReactDOM.render(
        <List rows={rows} />,
        document.getElementById('main')
    );
};

console.log('hmm...');