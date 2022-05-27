import React, {useState, ChangeEvent, FC } from 'react'


interface IProps{
  name: string,
  description: string,
  id: number,
  state: boolean,
  updateList: Function
}

export const TaskItem: FC<IProps> = ({name, description, id, state, updateList}) => {
  const [seleccion, setSeleccion] = useState<string>(state? 'Ejecutada' : 'Pendiente');

  const changeSelect = (event:  ChangeEvent<HTMLSelectElement>) => {
    // console.log('algo cambios', event);
    // console.log('value', event.target.value);
    // const valueSelected = event.target.value;
    setSeleccion(event.target.value)
    const stateUpdate = (event.target.value === 'Ejecutada' )? true : false;
    updateList(id, stateUpdate )
  }
  return (

    <>
      <li className="list-group-item">{name}</li>
      <li className="list-group-item">{description}</li>
      <li className="list-group-item">{seleccion}</li>
      <li className="list-group-item">
      <select  onChange={(event)=>changeSelect(event)}
        defaultValue={seleccion}
        className="form-select"
         aria-label="Default select example"
      >
        <option value="Ejecutada">Ejecutada</option>
        <option value="Pendiente">Pendiente</option>
      </select>
      </li>

    </>
    
  )
}



