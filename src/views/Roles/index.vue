<template>
  <div>
    <el-breadcrumb
      separator-class="el-icon-arrow-right"
      style="margin-bottom: 10px"
    >
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-button type="primary">添加角色</el-button>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column label="#" width="85">
          <i class="el-icon-arrow-right"></i>
        </el-table-column>
        <el-table-column prop="id" label="#" width="85"> </el-table-column>
        <el-table-column prop="name" label="角色名称" width="315">
        </el-table-column>
        <el-table-column prop="name" label="角色描述" width="315">
        </el-table-column>
        <el-table-column label="操作" width="317">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="warning"
              icon="el-icon-setting"
              @click="handleDelete(scope.$index, scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRoles } from '@/api/roles'
export default {
  async created () {
    const res = await getRoles()
    console.log(res)
  },
  data () {
    return {
      // tableData: [{
      //   id: '1',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1518 弄'
      // }]
      // updateRoleList: []
    }
  },
  actions: {
    // 获取角色列表
    async RoleList ({ commit }) {
      const res = await getRoles()
      const { data } = res.data
      commit('updateRoleList', data)
    }
  },
  methods: {
    // handleEdit (index, row) {
    //   console.log(index, row)
    // },
    // handleDelete (index, row) {
    //   console.log(index, row)
    // }

    // updateRoleList (state, payload) {
    //   state.roleList = payload
    // }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.header {
  display: flex;
  margin-bottom: 15px;
  .el-input {
    margin-right: 10px;
    width: 218px;
  }
}
.block {
  margin-top: 15px;
}
.style-p {
  margin: 10px 0;
}
</style>
