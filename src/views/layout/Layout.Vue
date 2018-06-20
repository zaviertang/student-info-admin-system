<template>
  <el-container class="container">
    <el-header height="60px" style="text-align: right; font-size: 12px">
      <my-header></my-header>
    </el-header>
    <el-container class="my-main">
      <el-aside width="200px">
        <my-aside></my-aside>
      </el-aside>
      <el-main>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyAside from './components/MyAside'
export default {
  name: 'layout',
  components: {
    MyHeader,
    MyAside
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.4.1/lib/theme-chalk/index.css");
  * {
    margin: 0;
  }
  body {
    /* padding-top: 60px; */
    /* overflow: hidden; */
  }
  .container {
    padding-top: 60px;
    /* position: relative; */
  }
  .el-header {
    background-color: #fff;
    color: #333;
    line-height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    border-bottom: 1px solid #EBEEF5;
    box-shadow: 2px 2px 10px #888888;
  }
  .my-main {
    padding-left: 200px;
  }
  .el-aside {
    color: #333;
    background: #fff;
    position: fixed;
    top: 60px;
    left: 0;
    height: 100%;
    z-index: 0;
    box-shadow: 2px -2px 10px #888888;
  }
  .el-main {
    /* position: absolute; */
    /* top: 60px;
    left: 200px; */
  }
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all .5s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
