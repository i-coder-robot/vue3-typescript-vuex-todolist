<template>
  <TodoItem v-for="item in items" :key="item" v-bind="item"/>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useStore} from '@/store'
import TodoItem from "./TodoItem.vue"

export default defineComponent({
  name: "TodoList",
  components: {TodoItem},
  setup(){
    const store = useStore()
    const items = computed(()=store.state.items)
    return {items}
  }
})
</script>

<style scoped>

</style>