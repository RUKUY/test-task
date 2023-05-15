import React, { useState } from 'react';

export interface IPlayerAvatarProps {
  username: string
  handleChangeUsername: (newName: string) => void
  setIsNameEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export const PlayerAvatar = (props: IPlayerAvatarProps) => {
  return (
    <div className='half-container avatar'>

      <div className='label-container'>
        <span style={{ marginRight: '7px'}}>{ props.username }</span>  
        <button 
          type='button' 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
          onClick={() => props.setIsNameEditing(true)} 
        >
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-rename-box" width="20" height="20" viewBox="0 0 24 24">
            <path d="M18,17H10.5L12.5,15H18M6,17V14.5L13.88,6.65C14.07,6.45 14.39,6.45 14.59,6.65L16.35,8.41C16.55,8.61 16.55,8.92 16.35,9.12L8.47,17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
          </svg>
        </button>        
      </div>

      <div className="content">
        <div className="player-avatar">
            
        </div>
      </div>      
    </div>
  );
}
