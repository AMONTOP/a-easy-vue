<template>
    <div>
      父组件向子组件传递数据
      <input type="text" v-model="name">
      <child  :inputText="name"/>
    </div>
</template>

<script>
  import child from './Son'
    export default {
        components:{
          child
        },
        data(){
          return{
            name : ''
          }
        }
    }
</script>

<style scoped>

</style>
