import React, { useState } from 'react';
import playerlow from '../../../assets/playerLow.png'
import playerMiddle from '../../../assets/playerMiddle.png'
import playerHigh from '../../../assets/playerHigh.png'
import { ICharacteristic } from '../../../services/config';
import { ISavePlayer } from '../../../services/ImportExport';


export interface IPlayerAvatarProps {
  username: string
  handleChangeUsername: (newName: string) => void

  setIsNameEditing: React.Dispatch<React.SetStateAction<boolean>>
  mutableCharacteristics: ICharacteristic[]
  savePlayer: (save?: ISavePlayer) => void
  handleExport: () => void 
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void


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
  const invokeExport = () => {
    let exportInput: HTMLElement | null = document.getElementById('export-input');

    if (exportInput) {
      exportInput.click()
    }
  }
  const invokeSave = () => {
    props.savePlayer();
  }
  
  return (
    <div className='half-container avatar'>
      <div className='avatar-top'>
        <button id='save-btn' className='btn small transp' onClick={invokeSave} title='Сохранить персонажа'>
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
        <button id='save-btn' className='btn small transp' onClick={props.handleExport} title='Выгрузить персонажа'>
          <i className="fa-solid fa-file-download"></i>
        </button>
        <button id='save-btn' className='btn small transp' onClick={invokeExport} title='Загрузить персонажа'>
          <input id="export-input" type="file" style={{ display: 'none' }} onChange={props.handleFileUpload}/>
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
