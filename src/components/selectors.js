import { createSelector } from 'reselect'
import createCachedSelector from 're-reselect'

const getTodoList2 = (state) => state.todoList2

const сomputation = (list1, list2, type) => {
  const result = list1.concat(list2)
  console.log(type + "  сomputation")
  return result
}

export const сomputationUsual = (state, list, type) => сomputation(state.todoList2, list, type)

export const сomputationReselect = createSelector(
  // inputSelectors
  (state, arg1) => state[arg1], //selector1
  getTodoList2, //selector2

  // resultFunc
  (selector1, selector2) => сomputation(selector1, selector2, 'reselect')
)

export const сomputationReReselect = createCachedSelector(
  // inputSelectors
  (state, arg1) => state[arg1], //selector1
  getTodoList2, //selector2

  // resultFunc
  (selector1, selector2) => сomputation(selector1, selector2, 're-reselect')
)(
  //keySelector
  // Instruct re-reselect to use "arg1" as cacheKey
  (state, arg1) => arg1
)
