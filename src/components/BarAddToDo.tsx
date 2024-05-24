import { useRef, useState } from "react";
import "../styleSheets/BarAddToDo.css";
import { Tags } from "../types";

interface Props {
  addTask: (infoTask: string, infoTag: Tags) => void;
}

const BarAddToDo: React.FC<Props> = ({ addTask }) => {
  const infoTask = useRef<HTMLInputElement>(null);
  const [valueTag, setValueTag] = useState<Tags>('Select the tag');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Tags;
    setValueTag(value);
  };
  
  const handleTask = () => {
    if ((infoTask.current?.value == "") || (valueTag == 'Select the tag')) {
      alert("Debe completar los espacios en blanco");
    } else {
      addTask(infoTask.current!.value, valueTag);
      infoTask.current!.value = "";
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
          <select className="form-select" aria-label="Default select example" onChange={handleChange}>
            <option selected disabled>Select the tag</option>
            <option value="Importan">Importan</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Proyects">Proyects</option>
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
