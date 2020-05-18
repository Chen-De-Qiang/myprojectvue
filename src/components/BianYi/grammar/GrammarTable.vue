<template>
  <el-table
    :data="tableData"
    height="320"
    style="width: 100%">
    <el-table-column
            type="index"
            width="100"
            label="序号"
            :index="indexMethod">
    </el-table-column>
    <el-table-column
            prop="line"
            label="行号">
    </el-table-column>
    <el-table-column
            prop="tag"
            label="种别码">
    </el-table-column>
    <el-table-column
            prop="detail"
            label="类型名称"
            width="180">
    </el-table-column>
    <el-table-column
            prop="symbol"
            label="符号">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
      name: "GrammarTable",
      props: {
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
