<template>
  <div class="deepson">
    <hr>
    {{target}}
  </div>
</template>

<script setup>
// inject 依赖注入
import { inject } from 'vue'
const target = inject('goal','这是inject的默认值')
</script>