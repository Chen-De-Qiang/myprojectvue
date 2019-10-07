<template>
  <div>
    <h1>作业查看</h1>
    <p>11703080131-陈德强</p>
    <button @click="toPage('Login1st')">作业1</button>
    <br/>
    <button @click="toPage('login2st')">作业2</button>
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
