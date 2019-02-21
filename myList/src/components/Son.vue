<template>
    <p>我是子组件{{inputText}}</p>
</template>

<script>
    export default {
        props:{
          inputText:String,
          required:true
        }
    }
</script>

<style scoped>

</style>
