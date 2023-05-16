import React, { useState } from 'react';

export interface IPlayerLoadFormProps {
  loadPlayer: (name: string) => void 
  setIsLoad: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerLoadForm = (props: IPlayerLoadFormProps) => {
  const [newName, setNewName] = useState('')

  const handleClickApproveNewNameBtn = () => {
    if (newName.length !== 0) {
      props.loadPlayer(newName);
    }
    props.setIsLoad(false)
    setNewName('')
  }

  return (
    <form className='change-name-form cool-shadow' onSubmit={handleClickApproveNewNameBtn}>  
      <p className='label small'>Введите имя:</p>  

      <div className='content'>
        <input type="text" 
          value={newName}
          onChange={event => setNewName(event.target.value)}
        />
      </div>
      
      <div className='btn-container'>
        <button type="button"
          className='btn close'
          onClick={() => props.setIsLoad(false)}
        >
          Закрыть
        </button>
        
        <button type="submit" className='btn submit'>Загрузить</button>
      </div>  
    </form>
  );
}
