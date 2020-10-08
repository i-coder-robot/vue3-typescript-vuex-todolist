<script lang="ts">
import {defineComponent,computed,onMounted} from 'vue'
import AddTodoItem from './components/AddTodoItem.vue'
import TodoList from './components/TodoItem.vue'
import {useStore} from './store'
import {ActionTypes} from './store/actions'

export default defineComponent({
  components: {TodoList,AddTodoItem},
  setup(){
    const store = useStore()
    const loading = computed(()=>store.state.loading)
    onMounted(()=>store.dispatch(ActionTypes.GetTodoItems))

    const completedCount = computed(()=>store.getters.completedCount)
    const totalCount = computed(()=>store.getters.totalCount)

    return {loading,completedCount,totalCount}
  }

})

</script>

<template>
  <div id="nav">
    <h1>
      TodoList
    </h1>
    <h2>
      采用 Vue3.0 + Typescript + Vuex 4
    </h2>
    <div v-if="loading">
      <h3>Loading...</h3>
    </div>
    <div v-else>
      <p>
        {{completedCount}} / {{totalCount}} 完成
      </p>
      <AddTodoItem />
      <TodoList />
    </div>
  </div>
  <router-view/>
</template>
