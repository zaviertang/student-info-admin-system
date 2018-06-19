<template>
  <el-table :data="tableData">
    <el-table-column prop="id" label="#" width="140">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120">
    </el-table-column>
    <el-table-column prop="sex" label="性别" width="120">
    </el-table-column>
    <el-table-column prop="age" label="年龄" width="120">
    </el-table-column>
    <el-table-column prop="birth" label="生日">
    </el-table-column>
    <el-table-column prop="addr" label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import { queryList } from '@/api/queryList'
export default {
  name: 'MyTable',
  data () {
    // const item = {
    //   date: '2016-05-02',
    //   name: 4,
    //   address: '上海市普陀区金沙江路 1518 弄'
    // }
    return {
      tableData: []
    }
    // tableData: [{
    //   id: String,
    //   name: String,
    //   sex: String,
    //   age: String,
    //   birth: String,
    //   addr: String
    // }]
  },
  methods: {
    getList () {
      queryList('/api/list.php').then(res => {
        this.tableData = res.data
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style>

</style>
