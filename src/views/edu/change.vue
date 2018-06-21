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
    <el-form-item label="变更情况">
      <el-select v-model="form.change_code" placeholder="选择变更情况" style="width:150px;">
        <el-option label="转系" value="0"></el-option>
        <el-option label="休学" value="1"></el-option>
        <el-option label="复学" value="2"></el-option>
        <el-option label="退学" value="3"></el-option>
        <el-option label="毕业" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="转到" v-show="showHideToDep">
      <el-select v-model="form.toDepartment" placeholder="请选择转入系名称">
        <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
        <el-option label="物联网工程" value="物联网工程"></el-option>
        <el-option label="软件工程" value="软件工程"></el-option>
      </el-select>
    </el-form-item>
    <br>
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
import { change } from '@/api/edu/change'
export default {
  data () {
    return {
      form: {
        name: '',
        student_id: '',
        change_code: '',
        description: '',
        toDepartment: ''
      },
      loading2: false,
      changeInfo: ''
      // showHideToDep: false,
    }
  },
  methods: {
    checkInfo () {
      return true
    },
    handleSubmit () {
      if (this.checkInfo()) {
        this.loading2 = true
        this.changeInfo = `name=${this.form.name}&student_id=${this.form.student_id}&change_code=${this.form.change_code}&description=${this.form.description}&toDepartment=${this.form.toDepartment}`
        change('/api/change.php', this.changeInfo).then(res => {
          if (res.data === 1) {
            this.loading2 = false
            this.dialogTop('提交成功', 'success')
          } else {
            this.loading2 = false
            this.dialogTop('提交失败', 'error')
          }
          // this.dialogTop(res, 'message')
        })
      } else {
        this.dialogTop('输入有误,请重新输入!sd', 'error')
      }
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
      this.form.change_code = ''
      this.form.description = ''
      this.form.toDepartment = ''
    }
  },
  computed: {
    showHideToDep: function () {
      if (this.form.change_code === '0') {
        return true
      }
    }
  }
}
</script>

<style>
</style>
