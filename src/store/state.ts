export type TodoItem = {
    id:number,
    context: string,
    completed: boolean
}

export type State = {
    loading: boolean
    todoList: TodoItem[]
}

export const state:State={
    loading:false,
    todoList:[]
}