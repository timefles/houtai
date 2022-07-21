import request from '@/utils/request'

/**
 * 权限列表
 */
export const getRightsList = (type) => {
  return request({
    url: `rights/${type}`
  })
}
