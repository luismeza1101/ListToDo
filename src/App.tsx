import { useReducer } from "react";
import "./App.css";
import BarAddToDo from "./components/BarAddToDo";
import TaskCard from "./components/TaskCard";
import { initialState, reducer } from "./fuctions";
import { Tags, TagsFilter, Task } from "./types";
import Filter from "./components/Filter";

function App() {
  const [tasksState, dispatch] = useReducer(reducer, initialState);

  const addTask = (infoTask: string, infoTag: Tags) => {
    const newTask: Task = {
      info: infoTask,
      id: crypto.randomUUID(),
      tag: infoTag,
      edit: false,
    };
    dispatch({ type: "add", payload: newTask });
  };

  const removeTask = (id: string) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const editTask = (id: string) => {
    dispatch({ type: "editable", payload: { id } });
  };

  const updateTask = (id: string, info: string) => {
    dispatch({ type: "updateTask", payload: { id, info } });
  };

  const filterTasks = (tag: TagsFilter) => {
    dispatch({type:'filter', payload: { tag }})
  }

  return (
    <div className="container text-center hero">
      <BarAddToDo addTask={addTask} />
      <Filter filterTasks={filterTasks}/>
      <ul className="list-group list-tasks">
        <p className="list-tasks__title">Tasks to do :</p>
        {tasksState.listTasks.map((taskUpdate) => (
          <TaskCard
            key={taskUpdate.id}
            infoTask={taskUpdate.info}
            infoTag={taskUpdate.tag}
            infoID={taskUpdate.id}
            infoEdit={taskUpdate.edit}
            editTask={editTask}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
