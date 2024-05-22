import './App.css'
import BarAddToDo from './components/BarAddToDo'
import Task from './components/Task'

function App() {

  return (
    <div className='container text-center hero'>
      <BarAddToDo />
      <ul className='list-group list-tasks'>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
      </ul>
    </div>
  )
}

export default App
