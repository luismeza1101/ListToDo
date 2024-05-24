import { Task } from "./types"

export const initialState : {listTasks : Task[]} = {
    listTasks: []
}

type Action = 
    |{type: 'add'; payload: Task}
    |{type: 'remove'; payload: {id: string}}
    |{type: 'editable'; payload: {id: string}}
    |{type: 'updateTask'; payload: {id: string, info: string}}

export const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case 'add':
            return {listTasks: [...state.listTasks, action.payload]};
        case 'remove':
            const newListTask = state.listTasks.filter(task => task.id !== action.payload.id)
            return {listTasks : [...newListTask]};
        case 'editable':
            return {listTasks : state.listTasks.map(task => task.id == action.payload.id ? {...task, edit: !task.edit} : task )};        
        case 'updateTask':
            const newListTasks = state.listTasks.map(task => task.id == action.payload.id ? {...task, info: action.payload.info, edit: !task.edit} : task)
            return {listTasks : [...newListTasks]}
        default:
            return state
    }
}   