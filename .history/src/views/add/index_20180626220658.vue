<template>
  <el-form :inline="true"
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
    <el-form-item label="性别">
      <el-select v-model="form.sex" placeholder="请选择性别" style="width:150px;">
        <el-option label="男" value="男"></el-option>
        <el-option label="女" value="女"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="生日" style="width:300px;">
      <el-input v-model="form.birthday"></el-input>
    </el-form-item>
    <el-form-item label="籍贯"> 
      <el-input v-model="form.native_place"  style="width:300px;"></el-input>
    </el-form-item> 
    <el-form-item label="院系">
      <el-select v-model="form.department" placeholder="请选择院系">
        <el-option label="计算机科学与技术" value="计算机科学与技术"></el-option>
        <el-option label="物联网工程" value="物联网工程"></el-option>
        <el-option label="软件工程" value="软件工程"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="班级">
      <el-select v-model="form.class" placeholder="请选择班级">
        <el-option label="计科一班" value="计科一班"></el-option>
        <el-option label="计科二班" value="计科二班"></el-option>
        <el-option label="计科三班" value="计科三班"></el-option>
      </el-select>
    </el-form-item>
    <br><br>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">立即提交</el-button>
      <el-button @click="handleReFresh">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { addData } from '@/api/add/addData'
export default {
  data () {
    return {
      form: {
        student_id: '16050103xx',
        name: '某某某',
        sex: '男',
        department: '计算机科学与技术',
        class: '计科三班',
        birthday: '1900-00-00',
        native_place: '中华人民共和国'
      },
      addInfo: '',
      loading2: false
    }
  },
  methods: {
    handleSubmit () {
      console.log('submit!')
      this.loading2 = true
      this.addInfo = `student_id=${this.form.student_id}&name=${this.form.name}&sex=${this.form.sex}&department=${this.form.department}&class=${this.form.class}&birthday=${this.form.birthday}&native_place=${this.form.native_place}`
      addData('/api/addData.php', this.addInfo).then(res => {
        if (res.data === 1) {
          this.loading2 = false
          this.dialogTop('提交成功', 'success')
        } else {
          this.dialogTop(res.data, 'error')
          this.loading2 = false
        }
      })
      // this.dialogTop('submit', 'success')
    },
    handleReFresh () {
      this.dialogTop('重置', 'message')
      this.form.name = ''
      this.form.student_id = ''
      this.form.sex = ''
      this.form.birthday = ''
      this.form.native_place = ''
      this.form.department = ''
      this.form.class = ''
    },
    dialogTop (message, type) {
      this.$message({
        message,
        type
      })
    }
  }
}
</script>

<style>
</style>
