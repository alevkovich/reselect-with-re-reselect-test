import React from 'react';
import './app.css'
import { connect } from 'react-redux';
import { сomputationUsual } from './selectors'

class App1 extends React.PureComponent {
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
        list: сomputationUsual(state, state[props.list], 'usual')
    }
};

export default connect(mapStateToProps)(App1);