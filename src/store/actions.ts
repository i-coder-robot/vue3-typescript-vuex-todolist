import {ActionContext, ActionTree} from "vuex";
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
   GetTodoItems = 'GET_ITEM_LIST'
}

type ActionArgs=Omit<ActionContext<State, State>, 'commit'> & {
    commit<k extends keyof Mutations>(
        key:k,
        payload: Parameters<Mutations[k]>[1]
    ):ReturnType<Mutations[k]>
}

export type Actions = {
    [ActionTypes.GetTodoItems](context:ActionArgs):void
}

const sleep = (ms:number)=>new Promise(resolve=>setTimeout(resolve,ms))

export const actions: ActionTree<State, State> & Actions = {
    async [ActionTypes.GetTodoItems]({commit}){
        commit(MutationType.SetLoading,true)

        await sleep(1000)
        commit(MutationType.SetLoading,false)
        commit(MutationType.SetItems,[
            {
                id:1,
                todoContext:'创建一个任务吧',
                completed:false
            }
        ])
    }
}