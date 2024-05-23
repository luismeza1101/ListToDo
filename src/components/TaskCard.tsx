import { FiXCircle, FiEdit } from "react-icons/fi";
import "../styleSheets/Task.css";
import Tag from "./Tag";
import { Tags } from "../types";

interface Props {
  infoTask : string
  infoTag : Tags
  infoID : string
  removeTask : (id:string) => void
}

const TaskCard: React.FC<Props> = ({infoTask, infoTag, removeTask, infoID}) => {
  return (
    <section className="task">
      <p className="task__text">{infoTask}</p>
      <div className="buttons">
        <Tag infoTag={infoTag}/>
        <button className="btn btn-info"><FiEdit /></button>
        <button className="btn btn-danger" onClick={() => removeTask(infoID)}><FiXCircle /></button>
      </div>
    </section>
  );
};

export default TaskCard;
