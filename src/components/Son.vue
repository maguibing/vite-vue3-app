<template>
    <h1>{{title}}</h1>
    <button @click="click">子组件</button>
    <attrs-button class="class" @click="handle"></attrs-button>
    <DeepSonVue></DeepSonVue>
</template>
<script>
export default { name:"Son"}
</script>
<script setup>
import AttrsButton from './Attrs.vue'
import DeepSonVue from './DeepSon.vue';
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

const emits = defineEmits({
    // emits 选项还支持对象语法，它允许我们对触发事件的参数进行验证
    enlargeText (v) { 
        if (v === 'content') {
            return true
        } else {
            return false
        }
    }
})

const click = () => {
  emits("enlargeText", 'content')
}

const handle = () => { 
    console.log("这里是透传的打印")
}


// 向外暴露的数据
defineExpose({
  title,
  list
})
</script>