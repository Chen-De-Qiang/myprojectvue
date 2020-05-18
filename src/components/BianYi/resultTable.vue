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
      prop="analysisType"
      label="分析类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="analysisResult"
      label="运行结果"
      width="180">
    </el-table-column>
    <el-table-column
      prop="analysisReason"
      label="原因分析">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      name: "resultTable",
      props:{
        tableData:[]
      },
      methods: {
        indexMethod(index) {
          return index + 1;
        }
      }
    }
</script>

<style scoped>

</style>
