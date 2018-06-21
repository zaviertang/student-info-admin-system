<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input clearable style="width: 200px;" v-model="filterCont" placeholder="查询内容"></el-input>
      <el-select v-model="filterMode" placeholder="请选择查询方式">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="handleClickSearch">查询</el-button>
      <el-button type="success" icon="el-icon-refresh" @click="handleClickRefresh">刷新</el-button>
    </div>
    <el-table
      v-loading="loading2"
      element-loading-text="玩命加载中 . . ."
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="学号"
        width="150">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 0px">{{ scope.row.student_id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>性别: {{ scope.row.sex }}</p>
            <p>生日: {{ scope.row.birthday }}</p>
            <p>籍贯: {{ scope.row.native_place }}</p>
            <p>学院: {{ scope.row.department }}</p>
            <p>班级: {{ scope.row.class }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column
        label="学院"
        width="250">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 0px">{{ scope.row.department }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="班级"
        width="250">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span style="margin-left: 0px">{{ scope.row.class }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.student_id)">删除</el-button>
          <el-button
            size="mini"
            type="success"
            @click="handleLog(scope.row.student_id)">奖励记录</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="deleteDialogVisible"
      width="30%">
      <span>Are you sure? 删除 ?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClickSureDelete">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="编辑学生信息" :visible.sync="editDialogVisible">
      <el-form :inline="true" ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名" style="width:300px;">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="学号" style="width:300px;">
          <el-input v-model="form.student_id" :disabled="true"></el-input>
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
        <br><br>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClickSureEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryList } from '@/api/table/queryList'
import { deleteData } from '@/api/table/deleteData'
import { editData } from '@/api/table/editData'
import { queryDetail } from '@/api/table/queryDetail'
export default {
  data () {
    return {
      tableData: [{
        student_id: '1605010313',
        name: '唐正伟',
        sex: '男',
        class: '计科三班',
        department: '计算机学院',
        birthday: '1998-09-08',
        native_place: '上海市普陀区金沙江路 1518 弄'
      }],
      options: [{
        value: 1,
        label: '姓名'
      }, {
        value: 2,
        label: '学号'
      }],
      form: {
        student_id: '',
        name: '',
        sex: '',
        department: '',
        birthday: '',
        native_place: ''
      },
      filterMode: '',
      filterCont: '',
      loading2: false,
      warning: false,
      deleteDialogVisible: false,
      editDialogVisible: false,
      deleteId: '',
      editInfo: ''
    }
  },
  watch: {
    filter_mode: (val) => {
      console.log('filter_mode--' + val)
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleEdit (row) {
      console.log(row)
      this.form = row
      this.editDialogVisible = true
    },
    handleLog (id) {
      // this.dialogTop('查询', 'success')
      this.loading2 = true
      queryDetail('/api/queryDetail.php?student_id=' + id).then(res => {
        this.loading2 = false
        if (res.data.length === 0) {
          this.dialogTop('无相关记录!', 'error')
        } else {
          alert('奖励记录:' + res.data[0].description)
        }
      })
    },
    handleDelete (id) {
      console.log(id)
      this.deleteId = id
      this.deleteDialogVisible = true
    },
    handleClickSureDelete () {
      this.deleteDialogVisible = false
      this.loading2 = true
      deleteData(`/api/deleteData.php`, `id=${this.deleteId}`).then(res => {
        if (res.data === 1) {
          this.dialogTop('删除成功咯哦', 'success')
          this.getList()
        }
      })
    },
    getList () {
      console.log('getList()-start')
      this.loading2 = true
      queryList(`/api/queryList.php?mode=${this.filterMode}&cont=${this.filterCont}`).then(res => {
        console.log('then--' + res.data)
        this.tableData = res.data
        if (!this.tableData.length) {
          this.dialogTop('没有找到匹配的数据', 'warning')
        }
        this.loading2 = false
      })
    },
    handleClickSearch () {
      if (this.filterMode === '' || this.filterCont === '') {
        // this.warning = true
        // this.$message({
        //   message: '请输入查询内容 and 选择查询方式哦 >_<',
        //   type: 'warning'
        // })
        this.dialogTop('请输入查询内容 and 选择查询方式哦 >_<', 'error')
      } else {
        this.getList()
      }
    },
    dialogTop (message, type) {
      this.$message({
        message,
        type
      })
    },
    handleClickSureEdit () {
      this.editDialogVisible = false
      console.log('handleClickSureEdit()')
      this.loading2 = true
      this.editInfo = `student_id=${this.form.student_id}&name=${this.form.name}&sex=${this.form.sex}&department=${this.form.department}&birthday=${this.form.birthday}&native_place=${this.form.native_place}`
      console.log('editInfo:' + this.editInfo)
      editData(`/api/editData.php`, this.editInfo).then(res => {
        if (res.data === 1) {
          this.dialogTop('修改成功', 'success')
          this.getList()
        } else {
          alert(res.data)
          this.getList()
          this.loading2 = false
        }
      })
    },
    handleClickRefresh () {
      this.filterMode = ''
      this.filterCont = ''
      this.getList()
      this.dialogTop('刷新成功啦', 'success')
    }
  }
}
</script>

<style>

</style>
