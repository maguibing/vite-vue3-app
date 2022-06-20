<template>
  <!-- <div class="user">这是我的路由id{{id}}</div> -->
  <div class="user">这是我的路由id----{{id}}</div>
  <router-view></router-view>
</template>

<script setup>

const props = defineProps({
    id: {
        type: String,
        default:""
    }
})
console.log(props)
</script>
