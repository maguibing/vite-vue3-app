<template>
  <div class="pinia">
    <h1>我要使用pinia了</h1>
    <span>{{count}}</span>---<span>{{computedMsg}}</span>---<span>{{gettersCount}}</span>---<span>{{otherGetters}}</span>
    <br>
    <button @click="increment">累加</button>
    <button @click="store.$reset()">重置</button>
    <button @click="changeMessage">修改</button>
    <button @click="useAction">使用action</button>
  </div>
</template>

<script setup>
import { useStore } from '../store'
import { storeToRefs  } from 'pinia'
import { computed, watch } from 'vue';
// import  Pinia  from 'pinia';
// storeTorefs 保持数据的响应式
const store = useStore()
// 返回的值需要 .value
const { count,gettersCount,otherGetters } = storeToRefs(store)

const computedMsg = computed(() => {
    return count.value+ 10
})

// increment
const increment = () => { 
    // count.value++
    store.$patch((state) => {
        state.count += 20
        state.message = '中文'
        // count: count.value+=20,
        // message:"一段小时"
    })
}

// store.$subscribe((mutation, state) => { 
//     console.log(mutation.type)
//     console.log(mutation.storeId)
//     console.log(mutation.payload)
// })


const changeMessage = () => { 
    // store.$patch({
    //     message:"修改后的值"
    // })
    // 直接赋值一个新对象 （但是貌似好像是添加了两个属性来的）
    store.$state = { counter: 666, name: 'Paimon' }
 
}

const unsubscribe = store.$onAction(
  ({
    name, // action 的名字
    store, // store 实例
    args, // 调用这个 action 的参数
    after, // 在这个 action 执行完毕之后，执行这个函数
    onError, // 在这个 action 抛出异常的时候，执行这个函数
  }) => {
    // 记录开始的时间变量
    const startTime = Date.now()
    // 这将在 `store` 上的操作执行之前触发
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 如果 action 成功并且完全运行后，after 将触发。
    // 它将等待任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回 Promise.reject ，onError 将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// // 手动移除订阅
unsubscribe()


// 使用action
const useAction = () => { 
    store.increment("传递的参数")
}

</script>

