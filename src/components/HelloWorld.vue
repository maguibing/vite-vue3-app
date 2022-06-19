<template>
  <div id="app">
    <input type="text" v-model='count' name="" id="">
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <h1>{{toggle+''}}</h1>
    <son ref="son" :goal="goal" @enlargeText="count++"></son>
    <button @click="(e) => increment('string',e)" :class="classComputed">count:{{count}}</button>
    <global-components></global-components>
    <h3>插槽练习</h3>
    <Slot>
        <template v-slot:default="{title}">
            <h2>默认作用域插槽内容{{title}}</h2>
            <h2>具名插槽作用域内容</h2>
        </template>
        <template #main='{message}'>
            <h1>main具名插槽的内容{{message}}</h1>
        </template>
    </Slot>
    <!-- 自定义指令 -->
    <directive></directive>
    <br>
    <!-- pinia 的使用 -->
    <pinia></pinia>
    <br>
    <router-link :to='`/list`'>这是一个路由按钮</router-link>
    <router-link :to='`/user/${1111}`'>这是一个路由按钮</router-link>
    <router-link :to='`/user/${2222}`'>这是一个路由按钮</router-link>
    <router-link :to='`/user/${3333}`'>这是一个路由按钮</router-link>
    <router-link :to='`/user/${4444}`'>这是一个路由按钮</router-link>
    <router-link :to='`/user/${5555}`'>这是一个路由按钮</router-link>
  </div>
</template>
<script>
export default {name:"HelloWorld"}
</script>
<script setup>
import { ref, computed, onMounted, nextTick, watch, reactive, provide } from 'vue'
import { useRoute,onBeforeRouteUpdate } from 'vue-router'
import Son from './Son.vue'
import Slot from './Slot.vue'
import Directive from './Directive.vue'
import Pinia from './Pinia.vue'
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

const route = useRoute()
console.log(route,'route!!!')

// 监听简单数据类型 复杂的数据类型
watch(() => goal.name, (n, o) => {
  if (n) {
    console.log(n)
  }
})

// 依赖注入
// provide("goal",goal)

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