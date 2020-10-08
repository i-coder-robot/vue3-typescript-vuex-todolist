<template>
  <ul>
    <li v-for="item in todoList" :key="item">{{ item.id }}</li>
  </ul>
  <TodoItem v-for="item in todoList" :key="item" v-bind="item"/>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useStore} from '@/store'
import TodoItem from "./TodoItem.vue"

export default defineComponent({
  name: "TodoList",
  components: {TodoItem},
  setup() {
    const store = useStore()
    const todoList = computed(() => store.state.todoList)
    return {todoList}
  }
})
</script>

<style scoped>

</style>