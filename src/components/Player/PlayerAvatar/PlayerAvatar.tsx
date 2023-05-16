import React, { useState } from 'react';
import playerlow from '../../../assets/playerLow.png'
import playerMiddle from '../../../assets/playerMiddle.png'
import playerHigh from '../../../assets/playerHigh.png'
import { ICharacteristic } from '../../../services/config';


export interface IPlayerAvatarProps {
  username: string
  handleChangeUsername: (newName: string) => void

  setIsNameEditing: React.Dispatch<React.SetStateAction<boolean>>
  mutableCharacteristics: ICharacteristic[]
  savePlayer: () => void
  loadPlayer: () => void
}

export const PlayerAvatar = (props: IPlayerAvatarProps) => {
  
  const renderUserAvatar = () : string => {
    if (props.mutableCharacteristics[0].state < 6 ) {
      return playerlow;
    }
    else if (props.mutableCharacteristics[0].state < 15) {
      return playerMiddle;
    }
    return playerHigh;
  }
  
  return (
    <div className='half-container avatar'>
      <div className='avatar-top'>
        <button id='save-btn' className='btn small transp' onClick={props.savePlayer} title='Сохранить персонажа'>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button id='save-btn' className='btn small transp' onClick={props.loadPlayer} title='Загрузить персонажа'>
          <i className="fa-solid fa-file-import"></i>
        </button>
      </div>


      <div className="content">
        <div className="player-avatar">
          <img src={ renderUserAvatar() } />
        </div>
      </div>   

      <div className='label-container grow'>
        <span>{ props.username }</span>  
        <button 
          type='button' 
          className='btn small transp'
          onClick={() => props.setIsNameEditing(true)} 
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>        
      </div>   
    </div>
  );
}
