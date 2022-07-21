<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片 -->
    <el-card class="box-card">
      <el-table border :data="rightsList" stripe>
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="权限名称" prop="authName"></el-table-column>
        <el-table-column label="路径" prop="path"></el-table-column>
        <el-table-column label="权限等级" prop="level">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level === '0'">等级一</el-tag>
            <el-tag type="success" v-else-if="scope.row.level === '1'">
              等级二
            </el-tag>
            <el-tag type="warning" v-else>等级三</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRightsList } from '@/api/rights'
export default {
  created () {
    this.getRightsList()
  },
  data () {
    return {
      rightsList: []
    }
  },
  methods: {
    async getRightsList () {
      try {
        const { data: res } = await getRightsList('list')
        console.log(res)
        this.rightsList = res.data
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.el-card {
  margin-top: 20px;
}
</style>
