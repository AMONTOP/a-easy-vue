<template>
  <div>
    outter<br/>
    store状态管理:{{getCount}}
    <input type="button" @click="add" value="增加数">
  </div>

</template>

<script>
  import store from '../store'
    export default {
        name: "outter",
      store,
      data(){
          return{

          }
      },
      computed:{
          getCount(){
            return this.$store.getters.getTotalCount
          }
      },
      methods:{
          add(){
            this.$store.dispatch("increment",{
              amount:10
            })
          }
      }
    }
</script>

<style scoped>

</style>
