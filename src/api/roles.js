import request from '@/utils/request'

/**
 * 获得角色列表
 * @returns
 */
export const getRoles = () => {
  return request({
    url: 'roles'
  })
}

/**
 * 获取用户ID
 * @param {*} id
 * @returns
 */
export const getRolesId = (id) => {
  return request({
    url: `roles/${id}`
  })
}
