export type TodoItem = {
    id:number,
    task: string,
    completed: boolean
}

export type State = {
    loading: boolean
    todolist: TodoItem[]
}

export const state:State={
    loading:false,
    todolist:[]
}