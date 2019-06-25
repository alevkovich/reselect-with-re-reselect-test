import React from 'react';
import './app.css'
import { connect } from 'react-redux';
import { сomputationReselect } from './selectors'

class App5 extends React.PureComponent {
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
        list: сomputationReselect(state, props.list)
    }
};

export default connect(mapStateToProps)(App5);