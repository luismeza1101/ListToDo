import { FiXCircle, FiEdit } from "react-icons/fi";
import "../styleSheets/Task.css";
import Tag from "./Tag";
import { Tags } from "../types";
import { useEffect, useRef, useState } from "react";

interface Props {
  infoTask : string
  infoTag : Tags
  infoID : string
  infoEdit: boolean
  removeTask : (id: string) => void
  editTask : (id: string) => void
  updateTask : (id: string, info: string) => void
}

const TaskCard: React.FC<Props> = ({infoTask, infoTag, removeTask, infoID, editTask, infoEdit, updateTask}) => {
  
  const inputChange = useRef<HTMLInputElement>(null);
  const [newInfo, setNewInfo] = useState(infoTask)
  
  useEffect(() => {
    if(infoEdit && inputChange.current){
      inputChange.current.focus();
    }
  },[infoEdit])

  const handleInfo = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setNewInfo(evt.target.value)
  }

  return (
    <section className="task">
      {infoEdit ? <input className='form-control form-control-sm'type="text" defaultValue={infoTask} ref={inputChange} onChange={handleInfo}/> : <p className="task__text">{infoTask}</p>}
      <div className="buttons">
        <Tag infoTag={infoTag}/>
        {infoEdit ? <button className="btn btn-info update" onClick={() => updateTask(infoID, newInfo)}>Update</button> : <button className="btn btn-info" onClick={() => editTask(infoID)}><FiEdit/></button>}
        <button className="btn btn-danger" onClick={() => removeTask(infoID)}><FiXCircle /></button>
      </div>
    </section>
  );
};

export default TaskCard;
