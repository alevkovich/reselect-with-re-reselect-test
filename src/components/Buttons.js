import React from 'react';
import { connect } from 'react-redux';
import './app.css'
import { deleteItem, startCount, switchList } from '../actions/actions'

const AddNewItem = ({ deleteItem, startCount, switchList }) => {
  return (
    <div className='buttons'>
      <button onClick={deleteItem}>delete item from todoList1</button>
      <button onClick={startCount}>update state</button>
      <button onClick={switchList}>switch selector</button>
    </div>);
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: () => dispatch(deleteItem()),
    startCount: () => setInterval(() => dispatch(startCount()), 2000),
    switchList: () => dispatch(switchList())
  }
}

export default connect(null, mapDispatchToProps)(AddNewItem);