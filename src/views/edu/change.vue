<template>
  <el-form :inline="true" ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名" style="width:300px;">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="学号" style="width:300px;">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <br>
    <el-form-item label="变更情况">
      <el-select v-model="form.region" placeholder="选择变更情况" style="width:150px;">
        <el-option label="转系" value="0"></el-option>
        <el-option label="休学" value="1"></el-option>
        <el-option label="复学" value="2"></el-option>
        <el-option label="退学" value="3"></el-option>
        <el-option label="毕业" value="4"></el-option>
      </el-select>
    </el-form-item><br>
    <el-form-item label="描述">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容"
        v-model="form.textarea"
        style="width:500px;">
      </el-input>
    </el-form-item>
    <br><br>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        textarea: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
</style>
