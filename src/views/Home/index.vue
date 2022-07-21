<template>
  <el-container class="container">
    <el-header>
      <span
        style="
          color: #fff;
          font-size: 22px;
          font-weight: bold;
          align-items: center;
          margin-left: 20px;
        "
      >
        杭州天华后台管理系统
      </span>
      <el-button @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="isCollapse?'50px':'200px'">
        <button class="toggle-button" @click="toggleCollapse">|||</button>
        <el-menu
          background-color="#373d41"
          text-color="#fff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              用户管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="$router.push({ name: 'user' })">
                <i class="el-icon-menu"></i>
                用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-cooperation"></i>
              权限管理
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="2-1"
                @click="$router.push({ name: 'roles' })"
              >
                <i class="el-icon-menu"></i>
                角色列表
              </el-menu-item>
              <el-menu-item
                index="2-2"
                @click="$router.push({ name: 'rights' })"
              >
                <i class="el-icon-menu"></i>
                权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template #title>
              <i class="el-icon-s-goods"></i>
              商品管理
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="$router.push({ name: 'goods' })"
                ><i class="el-icon-menu"></i>商品列表</el-menu-item
              >

              <el-menu-item
                index="3-2"
                @click="$router.push({ name: 'params' })"
                ><i class="el-icon-menu"></i>分类参数</el-menu-item
              >

              <el-menu-item
                index="3-3"
                @click="$router.push({ name: 'categories' })"
                ><i class="el-icon-menu"></i>商品分类</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template #title> <i class="el-icon-s-claim"></i>订单管理</template>
            <el-menu-item-group>
              <el-menu-item
                index="4-1"
                @click="$router.push({ name: 'orders' })"
                ><i class="el-icon-menu"></i>订单列表</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template #title> <i class="el-icon-s-data"></i>数据统计</template>
            <el-menu-item-group>
              <el-menu-item
                index="5-1"
                @click="$router.push({ name: 'report' })"
                ><i class="el-icon-menu"></i>数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenuList } from '@/api/home'
import { mapMutations } from 'vuex'
export default {
  async created () {
    try {
      const res = await getMenuList()
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    ...mapMutations(['removeToken']),
    // 退出返回登录页面
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    // 伸缩左侧菜单
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  height: 100vh;
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .el-aside {
    background-color: #373d41;
  }
  .el-main {
    background-color: #eaedf1;
  }
}
.el-menu {
  border-right: none;
}
.toggle-button {
  width: 100%;
  height: 40px;
  background-color: #ed73b2;
  color: #fff;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  letter-spacing: 5px;
  text-align: center;
}
</style>
