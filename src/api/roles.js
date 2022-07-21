import request from '@/utils/request'

/**
 * 获得角色列表
 * @returns
 */
export const getRolesList = () => {
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

/**
 * 增加用户
 */
export const addRolesUser = ({ roleName, roleDesc }) => {
  return request({
    url: 'roles',
    method: 'POST',
    data: { roleName, roleDesc }
  })
}

/**
 * 编辑角色提交
 */
export const putEdit = (id, roleName, roleDesc) => {
  return request({
    method: 'PUT',
    url: `roles/${id}`,
    data: {
      roleName,
      roleDesc
    }
  })
}
/**
 * 删除角色
 */
export const delRolesUser = (id) => {
  return request({
    method: 'DELETE',
    url: `roles/${id}`
  })
}

/**
 * 角色授权
 */
export const putRight = (roleId, rids) => {
  return request({
    method: 'POST',
    url: `roles/${roleId}/rights`,
    data: { rids }
  })
}

/**
 * 删除角色指定权限
 */
export const delRight = (roleId, rightId) => {
  return request({
    method: 'DELETE',
    url: `roles/${roleId}/rights/${rightId}`
  })
}
