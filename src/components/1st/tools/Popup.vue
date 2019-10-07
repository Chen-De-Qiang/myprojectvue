
<template>
    <div class="modal-bg" v-show="show">
      <div class="modal-container">
        <div class="modal-header">
          {{ title }}
        </div>
        <div class="modal-main">
          <slot :model="User">
            <div>名字：<input v-model="User.userName" placeholder="请输入名字,,"></input></div>
            <br/>

            <div>年龄：<input v-model="User.age" placeholder="请输入年龄,,"></input></div>
            <br/>

            <div>生日：<input v-model="User.birthday" placeholder="请输入生日,,"></input></div>
            <br/>

            <div>学院：<input v-model="User.department" placeholder="请输入学院,,"></input></div>
            <br/>

            <div>密码：<input v-model="User.passWord" placeholder="请输入密码,,"></input></div>
            <br/>

            <div>专业：<input v-model="User.professional" placeholder="请输入专业,,"></input></div>
            <br/>

            <div>性别：<input v-model="User.sex" placeholder="请输入性别,,"></input></div>
            <br/>

            <div>班级：<input v-model="User.userClass" placeholder="请输入班级,,"></input></div>
            <br/>

            <div>学号：<input v-model="User.userNum" placeholder="请输入学号,,"></input></div>
          </slot>
        </div>
        <div class="modal-footer">
          <el-button  @click="hideModal">取消</el-button>
          <el-button  @click="submit">确认</el-button>
        </div>
      </div>
    </div>
</template>


<script>
    export default {
      name: "Popup",
      model:{
        prop:'User'
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
        User:{
          userId:{
            type: String,
            default: ''
          },
          userName:{
            type: String,
            default: ''
          },
          passWord:{
            type: String,
            default: ''
          },
          age:{
            type: Number,
            default: ''
          },
          userNum:{
            type: String,
            default: ''
          },
          sex:{
            type: String,
            default: ''
          },
          department:{
            type: String,
            default: ''
          },
          userClass:{
            type: String,
            default: ''
          },
          professional:{
            type: String,
            default: ''
          },
          birthday:{
            type: String,
            default: ''
          }
        },
      },
      data() {
        return {
          // userList:{
          //   userId:'',
          //   userName:'',
          //   passWord:'',
          //   age:'',
          //   userNum:'',
          //   sex:'',
          //   department:'',
          //   userClass:'',
          //   professional:'',
          //   birthday:''
          // }
          userList:{}
        }
      },
      watch: {
        changeDate: function(){ // 监听父组件的变化
          this.userList = this.User
        }
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
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 10;
  }
  .modal-container {
    width: 600px;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .modal-header {
    height: 60px;
    background: black;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: move;
  }
  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-top: 1px solid #ddd;
  }
  .modal-footer button {
    width: 100px;
  }
  .modal-main {
    height: 350px;
    overflow:auto;
    background-color: bisque;
    padding: 15px 40px;
  }
</style>
