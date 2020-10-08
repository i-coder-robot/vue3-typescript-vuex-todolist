<template>
  <TodoItem v-for="item in todolist" :key="item" v-bind="item"/>
</template>

<script lang="ts">
import {defineComponent, computed,onMounted} from 'vue'
import {useStore} from '@/store'
import TodoItem from "./TodoItem.vue"

export default defineComponent({
  name: "TodoList",
  components: {TodoItem},
  setup() {
    const store = useStore()
    const todolist = computed(() => {
      console.log('computed---todolist')
      console.log(store.state.todolist)
      return store.state.todolist
    })
    return {todolist}
  }
})
</script>

<style scoped>

</style>