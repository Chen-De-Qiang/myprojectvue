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
      <el-button :plain="true" @click="openNotify">成功</el-button>
    </el-header>
    <el-container style="height: 640px">
      <el-main >
        <by ref="procedureEdit"></by>
      </el-main>
      <el-aside  width="665px">
        <div style=" height:320px;border: #080808 solid 1px;overflow:auto">
          <template v-if="GrammarTable">
            <GrammarTable></GrammarTable>
          </template>
        </div>
        <div style=" height:320px;border: #080808 solid 1px;overflow:auto">
          <resultTable></resultTable>
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
          //语法编译器
          GrammarTable:true,
          //词法编译器
          lexical:true,
          textarea: '',
          count: 0,
          Lexical: {
            contentText: ''
          }
        }
      },
      components: {by,GrammarTable,lexical,resultTable},
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
              console.log(res.data.data);
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
