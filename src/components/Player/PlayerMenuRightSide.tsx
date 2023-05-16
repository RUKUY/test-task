import React, { useState } from 'react';
import { PlayerAbilities, PlayerCharacteristics } from './PlayerMenu';
import { ICharacteristic } from '../../services/config';
import { IAbility } from '../../services/Abilities/config';

interface IPlayerMenuRightSideProps {
    mutableCharacteristics: ICharacteristic[], 
    upMutableCharacteristic: (id: number) => void
    downMutableCharacteristic: (id: number) => void
    
    immutableCharacteristics: ICharacteristic[],
    
    abilities: IAbility[]
    castAbility: (id: number, characteristics: ICharacteristic[]) => void
}

const PlayerMenuRightSide = (props : IPlayerMenuRightSideProps) => { 

  return (
    <div className='half-container abilities characteristics'>
      
      <div className='label-container'>
        <span className='label'>Характеристики</span>
      </div>
      <PlayerCharacteristics 
        mutableCharacteristics={props.mutableCharacteristics} 
        immutableCharacteristics={props.immutableCharacteristics}
        upMutableCharacteristic={props.upMutableCharacteristic}
        downMutableCharacteristic={props.downMutableCharacteristic}
      /> 

      <hr></hr>

      <div className='label-container'>
        <span className='label'>
          Способности
          <div id='info-holder' title='Кликните по способности для прокачки'><i className="fa-solid fa-info "></i></div>
        </span>
      </div>
      <PlayerAbilities
        abilities={props.abilities}
        castAbility={props.castAbility}
        characteristics={props.mutableCharacteristics}
      />

    </div>
  );
}

export default PlayerMenuRightSide;
