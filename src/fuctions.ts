import { TagsFilter, Task } from "./types"

interface State {
    listTasks: Task[],
    filterTag: TagsFilter
}

export const initialState : State = {
    listTasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
    filterTag: 'All'
}

type Action = 
    |{type: 'add'; payload: Task}
    |{type: 'remove'; payload: {id: string}}
    |{type: 'editable'; payload: {id: string}}
    |{type: 'updateTask'; payload: {id: string, info: string}}
    |{type: 'filter'; payload: {tag: TagsFilter}} 

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                listTasks: [...state.listTasks, action.payload],
            };
        case 'remove':
            const newListTask = state.listTasks.filter(task => task.id !== action.payload.id)
            return {
                ...state,
                listTasks : newListTask,
            };
        case 'editable':
            return {
                ...state,
                listTasks : state.listTasks.map(task => task.id == action.payload.id ? {...task, edit: !task.edit} : task ),
            };        
        case 'updateTask':
            const newListTasks = state.listTasks.map(task => task.id == action.payload.id ? {...task, info: action.payload.info, edit: !task.edit} : task)
            return {
                ...state,
                listTasks : newListTasks,
            }
        case 'filter':
            return{
                ...state,
                filterTag: action.payload.tag,
            }
        default:
            return state
    }
}   