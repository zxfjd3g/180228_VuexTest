<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todos-header/>
      <List/>
      <todos-footer/>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import List from './List.vue'
  import Footer from './Footer.vue'

  export default {
    mounted() {
      this.$store.dispatch('readTodos')
    },

    components: {
      'todos-header': Header,
      List,
      'todos-footer': Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>