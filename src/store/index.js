import { defineStore } from 'pinia'
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
  state: () => ({
    count: 1,
  }),

  getters: {
    gettersCount: (state) => state.count + 20,

    otherGetters() {
      return this.gettersCount + 100
    },
  },

  actions: {
    increment(string) {
      //   模块内的参数直接用this 就可以取到
      //   console.log(this.state)
      //   console.log(string, this.count, this.gettersCount, this.otherGetters)
    },
  },
})
