<template>
<!-- 当一个子组件没有显示接收 （emits props）时，值会自动添加到根元素的class 上 -->
  <div class="container">
    <button>这是一个透传按钮</button>
    <button>这是一个透传按钮</button>
    <button>这是一个透传按钮</button>
    <button>这是一个透传按钮</button>
    <h4>{{ $attrs.class }}</h4>
    <div>123</div>
  </div>
</template>

<script>
export default {
    inheritAttrs: true // 禁用透传
}
</script>

<script setup>
import { useAttrs } from 'vue'
console.log(useAttrs())
// const props = defineProps({
//     class: {
//         type: String,
//         default:null
//     }
// })
</script>

<style lang='scss' scoped>
.container{
    margin-top: 10px;
}
</style>
