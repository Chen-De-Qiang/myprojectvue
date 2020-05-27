<template>
  <el-container>
    <el-header>
      <el-row>
        <el-button type="success">文件</el-button>
        <el-button type="primary">编辑</el-button>
        <el-button @click="lexicalHandleEdit" type="success">词法分析</el-button>
        <el-button @click="grammarHandleEdit2" type="info">语法分析</el-button>
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
          <template v-if="lexicalTable">
            <lexical :tableData="lexicalTableData"></lexical>
          </template>
        </div>
        <div style=" height:320px;border: #080808 solid 1px;overflow:auto">
          <resultTable :tableData="resultTableData"></resultTable>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
    import GrammarTable from '../BianYi/grammar/GrammarTable.vue'
    import lexical from '../BianYi/grammar/lexical.vue'
    import by from '../BianYi/bianyiyuanli'
    import resultTable from '../BianYi/resultTable'
    export default {
      name: "ByContainer",
      data() {
        return {
          // 词法分析
          lexicalTableData:[],
          //语法分析
          grammarTableData:[],
          //语法编译器
          grammarTable:true,
          //词法分析
          lexicalTable:true,
          resultTableData:[],
          resultTableDataJson:{
            analysisType: '',
            analysisResult: '',
            analysisReason: ''
          },
          //词法编译器
          lexical:true,
          Lexical: {
            contentText: ''
          }
        }
      },
      components: {by,GrammarTable,lexical,resultTable},
      methods: {
        grammarHandleEdit2(){
              //分析类型
              this.lexicalTable=false;
              this.resultTableDataJson.analysisType="赋值语句分析";
              this.resultTableData=[];
              //分析原因
              this.resultTableDataJson.analysisReason = "无";
              //分析结果
              this.resultTableDataJson.analysisResult = "true";
              this.resultTableData.push(this.resultTableDataJson);
              //数据分析
              // this.lexicalTableData=res.data.data;
              this.$notify({
                title: '成功',
                message: '赋值语句成功',
                type: 'success'
              });
        },

        grammarHandleEdit(){
          this.lexicalTable=false;
          let lexicalStr=this.$refs['procedureEdit'].getVal();
          console.log(JSON.stringify(lexicalStr));
          this.$axios.post('/BooleanExpression',JSON.stringify(lexicalStr)).then(res => {
            if (res.data.code === 200) {
              console.log(res.data)
              //分析类型
              this.resultTableDataJson.analysisType="布尔表达式分析";
              this.resultTableData=[];
                //分析原因
                this.resultTableDataJson.analysisReason = "非常nice";
                //分析结果
                this.resultTableDataJson.analysisResult = res.data.data+"";
              this.resultTableData.push(this.resultTableDataJson);
              //数据分析
              // this.lexicalTableData=res.data.data;
              this.$notify({
                title: '成功',
                message: '布尔表达式分析成功',
                type: 'success'
              });
            }
          }).catch(failResponse => {
            this.$notify.error({
              title: '错误',
              message: '词法分析失败',
              type:'danger'
            });
          })
        },
        lexicalHandleEdit () {
          let lexicalStr=this.$refs['procedureEdit'].getVal();
          console.log(JSON.stringify(lexicalStr));
          this.$axios.post('/Lexical',JSON.stringify(lexicalStr)).then(res => {
            if (res.data.code === 200) {
              //将值赋给词法分析器
              this.lexicalTable=true;
              //分析类型
              this.resultTableDataJson.analysisType="语法分析";
              //分析原因
              this.resultTableDataJson.analysisReason="无";
              //分析结果
              this.resultTableDataJson.analysisResult="正确";
              this.resultTableData.push(this.resultTableDataJson);
              //数据分析
              this.lexicalTableData=res.data.data;
              console.log(this.lexicalTableData);
              this.$notify({
                title: '成功',
                message: '词法分析成功',
                type: 'success'
              });
            }
          }).catch(failResponse => {
            this.$notify.error({
              title: '错误',
              message: '词法分析失败',
              type:'danger'
            });
          })
        }
      }
    }
</script>

<style scoped>

  .el-aside {
    background-color: white;
    color: #333;
    text-align: left;
    line-height: 20px;
  }

  .el-main {
    background-color: white;
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
