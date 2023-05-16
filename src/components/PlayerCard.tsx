import React, { useState } from 'react';
import { PlayerAvatar } from './Player/PlayerMenu';
import { useAbilities } from '../services/Abilities/Abilities';
import { ILoadCharacteristics, useCharacteristics } from '../services/Characteristics';
import PlayerMenuRightSide from './Player/PlayerMenuRightSide';
import { PlayerChangeNameForm } from './Player/PlayerChangeNameForm';
import { IAbility } from '../services/Abilities/config';
import { PlayerLoadForm } from './Player/PlayerLoadForm';

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
  const [isNameEditing, setIsNameEditing] = useState(true)
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
    localStorage.setItem(`player ${props.username}`, JSON.stringify(dataToSave));
    alert('Персонаж успешно сохранен!')
  }
  const loadPlayer = (name : string): void => {
    const loadedData : ISavePlayer = JSON.parse(localStorage.getItem(`player ${name}`)!)
    
    if (!loadedData) {
      alert('Персонаж с таким именем отсутствует!')
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
        ) : (isLoad) ? (
          <PlayerLoadForm 
            setIsLoad={setIsLoad}
            loadPlayer={loadPlayer}
          />
        ) : (
          <div className='content-containter cool-shadow'> 
            <PlayerAvatar
              username={ props.username } 
              handleChangeUsername={props.handleChangeUsername}
              setIsNameEditing={setIsNameEditing}
              mutableCharacteristics={mutableCharacteristics} 
              savePlayer={savePlayer}
              setIsLoad={setIsLoad}
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
