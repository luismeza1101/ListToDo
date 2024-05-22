import '../styleSheets/BarAddToDo.css'

const BarAddToDo = () => {
  return (
    <section className='entrance'>
        <h1><span className="badge text-bg-secondary">LIST-TO-DO</span></h1>
        <div className='data'> 
          <input type="text" placeholder="Write one task" className='data__input'/>
          <button className='data__btn btn btn-primary'>Add</button>
        </div>
    </section>
  )
}

export default BarAddToDo
