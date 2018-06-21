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
    <el-form-item label="奖励级别">
      <el-select v-model="form.award_code" placeholder="选择奖励级别" style="width:150px;">
        <el-option label="校特等奖学金" value="0"></el-option>
        <el-option label="校一等奖学金" value="1"></el-option>
        <el-option label="校二等奖学金" value="2"></el-option>
        <el-option label="校三等奖学金" value="3"></el-option>
        <el-option label="系一等奖学金" value="4"></el-option>
        <el-option label="系二等奖学金" value="5"></el-option>
        <el-option label="系三等奖学金" value="6"></el-option>
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
    <br><br>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">立即提交</el-button>
      <el-button @click="handleReFresh">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { award } from '@/api/edu/award'
export default {
  data () {
    return {
      form: {
        name: '',
        student_id: '',
        award_code: '',
        description: ''
      },
      awardInfo: '',
      loading2: false
    }
  },
  methods: {
    handleSubmit () {
      console.log('submit!')
      // this.dialogTop('submin', 'success')
      this.loading2 = true
      this.awardInfo = `name=${this.form.name}&student_id=${this.form.student_id}&award_code=${this.form.award_code}&description=${this.form.description}`
      award('/api/award.php', this.awardInfo).then(res => {
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
      this.form.award_code = ''
      this.form.description = ''
    }
  }
}
</script>

<style>
</style>
