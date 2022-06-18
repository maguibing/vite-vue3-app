<template>
  <h1>{{title}}</h1>
  <button @click="click">子组件</button>
</template>
<script setup>
import { ref, reactive } from 'vue'
const title = ref("文章")
const list = reactive({
  name: "zs"
})
const props = defineProps({
  goal: {
    type: Object,
    default: () => { }
  }
})

console.log(props.goal)

const emits = defineEmits(['enlarge-text'])

const click = () => {
  emits("enlarge-text", 'content')
}

// 向外暴露的数据
defineExpose({
  title,
  list
})
</script>