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
</template>

<script>
    export default {
      name: "resultTable",
      data() {
        return {
          tableData: [{
            name: '语法正确',
            address: '无',
            kind: '算术表达式分析'
          }]
        }
      }
    }
</script>

<style scoped>

</style>
