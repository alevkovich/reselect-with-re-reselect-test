import React from 'react'
import { connect } from 'react-redux'
import ListUsual from './ListUsual'
import ListReselect from './ListReselect'
import ListReReselect from './ListReReselect'
import Buttons from './Buttons'
import './app.css'

const App = ({ boolean }) => {
    return (
        <div className='app'>
            <ListUsual list={boolean ? 'todoList1' : 'todoList3'} />
            <ListReselect list={boolean ? 'todoList1' : 'todoList3'} />
            <ListReReselect list={boolean ? 'todoList1' : 'todoList3'} />
            <Buttons />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        boolean: state.boolean
    }
}

export default connect(mapStateToProps)(App);