import React, { useState } from 'react'

export const SecondComponent = () => {

  const [ name, setName ] = useState("Inés María");
  const [ isNameChanged, setIsNameChanged ] = useState(false);

  const changeName = (e) => {
    if (isNameChanged) {
      setName("Eduar Jaimes");
    } else {
      setName("Blanca Perdomo");
    }
    setIsNameChanged(!isNameChanged);
  }

  return (
    <div>
      <h3>Componente: SecondComponent</h3>
      <p>{ name }</p>
      <div>
        <button className='button-large' onClick={ changeName }>Cambiar nombre</button>
      </div>
    </div>
  )
}