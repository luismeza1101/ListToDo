import { useReducer } from 'react'
import './App.css'
import BarAddToDo from './components/BarAddToDo'
import TaskCard from './components/TaskCard'
import { initialState, reducer } from './fuctions'
import { Tags, Task } from './types'


function App() {

  const [tasksState, dispatch] = useReducer(reducer, initialState);

  const addTask = (infoTask: string, infoTag: Tags) => {
    const newTask: Task = {
      info: infoTask,
      id: crypto.randomUUID(),
      tag: infoTag,
      edit: false
    };
    dispatch({type: 'add', payload: newTask})
  }

  const removeTask = (id: string) => {
    dispatch({type: 'remove', payload: {id}})
  }

  const editTask = (id: string) => {
    dispatch({type: 'editable', payload: {id}})
  }

  return (
    <div className='container text-center hero'>
      <BarAddToDo addTask={addTask}/>
      <ul className='list-group list-tasks'>
          {tasksState.listTasks.map(taskUpdate => (
            <TaskCard key={taskUpdate.id} infoTask={taskUpdate.info} infoTag={taskUpdate.tag} removeTask={removeTask} infoID={taskUpdate.id}/>
          ))}
      </ul>
    </div>
  )
}

export default App
