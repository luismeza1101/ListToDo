import { useRef, useState } from "react";
import "../styleSheets/BarAddToDo.css";

interface Props {
  addTask: (infoTask: string, infoTag: string) => void;
}

const BarAddToDo: React.FC<Props> = ({ addTask }) => {
  const infoTask = useRef<HTMLInputElement>(null);
  const [valueTag, setValueTag] = useState('');

  const handleTask = () => {
    if (infoTask.current?.value == "") {
      alert("Debe completar los espacios en blanco");
    } else {
      addTask(infoTask.current!.value, valueTag);
      infoTask.current!.value = "";
      setValueTag('Select the tag')
    }
  };

  return (
    <section className="entrance">
      <h1>
        <span className="badge text-bg-secondary">LIST-TO-DO</span>
      </h1>
      <div className="data">
        <input
          type="text"
          placeholder="Write one task"
          className="data__input"
          ref={infoTask}
        />
        <div className="btn-group dropend">
          <select className="form-select" aria-label="Default select example" onChange={(e) => setValueTag(e.target.value)}>
            <option selected>Select the tag</option>
            <option value="Importan">Importan</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal Projects">Personal Projects</option>
            <option value="Favors">Favors</option>
          </select>
        </div>
        <button
          className="data__btn btn btn-primary"
          onClick={() => handleTask()}>
          Add
        </button>
      </div>
    </section>
  );
};

export default BarAddToDo;
