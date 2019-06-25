import * as actionType from './actions/types/'

const defaultState = {
    todoList1: Array.from({ length: 10 }, (e, i) => ({ id: `apples${i}` })),
    todoList2: Array.from({ length: 10 }, (e, i) => ({ id: `bananas${i}` })),
    todoList3: Array.from({ length: 10 }, (e, i) => ({ id: `cucumbers${i}` })),
    boolean: true,
    count: 0
}
const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case actionType.DELETE_ITEM: // delete first item from todoList1
            console.log('_____________________DELETE_ITEM')
            const newArray = state.todoList1.slice()
            newArray.splice(0, 1)
            return Object.assign({}, state, { todoList1: newArray })
        case actionType.START_COUNT:
            console.log('_____________________INCREASE_COUNT')
            return Object.assign({}, state, { count: state.count++ })
        case actionType.SWITCH_LIST:
            console.log('_____________________SWITCH_LIST')
            return Object.assign({}, state, { boolean: !state.boolean })
        default:
            return state;
    }
};

export default reducer;
