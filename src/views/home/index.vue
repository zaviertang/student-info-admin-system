<template>
  <div class="home">
    <h2>欢迎 !</h2><br>
    <span>这里是 <strong>学生信息管理系统</strong> .</span>
    <span>您可以从左侧的导航栏选择需要的功能.</span>
    <br><br>
    (手动分割线)
    <hr><br>
    <h3>技术栈:</h3><br>
    <strong>Vue</strong> + <strong>Vue-cli</strong> + <strong>Vue-router</strong> + <strong>element-ui</strong><br><br>
    <strong>Apache:2.4.33</strong> + <strong>MySQL:5.7.21</strong> + <strong>PHP:5.6.35</strong> (基于Wampserver)
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .home span {
    display: block;
    margin-bottom: 20px;
  }
</style>
