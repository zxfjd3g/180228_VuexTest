import storageUtil from '../util/storageUtil'
import {
  ADD_TOTO,
  DELETE_TODO,
  SELECT_ALL,
  CLEAR_ALL_COMPLETED,
  RECEIVE_TODOS
} from './mutation-types'
export default {

  addTodo({commit}, todo) {
    commit(ADD_TOTO, {todo}) // action交给mutation是一个包含数据的对象
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll ({commit}, check) {
    commit(SELECT_ALL, {check})
  },

  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },

  // 从localStorge中读取保存的todos
  readTodos ({commit}) {
    setTimeout(() => {
      // 读取todos
      const todos = storageUtil.readTodos()
      commit(RECEIVE_TODOS, {todos})
    }, 1000)


  }
}