import { FiXCircle, FiEdit } from "react-icons/fi";
import "../styleSheets/Task.css";
import Tag from "./Tag";

const Task = () => {
  return (
    <section className="task">
      <p className="task__text">sndci hbdcnjskxc</p>
      <div className="buttons">
        <Tag />
        <button className="btn btn-info"><FiEdit /></button>
        <button className="btn btn-danger"><FiXCircle /></button>
      </div>
    </section>
  );
};

export default Task;
