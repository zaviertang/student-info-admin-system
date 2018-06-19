<template>
  <el-menu
    router=true
    class="el-menu-vertical-demo">
    <el-menu-item index="/add">
      <i class="el-icon-menu"></i>
      <span slot="title">新生信息输入</span>
    </el-menu-item>
    <el-submenu index="/edu">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>教务信息输入</span>
      </template>
      <el-menu-item index="/edu/change">学籍变更</el-menu-item>
      <el-menu-item index="/edu/award">奖学金评定</el-menu-item>
      <el-menu-item index="/edu/punish">处罚记录</el-menu-item>
    </el-submenu>
    <el-menu-item index="/person">
      <i class="el-icon-setting"></i>
      <span slot="title">个人信息查询修改</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'MyAside'
}
</script>

<style>
  .el-menu {
    height: 100%;
  }
</style>
