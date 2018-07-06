export default {

  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 已完成数量
  completeCount (state) {
    return state.todos.reduce((preTotal, todo)=> preTotal + (todo.complete?1:0), 0)
  },
  // 是否已经全部完成
  isAllComplete (state, getters) {
    return getters.totalCount=== getters.completeCount && getters.totalCount>0
  }
}