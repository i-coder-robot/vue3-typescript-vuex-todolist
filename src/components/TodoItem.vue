<template>
  <div
      class="flex items-center bg-white rounded-md shadow-md m-2 p-1 border-4"
      :class="completed?'border-green-500' : 'border-white'"
  >
    <div class="flex-shrink-0 m-1 ml-3 align-middle">
      <input
          type="checkbox"
             :checked="completed"
             @change="toggleCompletion()"
      />
    </div>
    <div class="ml-6">
      <h4 class="text-xl text-gray-900 leading-tight">{{ todo }}</h4>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useStore} from '@/store'
import { MutationType } from '@/store/mutations'

export default defineComponent({
  name: "TodoItem",
  props: {
    id: {type:Number,required:true},
    context:{type:String,required: true},
    completed: {type:Boolean,required:true}
  },
  setup(props){
    const store = useStore()
    const toggleCompletion = ()=>{
      store.commit(MutationType.CompleteItem,{
        id:props.id,
        completed: !props.completed
      })
    }

    return {
      toggleCompletion
    }
  }

})
</script>

<style scoped>

</style>