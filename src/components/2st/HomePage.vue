<template>
<div>
  <div>
    <el-divider><span style="font-size: 30px"><b>学生管理系统</b></span></el-divider>
  </div>
  <div>
    <el-form style="margin-top: 20px; text-align: left" :inline="true" :model="searchUser">
      <el-form-item style="margin-top: 20px;" label="姓名：">
        <el-input  clearable v-model="searchUser.userName" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item  style="margin-top: 20px;" label="学号：">
        <el-input clearable v-model="searchUser.userNum" placeholder="请输入学号"></el-input>
      </el-form-item>
      <el-form-item  style="margin-top: 20px;" label="学院：">
        <el-input clearable v-model="searchUser.department" placeholder="请输入学院"></el-input>
      </el-form-item>
      <el-form-item  style="margin-top: 20px;" label="专业：">
        <el-input clearable v-model="searchUser.professional" placeholder="请输入专业"></el-input>
      </el-form-item>
      <el-form-item  style="margin-top: 20px;" label="性别：">
        <el-select clearable v-model="searchUser.sex" placeholder="请选择性别">
          <el-option label="全部" value=""></el-option>
          <el-option label="男" value="男"></el-option>
          <el-option label="女" value="女"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
  <div>
    <ul class="ulNone">
      <li ><el-button  @click="handleAdd" type="primary">新增</el-button></li>
      <li ><el-button  @click="deleteMore" type="danger">删除</el-button></li>
      <li ><el-button  @click="searchUserData" type="success">查询</el-button></li>
      <li ><el-button  @click="cleanSearch" type="info">清除</el-button></li>
    </ul>
  </div>

    <el-table
      v-loading="loading"
      ref="multipleTable"
      :data="dataList"
      style="width:100%;margin:0 auto;"
      stripe
      border
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        align="center"
        width="70">
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod"
        width="70"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="userName"
        label="姓名"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="passWord"
        label="密码"
        width="150"
        align="center">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="100"
        show-overflow-tooltip
        align="center">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="100"
        show-overflow-tooltip
        align="center">
      </el-table-column>
      <el-table-column
      prop="department"
      label="学院"
      width="150"
      show-overflow-tooltip
      align="center">
    </el-table-column>
      <el-table-column
        prop="userNum"
        label="学号"
        width="150"
        show-overflow-tooltip
        align="center">
      </el-table-column>
      <el-table-column
      prop="userClass"
      label="班级"
      width="150"
      show-overflow-tooltip
      align="center">
    </el-table-column>
      <el-table-column
      prop="professional"
      label="专业"
      width="200"
      show-overflow-tooltip
      align="center">
    </el-table-column>
      <el-table-column
      prop="birthday"
      label="生日"
      width="150"
      show-overflow-tooltip
      align="center">
    </el-table-column>
      <el-table-column
        label="操作"
        width="250"
        fixed="right"
        align="center"
      >
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button
          size="mini"
          type="info"
          @click="handleCheck(scope.$index, scope.row)">查看</el-button>
      </template>
      </el-table-column>
    </el-table>
  <div>
    <el-pagination
      background
      style="margin-top: 20px;text-align: left"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
  <div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible">
      <el-form label-position="left" label-width="80px" :model="User">
        <el-form-item  label="姓名:">
          <el-input clearable :disabled="disabled" v-model="User.userName"></el-input>
        </el-form-item>
        <el-form-item label="年龄:">
          <el-input clearable :disabled="disabled" v-model="User.age"></el-input>
        </el-form-item>
        <el-form-item label="生日:">
          <el-input clearable :disabled="disabled" v-model="User.birthday"></el-input>
        </el-form-item>
        <el-form-item label="学院:">
          <el-select :disabled="disabled" style="width: 100%" clearable v-model="User.department" placeholder="请选择学院">
            <el-option label="理学院" value="理学院"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
            <el-option label="人工智能学院" value="人工智能学院"></el-option>
            <el-option label="会计" value="会计"></el-option>
            <el-option label="计算机" value="计算机"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="密码:">
        <el-input :disabled="disabled" v-model="User.passWord"></el-input>
      </el-form-item>
        <el-form-item label="专业:">
          <el-select :disabled="disabled" style="width: 100%" clearable v-model="User.professional" placeholder="请选择专业">
            <el-option label="记账" value="记账"></el-option>
            <el-option label="软件工程" value="软件工程"></el-option>
            <el-option label="计算机" value="计算机"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别:">
          <el-select :disabled="disabled" style="width: 100%" clearable v-model="User.sex" placeholder="请选择性别">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
      </el-form-item>
        <el-form-item label="班级:">
          <el-input clearable :disabled="disabled" v-model="User.userClass"></el-input>
        </el-form-item>
        <el-form-item label="学号:">
        <el-input clearable :disabled="disabled" v-model="User.userNum"></el-input>
      </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</div>
