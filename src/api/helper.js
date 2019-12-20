import axios from 'axios'

const ERR_OK = 0

// 函数柯里化
export function get(url) {
  return function(params) {
    return axios
      .get(url, { params })
      .then(res => {
        const { errno, data } = res.data
        // if (errno === 0) ... 0 是一个魔术数字，所以应该使用具名常量
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(e => { // 物理失败 404 等
        // @todo 验证哪些是物理失败
      })
  }
}
