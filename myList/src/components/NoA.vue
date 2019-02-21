<template>
  <div>
    A组件:
    <span>{{elementValue}}</span>
    <input type="button" value="点击触发" @click="elementByValue">
  </div>
</template>
<script>
  // 引入公共的bus，来做为中间传达的工具
  import Bus from '../bus.js'
  export default {
    name:'noA',
    data () {
      return {
        elementValue: 4
      }
    },
    methods: {
      elementByValue: function () {
        Bus.$emit('val', this.elementValue)
      }
    }
  }
</script>
