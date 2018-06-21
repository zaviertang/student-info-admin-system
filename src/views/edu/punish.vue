<template>
  <el-form
    :inline="true"
    ref="form"
    :model="form"
    label-width="80px"
    v-loading="loading2"
    element-loading-text="提交中 . . .">
    <el-form-item label="姓名" style="width:300px;">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="学号" style="width:300px;">
      <el-input v-model="form.student_id"></el-input>
    </el-form-item>
    <br>
    <el-form-item label="处罚级别">
      <el-select v-model="form.punish_code" placeholder="选择处罚级别" style="width:150px;">
        <el-option label="警告" value="0"></el-option>
        <el-option label="严重警告" value="1"></el-option>
        <el-option label="记过" value="2"></el-option>
        <el-option label="记大过" value="3"></el-option>
        <el-option label="开除" value="4"></el-option>
      </el-select>
    </el-form-item><br>
    <el-form-item label="描述">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容"
        v-model="form.description"
        style="width:500px;">
      </el-input>
    </el-form-item>
    <br>
    <el-form-item label="立即生效">
      <el-radio v-model="form.state" label="1" border>是</el-radio>
      <el-radio v-model="form.state" label="0" border>否</el-radio>
    </el-form-item>
    <br><br>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">立即提交</el-button>
      <el-button @click="handleReFresh">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { punish } from '@/api/edu/punish'
export default {
  data () {
    return {
      form: {
        name: '',
        student_id: '',
        punish_code: '',
        description: '',
        state: '1'
      },
      punishInfo: '',
      loading2: false
    }
  },
  methods: {
    handleSubmit () {
      console.log('submit!')
      // this.dialogTop('submin', 'success')
      this.loading2 = true
      this.punishInfo = `name=${this.form.name}&student_id=${this.form.student_id}&punish_code=${this.form.punish_code}&description=${this.form.description}&state=${this.form.state}`
      punish('/api/punish.php', this.punishInfo).then(res => {
        if (res.data === 1) {
          this.loading2 = false
          this.dialogTop('提交成功', 'success')
        } else {
          this.loading2 = false
          this.dialogTop('提交失败', 'error')
        }
      })
    },
    dialogTop (message, type) {
      this.$message({
        message,
        type
      })
    },
    handleReFresh () {
      this.form.name = ''
      this.form.student_id = ''
      this.form.punish_code = ''
      this.form.description = ''
      this.form.state = '1'
    }
  }
}
</script>

<style>
</style>
