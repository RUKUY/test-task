import React, { useState } from 'react';
import { PlayerAvatar } from './Player/PlayerMenu';
import { useAbilities } from '../services/Abilities/Abilities';
import { ILoadCharacteristics, useCharacteristics } from '../services/Characteristics';
import PlayerMenuRightSide from './Player/PlayerMenuRightSide';
import { PlayerChangeNameForm } from './Player/PlayerChangeNameForm';
import { IAbility } from '../services/Abilities/config';

interface IPlayerCardProps {
  username: string
  handleChangeUsername: (newName: string) => void
}

interface ISavePlayer {
  username: string
  characteristics: ILoadCharacteristics,
  abilities: IAbility[],
}

const PlayerCard = (props : IPlayerCardProps) => { 
  const [isNameEditing, setIsNameEditing] = useState(false)
  const [isLoad, setIsLoad] = useState(false)
  
  const { 
    mutableCharacteristics, 
    immutableCharacteristics, 
    upMutableCharacteristic,
    downMutableCharacteristic,
    takeDamage,
    loadCharacteristics
  } = useCharacteristics()
  const {
    abilities, 
    castAbility,
    loadAbilities,
  } = useAbilities()

  const savePlayer = (): void => {
    const dataToSave: ISavePlayer = {
      username: props.username,
      characteristics: [mutableCharacteristics, immutableCharacteristics],
      abilities: abilities
    }
    localStorage.setItem(`last`, JSON.stringify(dataToSave));
    alert('Персонаж успешно сохранен!')
  }
  const loadPlayer = (): void => {
    const loadedData : ISavePlayer = JSON.parse(localStorage.getItem('last')!)
    
    if (!loadedData) {
      alert('Предыдущее сохранение отсутствует')
      return;
    }

    props.handleChangeUsername(loadedData.username);
    loadCharacteristics(loadedData.characteristics);
    loadAbilities(loadedData.abilities);
  }

  return (
    <>
      {
        isNameEditing ? (
          <PlayerChangeNameForm
            handleChangeUsername={props.handleChangeUsername}
            setIsNameEditing={setIsNameEditing}
          />
        ) : (
          <div className='content-containter cool-shadow'> 
            <PlayerAvatar
              username={ props.username } 
              handleChangeUsername={props.handleChangeUsername}
              setIsNameEditing={setIsNameEditing}
              mutableCharacteristics={mutableCharacteristics} 
              savePlayer={savePlayer}
              loadPlayer={loadPlayer}
            />
            <PlayerMenuRightSide 
              mutableCharacteristics={mutableCharacteristics} 
              immutableCharacteristics={immutableCharacteristics}
              upMutableCharacteristic={upMutableCharacteristic}
              downMutableCharacteristic={downMutableCharacteristic}
              abilities={abilities}
              castAbility={castAbility}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '200px',
                height: '60px',
                position: 'fixed',
                bottom: '0',
                backgroundColor: 'red',
              }}
            >
              <button className='btn' onClick={() => takeDamage(1)}>Ударить</button>
            </div>

          </div>
        )
      }
      

      
    </>
  );
}

export default PlayerCard;
