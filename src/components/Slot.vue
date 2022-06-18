<template>
  <div class="slot">
    <slot name='default' title='title'>默认插槽的后备内容</slot>
    <slot name='main' message='header'></slot>
    <slot name='footer'></slot>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const obj = reactive({
    name: "张三",
    age:18
})
</script>
