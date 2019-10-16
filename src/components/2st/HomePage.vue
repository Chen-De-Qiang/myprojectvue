<template>
<div>
  <div class="order">
    <span class="line"></span>
    <span class="txt"><b>学生管理系统</b></span>
    <span class="line"></span>
  </div>
  <div>
    <ul class="ulNone">
      <li><el-button size="mini" type="primary">新增</el-button></li>
      <li><el-button size="mini" type="danger">删除</el-button></li>
    </ul>
  </div>

    <el-table
      ref="multipleTable"
      :data="tableData"
      style="width: 1000px;margin: 0 auto;"
      stripe
      border
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        type="index"
        label="序号"
        :index="indexMethod"
        width="60"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        align="center">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip
        align="center">
      </el-table-column>
      <el-table-column
        label="操作"
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
      style=" margin-left: -450px;margin-top: 20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="40">
    </el-pagination>
  </div>
</div>
</template>

<script>
    export default {
        name: "HomePage2st",
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            tag: '家'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333,
            tag: '公司'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333,
            tag: '家'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333,
            tag: '公司'
          }],
          multipleSelection: [],//多选框，
          //分页
          currentPage: 1
        }
      },
      methods: {
        indexMethod(index) {
          return index;
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        handleCheck(index, row) {
          console.log(index, row);
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
        // 分页
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
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
    /*margin: auto 0;*/
    margin-left: -920px;
    list-style-type: none;
  }

  .ulNone li{
    display: inline;
  }
</style>
