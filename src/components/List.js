import { React, ReactDOM } from '../_lib.js';

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: props.index
        };

        this.click = this.click.bind(this);
    }

    click(e) {
        console.log(this);
        this.setState({index: 5});
    }

    render() {
        return <li onClick={this.click}>n --> {this.state.index}</li>;
    }
}

class List extends React.Component {
    render() {
        var rows = this.props.rows.map(function(n) {
            return <ListItem index={n} />;
        });
        return <ul>
            Hi, I'm a list component.
            {rows}
        </ul>
    }
}

export { List };