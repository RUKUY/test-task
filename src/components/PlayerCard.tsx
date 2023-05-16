import React, { useEffect, useState } from 'react';
import { PlayerAvatar } from './Player/PlayerMenu';
import { useAbilities } from '../services/Abilities/Abilities';
import { useCharacteristics } from '../services/Characteristics';
import PlayerMenuRightSide from './Player/PlayerMenuRightSide';
import { PlayerChangeNameForm } from './Player/PlayerChangeNameForm';
import { ISavePlayer, useImportExport } from '../services/ImportExport';

interface IPlayerCardProps {
  username: string
  handleChangeUsername: (newName: string) => void
}




const PlayerCard = (props : IPlayerCardProps) => { 
  const [isNameEditing, setIsNameEditing] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { exportPlayer, importPlayer } = useImportExport()
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


  useEffect(() => {
    let savedPlayer : string | null = localStorage.getItem('savedPlayer') 
    if (!!savedPlayer) {
      loadPlayerFromLocalStorage();
      setIsNameEditing(false);
      setIsLoaded(true);
    }
  }, [])
  

  const savePlayer = (save?: ISavePlayer): void => {
    let dataToSave: ISavePlayer; 
    if (!!save) {
      dataToSave = save 
    }
    else {
      dataToSave = {
        username: props.username,
        characteristics: [mutableCharacteristics, immutableCharacteristics],
        abilities: abilities
      }
    }
    
    localStorage.setItem(`savedPlayer`, JSON.stringify(dataToSave));
    alert('Персонаж успешно сохранен!')
  }

  const loadPlayerFromLocalStorage = (): void => {
    const loadedData : ISavePlayer = JSON.parse(localStorage.getItem(`savedPlayer`)!)
    
    if (!loadedData) {
      alert('Персонаж с таким именем отсутствует!')
      return;
    }

    props.handleChangeUsername(loadedData.username);
    loadCharacteristics(loadedData.characteristics);
    loadAbilities(loadedData.abilities);
  }
  
  const handleExport = () : void => {
    const dataToExport: ISavePlayer = {
      username: props.username,
      characteristics: [mutableCharacteristics, immutableCharacteristics],
      abilities: abilities
    }
    exportPlayer(dataToExport)
  }

  function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const player = importPlayer(file).then(el => {
        if (el) {
          savePlayer(el);
          loadPlayerFromLocalStorage(); 
        }
      });
    }
  }

  return (
    <>
      {
        isNameEditing ? (
          <PlayerChangeNameForm
            handleChangeUsername={props.handleChangeUsername}
            setIsNameEditing={setIsNameEditing}
          />
        ) : (!isLoaded) ? '' : (
          <div className='content-containter cool-shadow'> 
            <PlayerAvatar
              username={ props.username } 
              handleChangeUsername={props.handleChangeUsername}
              setIsNameEditing={setIsNameEditing}
              mutableCharacteristics={mutableCharacteristics} 
              savePlayer={savePlayer}
              handleExport={handleExport}
              handleFileUpload={handleFileUpload}
            />
            <PlayerMenuRightSide 
              mutableCharacteristics={mutableCharacteristics} 
              immutableCharacteristics={immutableCharacteristics}
              upMutableCharacteristic={upMutableCharacteristic}
              downMutableCharacteristic={downMutableCharacteristic}
              abilities={abilities}
              castAbility={castAbility}
            />
            <div className='fixed-panel'>
              <button className='btn' onClick={() => takeDamage(1)}>Ударить</button>
            </div>

          </div>
        )
        
      }
    </>
  );
}

export default PlayerCard;