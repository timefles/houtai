import request from '@/utils/request'

/**
 * 登录
 * @param {*} param0
 * @returns
 */
export const login = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'login',
    data: {
      username,
      password
    }
  })
}

/**
 * 获取用户列表
 */
export const getUsers = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'users',
    method: 'get',
    params: { query, pagenum, pagesize }
  })
}

/**
 * 添加用户
 */
export const addUser = ({ username, password, email, mobile }) => {
  return request({
    method: 'POST',
    url: 'users',
    data: { username, password, email, mobile }
  })
}

/**
 * 修改用户状态
 */
export const putState = (uId, type) => {
  return request({
    method: 'PUT',
    url: `users/${uId}/state/${type}`
  })
}
/**
 * 编辑用户提交
 */
export const putEdit = (id, email, mobile) => {
  return request({
    method: 'PUT',
    url: `users/${id}`,
    data: {
      email: email,
      mobile: mobile
    }
  })
}
/**
 * 删除用户
 */
export const delUser = (id) => {
  return request({
    method: 'DELETE',
    url: `users/${id}`
  })
}
/**
 * 分配用户角色
 */
export const putRole = (id, rid) => {
  return request({
    method: 'PUT',
    url: `users/${id}/role`,
    data: {
      rid: rid
    }
  })
}
