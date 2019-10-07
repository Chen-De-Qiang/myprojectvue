<template>
    <div>
      <div class="order">
        <span class="line"></span>
        <span class="txt"><b>学生管理系统</b></span>
        <span class="line"></span>
      </div>
      <div>
        <div>
          <ul class="ulNone">
            <li><button style="width: 90px;height: 35px" v-on:click="AddDataList">新增</button></li>
            <li><button style="width: 90px;height: 35px" >按id排序</button></li>
            <li><button style="width: 90px;height: 35px" >按年龄排序</button></li>
          </ul>
        </div>
        <table>
          <thead>
              <tr>
                <td width="20"><input type="checkbox"></input></td>
                <template v-for= "item in headContent">
                  <td>{{item}}</td>
                </template>
              </tr>
          </thead>
              <template v-for="(list,index) in dataList ">
                <tr>
                  <td><input type="checkbox"></input></td>
                  <td>{{index}}</td>
                  <td>{{list.userId}}</td>
                  <td>{{list.userName}}</td>
                  <td>{{list.passWord}}</td>
                  <td>{{list.age}}</td>
                  <td>{{list.userNum}}</td>
                  <td>{{list.sex}}</td>
                  <td>{{list.department}}</td>
                  <td>{{list.userClass}}</td>
                  <td>{{list.professional}}</td>
                  <td>{{list.birthday}}</td>
                  <td>
                    <a  v-on:click="EditDataList(list)">编辑</a>
                    &nbsp;&nbsp;
                    <a v-on:click="DeleteDataList(list.userId)">删除</a>
                    &nbsp;&nbsp;
                    <a v-on:click="CheckDataList(list)">查看</a>
                  </td>
                </tr>
              </template>
        </table>
        <div>
          <ul class="ulNone2">
            <li>第1页&nbsp;&nbsp;共6条&nbsp;&nbsp;（每页显示10条）</li>
            <li>请输入页数：&nbsp;&nbsp;<input></input>&nbsp;&nbsp;<button>前往</button></li>
            <li><button>全部删除</button></li>
            <li>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button>上一页</button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button>下一页</button></li>
          </ul>
        </div>
      </div>
      <Popup :show="show" :title="title" v-model="User" @hideModal="hideModal" @submit="submit">
      </Popup>
    </div>
</template>

<script>
    import Popup from './tools/Popup.vue'
    export default {
      name: "login-1st",
      data: function () {
        return {
          headContent: ['序号', 'id', '姓名', '密码', '年龄', '学号', '性别', '学院', '班级', '专业', '生日', '操作'],
          dataList: [],
          User:{
            userId:'',
            userName:'',
            passWord:'',
            age:'',
            userNum:'',
            sex:'',
            department:'',
            userClass:'',
            professional:'',
            birthday:''
          },
          title: '新增学生信息',
          show: false,
          OperationType:''
        }
      },
      components:{
        Popup
      },
      mounted:function(){
        this.getDataList();
      },
      methods:{
        hideModal() {
          // 取消弹窗回调
          this.show = false;
        },

        submit(childData) {
          // 确认弹窗回调
          console.log(childData);
          if(this.OperationType=="edit")
          {
            if(confirm("是否确认删除")){
              this.edit(childData);
              this.show = false;
            }
          }else if(this.OperationType=="add"){
            if(confirm("是否确认提交")){
              this.add(childData);
              this.show = false;
            }
          }else if(this.OperationType=="check"){
              this.show = false;
              this.OperationType="";
          }
        },

        CheckDataList(list){
          this.User=list;
          this.show=true;
          this.title="查看学生信息";
          this.OperationType="check";
        },
        getDataList () {
          this.$axios.get('/login/getAllUser').then(res => {
              if (res.data.code === 200) {
               this.dataList=res.data.data;
              }
            }).catch(failResponse => {
              console.log('失败');
            })
        },

        AddDataList(list){
          this.User=list;
          this.show=true;
          this.title="新增学生信息";
          this.OperationType="add";
        },
        add(list){
          this.OperationType='';
          this.$axios.post('/login/addStudent',list)
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                console.log('编辑成功');
                this.getDataList();
              }
            })
            .catch(failResponse => {
              console.log('失败');
            })
        },

        EditDataList(list){
          this.title="编辑学生信息";
          this.OperationType="edit";
          this.User=list;
          this.show=true;
        },
        edit(list){
          this.OperationType='';
          this.$axios.post('/login/modifyUser',list)
            .then(successResponse => {
              if (successResponse.data.code === 200) {
                console.log('编辑成功');

                this.getDataList();
              }
            })
            .catch(failResponse => {
              console.log('失败');
            })
        },

        DeleteDataList(index){
          if(confirm("是否确认删除"))
          {
            this.$axios.get('/login/deleteUser?'+"UserId="+ index).then(res => {
              if (res.data.code === 200) {
                this.getDataList();
                alert("删除成功");
              }
            }).catch(failResponse => {
              alert("删除失败");
            })
          }
        }
      }
    }
</script>

<style scoped>
  .order {
    height: 60px;
    line-height: 60px;
    text-align: center;
    size: 20px;
  }
  .order .line {
    display: inline-block;
    width: 300px;
    border-top: 2px solid #080808;
  }
  .order .txt {
    vertical-align: middle;
  }

  table
  {
    clear: none;
    border-collapse:collapse;
    width: 1000px;
    margin: 0 auto;
    overflow:auto;

  }

  table, td, th
  {
    height: 30px;
    border:1px solid black;
  }

  .ulNone{
    margin-left: -610px;
    list-style-type: none;
  }
  .ulNone2{
    list-style-type: none;
  }
  .ulNone2 li{
    display: inline;
    margin-right: 50px;
  }
  .ulNone li{
    display: inline;
    margin-right: 50px;
  }

</style>
