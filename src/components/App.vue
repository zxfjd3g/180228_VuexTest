<template>
  <div class="container">
    <search></search>
    <xxx-main></xxx-main>
  </div>
</template>

<script>
  import Search from './Search.vue'
  import Main from './Main.vue'
  export default {
    components: {
      Search,
      'xxx-main': Main
    }
  }
</script>

<style>

</style>