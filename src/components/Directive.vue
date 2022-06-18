<template>
  <div class="directive">
    <h3>自定义指令</h3>
    <input type="text" v-focus>
  </div>
</template>

<script setup>
const vFocus = { 
    mounted: (el) => { el.focus()}
}
</script>

