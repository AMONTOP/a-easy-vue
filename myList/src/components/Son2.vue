<template>
    <div>
      <p>{{content}}</p>
      <input type="button" value="点我触发" @click="send">
    </div>
</template>

<script>
    export default {
        data(){
          return{
           content:'我是子组件'
          }
        },
      methods:{
          send(){
            this.$emit("childByValue",this.content)
          }
      }
    }
</script>

<style scoped>

</style>
