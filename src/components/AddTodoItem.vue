<template>
  <div>
    <div>
      <form @submit.prevent="addTodoItem">
        <input v-model="todo" type="text"/>
      </form>
    </div>
    <div>
      <button type="submit">
        添加
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import {useStore} from '@/store'
import {TodoItem} from "@/store/state"
import {MutationType} from "@/store/mutations"

export default defineComponent({
  name: "AddTodoItem",
  setup() {
    const todo = ref('')
    const store = useStore()

    const addTodoItem = () =>{
      if (todo.value === ''){
        return
      }
      const item:TodoItem={
        id:Date.now(),
        context:todo.value,
        completed:false
      }
      store.commit(MutationType.CreateItem,item)
      todo.value = ''
    }
    return {
      addTodoItem,
      todo
    }
  }
})
</script>

<style scoped>

</style>