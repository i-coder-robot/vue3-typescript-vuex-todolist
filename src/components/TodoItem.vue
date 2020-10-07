<template>
  <div :class="completed?'border-green-500' : 'border-white'">
    <div>
      <input type="checkbox"
             :checked="completed"
             @change="toggleCompletion()"
      />
    </div>
    <div>
      <h4>{{ todo }}</h4>
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