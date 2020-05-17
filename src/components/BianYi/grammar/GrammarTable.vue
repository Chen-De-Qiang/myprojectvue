<template>
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
</template>

<script>
    export default {
        name: "GrammarTable",
      data() {
        return {
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
          }]
        }
      }
    }
</script>

<style scoped>

</style>
