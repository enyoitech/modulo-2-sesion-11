import { useState, useEffect } from 'react'
import { Form } from './Components/Form/Form'
import { Navbar } from './Components/Navbar/Navbar';
import { TaskItem } from './Components/Task/TaskItem';
import logo from './logo.svg'


interface data{
  name: string,
  description: string,
  id: number,
  state: boolean
}
function App() {

  const [taskList, setTaskList] = useState(Array<data>)

  useEffect(() => {
       setTaskList(misTareasLista)
  },[])
  
  const misTareasLista = [
    {
      id: 1,
      name: 'Lavar platos',
      description: ' lavar bien los platos en la noche',
      state: false
    },
    {
      id: 2,
      name: 'Lavar ropa',
      description: ' lavar bien los ropa  en la noche',
      state: true
    },
    {
      id: 3,
      name: 'ir al supermercado',
      description: 'Comprar Todo el mercado',
      state: false
    },

  ]

  const updateList = (id: number, state: boolean) => {
    console.log(id, state);
    taskList.map( (element) => element.id === id ? element.state =state: element);
    console.log(taskList);
  }

  const createTask = (name: string, description: string) =>{

    // setTaskList(
    //   [...taskList, {name: name, description: description, state: false, id: 4}]
    // );

    setTaskList(
      [...taskList, {name, description, state: false, id: 4}]
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
           <Navbar
           countTask={5}
           /> 
          </div>
        <div className="col-6">
          <Form
          createTask={createTask}
          />
        </div>
        <div className="col-6">
    <ul className="list-group">
          {
            taskList.map((taskItemElemt)=> {
              return( 
                <TaskItem 
                key={taskItemElemt.id}
                
                name = {taskItemElemt.name}
                description={taskItemElemt.description}
                id={taskItemElemt.id}
                state={taskItemElemt.state}
                updateList={updateList}
                /> 
                )
              } )
            }
            </ul>
        
        </div>
      </div>
    </div>
  )
}

export default App
