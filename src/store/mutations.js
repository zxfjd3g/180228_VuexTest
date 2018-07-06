import {
  ADD_TOTO,
  DELETE_TODO,
  SELECT_ALL,
  CLEAR_ALL_COMPLETED,
  RECEIVE_TODOS
} from './mutation-types'

export default {

  // 添加todo
  [ADD_TOTO](state, {todo}) {
    state.todos.unshift(todo)
  },

  // 删除todo
  [DELETE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },

  // 全选/全不选
  [SELECT_ALL] (state, {check}) {
    state.todos.forEach(todo => todo.complete = check)
  },

  // 清除所有已完成的
  [CLEAR_ALL_COMPLETED] (state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  // 接收一个新的todos
  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  }
}