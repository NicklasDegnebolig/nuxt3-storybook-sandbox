export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount() {
      return this.count
    },
  },
  actions: {
    increment() {
      console.log('increment')
      this.count++
    },
    decrement() {
      console.log('decrement')
      this.count--
    },
  },
})
