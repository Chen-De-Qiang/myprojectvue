<template>
  <div>
    <h1>作业查看</h1>
    <p>11703080131-陈德强</p>
    <button @click="toPage('Login1st')">作业1+vue.js</button>
    <br/>
    <button @click="toPage('HomePage2st')">作业2+element_ui</button>
    <br/>
    <button @click="toPage('login2st')">图书管理系统</button>
    <br/>
    <button @click="toPage('ByContainer')">编译原理</button>
  </div>
</template>

<script>
    export default {
        name: "VersionControlPage",
        methods:{
          toPage(Path){
            console.log(Path);
            this.$router.push({
              path:'/'+Path
            })
          }
        }
    }
</script>

<style scoped>
button{
  margin-top: 50px;
  color: blue;
  cursor: pointer;
}
</style>
