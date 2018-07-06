import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_FAIL
} from './mutation-types'

export default {
  // 异步搜索用户
  search ({commit}, searchName) {
    // 更新状态(请求中)
    commit(REQUESTING)
    // 发ajax请求
    axios.get(`https://api.github.com/search/users?q=${searchName}`)
      .then(response => {
        const users = response.data.items.map(item => {
          return {
            url: item.html_url,
            name: item.login,
            avatar_url: item.avatar_url
          }
        })
        // 更新状态(成功)
        commit(REQ_SUCCESS, {users})
      })
      .catch(error => {
        commit(REQ_FAIL)
      })
  }
}