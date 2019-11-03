<template>
  <el-dialog title="title" :visible.sync="dialogFormVisible">
    <el-form :model="User">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="User.name" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
    export default {
      name: "Form",
      dialogTableVisible: false,
      dialogFormVisible: false,
      model: {
        prop: 'User'
      },
      props: {
        show: {
          type: Boolean,
          default: false
        },
        title: {
          type: String,
          default: ''
        },
        User: {
          userId: {
            type: String,
            default: ''
          },
          userName: {
            type: String,
            default: ''
          },
          passWord: {
            type: String,
            default: ''
          },
          age: {
            type: Number,
            default: ''
          },
          userNum: {
            type: String,
            default: ''
          },
          sex: {
            type: String,
            default: ''
          },
          department: {
            type: String,
            default: ''
          },
          userClass: {
            type: String,
            default: ''
          },
          professional: {
            type: String,
            default: ''
          },
          birthday: {
            type: String,
            default: ''
          }
        },
      },
      methods: {
        hideModal() {
          this.$emit('hideModal')
        },
        submit() {
          this.$emit('submit',this.User)
        }
      }
    }
</script>

<style scoped>

</style>
