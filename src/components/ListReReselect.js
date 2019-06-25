import React from 'react';
import './app.css'
import { connect } from 'react-redux';
import { сomputationReReselect } from './selectors'

class App4 extends React.PureComponent {
    render() {
        return (
            <ul className="list-group list">
                {this.props.list.map((item) => <li key={item.id}>{item.id}</li>)}
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        list: сomputationReReselect(state, props.list)
    }
};

export default connect(mapStateToProps)(App4);