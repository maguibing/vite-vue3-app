<template>
  <div class="pinia">
    <h1>我要使用pinia了</h1>
    <span>{{count}}</span>
  </div>
</template>

<script setup>
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
// storeTorefs 保持数据的响应式
const {count} = storeToRefs(useStore())
</script>