</template>

<script>

    export default {
        name: "HomePage2st",
      data() {
        return {
          loading:false,
          dialogFormVisible: false,
          formLabelWidth: '120px',
          disabled:false,
          title:"",
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
          dataList: [],
          searchUser:{
            userId:'',
            userName:'',
            passWord:'',
            age:'',
            userNum:'',
            sex:'',
            department:'',
            userClass:'',
            professional:'',
            birthday:'',
            pageSize:'',
            currentPage:''
          },
          multipleSelection: [],//多选框，
          //分页
          totalCount: 0, // 总条数
          currentPage: 1, // 当前页
          pageSize: 10, // 页面大小
          submitType:'',
        }
      },
      mounted:function(){
        this.getDataList()
      },
      methods: {
        // 取消
        cancel(){
          this.dialogFormVisible=false;
          this.submitType="";
          this.User={}
        },
        cleanSearch(){
          this.searchUser={};
        },
        //获取数据
        getDataList () {
          this.loading=true;
          this.searchUser.pageSize=this.pageSize;
          this.searchUser.currentPage=this.currentPage;
          this.$axios.get('/login/getUser',{params:this.searchUser}).then(res => {
            if (res.data.code == 200) {
              this.dataList=res.data.data;
              this.totalCount=res.data.totalCount;
              console.log(this.dataList);
              this.loading=false;
            }
          }).catch(failResponse => {
            this.loading=false;
          })
        },

        searchUserData(){
          this.loading=true;
          this.searchUser.pageSize=10;
          this.searchUser.currentPage=1;
          this.$axios.get('/login/getUser',{params:this.searchUser}).then(res => {
            if (res.data.code == 200) {
              this.dataList=res.data.data;
              this.totalCount=res.data.totalCount;
              console.log(this.dataList);
              this.loading=false;
            }
          }).catch(failResponse => {
            this.loading=false;
          })
        },

        submit(){
          this.disabled=false;
          this.loading=true;
          if(this.submitType=="edit")
          {
            this.$axios.post('/login/modifyUser',this.User)
              .then(successResponse => {
                if (successResponse.data.code === 200) {
                  this.getDataList();
                  this.loading=false;
                }
              })
              .catch(failResponse => {
                this.loading=false;
              });
          }else if(this.submitType=="add"){
            this.$axios.post('/login/addStudent',this.User)
              .then(successResponse => {
                if (successResponse.data.code === 200) {
                  this.getDataList();
                  this.loading=false;
                }
              })
              .catch(failResponse => {
                this.loading=false;
              })
          }else {
            this.loading=false;
          }
          this.dialogFormVisible=false;
          this.submitType="";
          this.title="";
        },
        indexMethod(index) {
          return index;
        },

        //新增
        handleAdd() {
          this.title='新增学生信息';
          this.dialogFormVisible=true;
          this.submitType="add"
        },

        //编辑
        handleEdit(index, row) {
          this.title='编辑学生信息';
          this.dialogFormVisible=true;
          this.User=row;
          this.submitType="edit"
        },

        //删除
        handleDelete(index, row) {
          if(confirm("是否确认删除"))
          {
            this.loading=true;
            this.$axios.get('/login/deleteUser?'+"UserId="+ row.userId).then(res => {
              if (res.data.code === 200) {
                this.getDataList();
                this.loading=false;
              }
            }).catch(failResponse => {
              this.loading=false;
            })
          }
        },

        //查看
        handleCheck(index, row) {
          console.log(row);
          this.disabled=true;
          this.title='查看';
          this.dialogFormVisible=true;
          this.$axios.get('/login/getUser',{params:row}).then(res => {
            if (res.data.code == 200) {
              this.User=res.data.data[0];
            }
          }).catch(failResponse => {

          })
        },

        //批量删除
        deleteMore(){
          if(confirm("是否确认删除"))
          {
            this.loading=true;
            for(let i=0;i<this.multipleSelection.length;i++) {
              let userId=this.multipleSelection[i].userId;
              this.$axios.get('/login/deleteUser?' + "UserId=" + userId).then(res => {
                if (res.data.code === 200) {
                  this.getDataList();
                }
              }).catch(failResponse => {
              })
            }
            this.loading = false;
          }
        },
        //多选单选
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },

        // 分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize=val;
          this.getDataList();
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.currentPage=val;
          this.getDataList();
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

  .ulNone{
    text-align: left;
    padding-left: 0px;
    padding-top: 0px;
    list-style-type: none;
  }

  .ulNone li{
    display: inline;
    text-align: left;
  }
</style>
