import { useState } from 'react';
import '../styleSheets/Filter.css'
import { TagsFilter } from '../types';

interface Props {
    filterTasks: (tag: TagsFilter) => void
}

const Filter: React.FC<Props> = ({filterTasks}) => {

    const [filter, setFilter] = useState<TagsFilter>('All');


  return (
    <section className="filter">
      <select className="form-select" aria-label="Default select example" onChange={evt => setFilter(evt.target.value as TagsFilter)}>
        <option value="All">All</option>
        <option value="Important">Important</option>
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Proyects">Proyects</option>
        <option value="Favors">Favors</option>
      </select>
      <button className="btn btn-success" onClick={() => filterTasks(filter)}>Filter</button>
    </section>
  );
};

export default Filter;
