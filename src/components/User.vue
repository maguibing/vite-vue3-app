<template>
  <!-- <div class="user">这是我的路由id{{id}}</div> -->
  <div class="user">这是我的路由id----{{id}}</div>
  <router-view></router-view>
</template>

<script setup>
import { useRoute } from 'vue-router';





const route = useRoute()
const id = route.params.id
// console.log(route.params.id)


</script>
