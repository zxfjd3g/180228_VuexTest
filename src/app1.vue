<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">++</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    /*computed: {
      count () {
        return this.$store.state.count
      },
      xxx () {
        return this.$store.state.xxx
      }
      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },*/

    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },

    methods: {
      // ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      ...mapActions({
        increment: 'increment2',
        decrement: 'decrement',
        incrementIfOdd: 'incrementIfOdd',
        incrementAsync: 'incrementAsync',
      })
    }

    /*methods: {
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
    }*/
  }
</script>

<style>

</style>