import React, { useState } from 'react';
import { PlayerAvatar, PlayerAbilities, PlayerCharacteristics } from './Player/PlayerMenu';
import { ICharacteristic, ICharacteristicWithSubs } from '../services/config';
import { IAbility } from '../services/Abilities/config';
import { useAbilities } from '../services/Abilities/Abilities';
import { useCharacteristics } from '../services/Characteristics';
import PlayerMenuRightSide from './Player/PlayerMenuRightSide';

interface IPlayerCardProps {
  username: string
  handleChangeUsername: (newName: string) => void
  setIsNameEditing: React.Dispatch<React.SetStateAction<boolean>>
}

const PlayerCard = (props : IPlayerCardProps) => { 
  const { 
    mutableCharacteristics, 
    immutableCharacteristics, 
    upMutableCharacteristic,
    downMutableCharacteristic
  } = useCharacteristics()
  const {
    abilities, 
    castAbility
  } = useAbilities()

  return (
    <div className='content-containter cool-shadow'>
      <PlayerAvatar
        username={ props.username } 
        handleChangeUsername={props.handleChangeUsername}
        setIsNameEditing={props.setIsNameEditing}
      />
      <PlayerMenuRightSide 
        mutableCharacteristics={mutableCharacteristics} 
        immutableCharacteristics={immutableCharacteristics}
        upMutableCharacteristic={upMutableCharacteristic}
        downMutableCharacteristic={downMutableCharacteristic}
        abilities={abilities}
        castAbility={castAbility}
      />
    </div>
  );
}

export default PlayerCard;
