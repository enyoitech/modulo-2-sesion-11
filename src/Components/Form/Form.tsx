import React, {FC, FormEvent} from 'react'

interface IProps{
  createTask: Function
}
export const Form:FC<IProps> = ({createTask}) => {

  const capturaData = (event: FormEvent<HTMLFormElement>) =>{

    event.preventDefault();
    const {name, description} = event.target as typeof event.target & {
      name: {value: string},
      description: {value: string}
    }

    createTask(name.value, description.value);
  }

  return (
    <>
      <form action="" onSubmit={(event)=> capturaData(event) }>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre Tarea</label>
          <input type="text"
            name='name'
            className="form-control"
            id="name"
            placeholder="Ingrese tarea" />
        </div>
        <div className="mb-3">
          <label htmlFor="description"
            className="form-label">Descripcion</label>
          <textarea className="form-control"
            name='description'
            id="description" rows={3}></textarea>
        </div>
        <input type="submit" value='Crear'/>
      </form>

    </>
  )
}
