<template>
<div>
  <p>父组件{{name}}</p>
  <child @childByValue="childByValue"></child>
</div>
</template>

<script>
  import child from "./Son2"
    export default {
        components:{
          child
        },
      data(){
          return{
            name
          }
      },
      methods:{
        // childValue就是子组件传过来的值
        childByValue:function(content){
          this.name = content
        }
      }

    }
</script>

<style scoped>

</style>
