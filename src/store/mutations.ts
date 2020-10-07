import {State, TodoItem} from "./state";
import {MutationTree} from "vuex";

export enum MutationType {
    CreateItem = 'CREATE_ITEM',
    SetItems = 'SET_ITEMS',
    CompleteItem = 'COMPLETE_ITEM',
    SetLoading = 'SET_LOADING'
}

export type Mutations = {
    [MutationType.CreateItem](state: State, item: TodoItem): void
    [MutationType.SetItems](state:State,items:TodoItem[]): void
    [MutationType.CompleteItem](state:State,item:Partial<TodoItem> & {id:number}): void
    [MutationType.SetLoading](state:State,value:boolean):void
}

export const mutations:MutationTree<State> & Mutations = {
    [MutationType.CreateItem](state,item){
        state.todoList.unshift(item)
    },
    [MutationType.SetItems](state,items){
        state.todoList=items
    },
    [MutationType.CompleteItem](state,newItem){
        const item = state.todoList.findIndex(s=>s.id===newItem.id)
        if (item===-1) return
        state.todoList[item] = {...state.todoList[item],...newItem}
    },
    [MutationType.SetLoading](state,value){
        state.loading = value
    }
}