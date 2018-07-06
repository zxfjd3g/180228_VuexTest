<template>
  <div>
    <p>clicked: {{$store.state.count}} times, count is {{$store.getters.evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {

    computed: {
      evenOrOdd () {
        return this.count%2===0 ? '偶数' : '奇数'
      }
    },

    methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },
    }
  }
</script>

<style>

</style>