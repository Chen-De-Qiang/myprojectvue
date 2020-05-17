<template>
  <el-container>
    <el-header>
      <el-row>
        <el-button type="success">文件</el-button>
        <el-button type="primary">编辑</el-button>
        <el-button @click="handleEdit" type="success">词法分析</el-button>
        <el-button type="info">语法分析</el-button>
        <el-button type="warning">中间代码</el-button>
        <el-button type="danger">目标代码生成</el-button>
        <el-button type="success">查看</el-button>
        <el-button type="info">帮助</el-button>
      </el-row>
    </el-header>
    <el-container style="height: 640px">
      <el-main >
        <by ref="procedureEdit"></by>
      </el-main>
      <el-aside  width="665px">
          <div style=" height:320px;border: #080808 solid 1px;overflow:auto">
            <el-table
              :data="tableData"
              height="320"
              border
              style="width: 100%">
              <el-table-column
                type="index"
                width="100"
                label="序号"
                :index="indexMethod">
              </el-table-column>
              <el-table-column
                prop="name"
                label="类型名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="符号">
              </el-table-column>
            </el-table>
          </div>
        <div style=" height:320px;border: #080808 solid 1px;overflow:auto">
          <el-table
            :data="tableData2"
            height="320"
            border
            style="width: 100%">
            <el-table-column
              type="index"
              width="100"
              label="序号"
              :index="indexMethod">
            </el-table-column>
            <el-table-column
              prop="kind"
              label="分析类型"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="运行结果"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="原因分析">
            </el-table-column>
          </el-table>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
    import by from '../BianYi/bianyiyuanli'
    // import NavMenu from "../common/NavMenu";
    export default {
        name: "ByContainer",
      data() {
        return {
          textarea: '',
          count: 0,
          tableData2: [{
            name: '语法正确',
            address: '无',
            kind:'算术表达式分析'
          }],
          tableData: [{
            name: '左括号',
            address: '('
          }, {
            name: '标识符',
            address: 'a'
          }, {
            name: '运算符',
            address: '+'
          }, {
            name: '左括号',
            address: '（'
          }, {
            name: '标识符',
            address: 'b'
          }, {
            name: '运算符',
            address: '+'
          }, {
            name: '无符号整数',
            address: '123'
          }, {
            name: '运算符',
            address: '*'
          }, {
            name: '标识符',
            address: 'b'
          }, {
            name: '右括号',
            address: '）'
          }, {
            name: '右括号',
            address: '）'
          }, {
            name: '运算符',
            address: '+'
          }, {
            name: '无符号整数',
            address: '123'
          }, {
            name: '运算符',
            address: '*'
          }, {
            name: '标识符',
            address: 'b'
          }, {
            name: '结束符号',
            address: '；'
          }],
          Lexical: {
            contentText: ''
          }
        }
      },
      components: {by},
      methods: {
        load () {
          this.count += 2
        },
        indexMethod(index) {
            return index;
        },
        handleEdit () {
          var k=this.$refs['procedureEdit'].getVal();
          console.log(JSON.stringify(k));
          this.$axios.post('/Lexical',JSON.stringify(k)).then(res => {
            if (res.data.code === 200) {

            }
          }).catch(failResponse => {

          })
        }
      }
    }
</script>

<style scoped>

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    border: darkgrey solid 1px;
  }

  body > .el-container {
    margin-bottom: 0px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-header, .el-footer {
    background-color: #E9EEF3;
    border: darkgrey solid 1px;
    color: #333;
    text-align: left;
    line-height: 60px;
  }
</style>
