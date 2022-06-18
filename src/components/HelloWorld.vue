<template>
  <div id="app">
    <input type="text" v-model='count' name="" id="">
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <h1>{{toggle+''}}</h1>
    <son ref="son" :goal="goal" @enlarge-text="count++"></son>
    <button @click="(e) => increment('string',e)" :class="classComputed">count:{{count}}</button>
    <global-components></global-components>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch, reactive } from 'vue'
import Son from './Son.vue'
let count = ref(0)
const son = ref(null)
const flag = ref(true)
const goal = reactive({
  name: "zs"
})
const toggle = ref(false)
const classComputed = computed(() => ({
  active: flag.value
}))

// 监听简单数据类型 复杂的数据类型
watch(() => goal.name, (n, o) => {
  if (n) {
    console.log(n)
  }
})

onMounted(() => {
  nextTick(() => {
    console.log("nextTick")
  })
})

const increment = (e, v) => {
  count.value += 1
  goal.name = 'ls'
  console.log(son.value.list)
  console.log(son.value.title)
}
</script>