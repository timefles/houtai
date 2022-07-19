import request from '@/utils/request'

// 获取左侧菜单数据
export const getMenuList = () => {
  return request({
    url: 'menus',
    method: 'get'
  })
}
