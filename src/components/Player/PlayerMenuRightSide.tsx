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

const enum EnumRightMenu {
  Characteristics,
  Abilities,
}

const PlayerMenuRightSide = (props : IPlayerMenuRightSideProps) => { 
  const [rightMenu, setRightMenu] = useState(EnumRightMenu.Characteristics)

  return (
    <div className={'half-container ' + ((rightMenu) ? 'abilities' : 'characteristics')}>
      <div className='label-container'>
        <span className='label'>Характеристики</span>
      </div>

      <PlayerCharacteristics 
        mutableCharacteristics={props.mutableCharacteristics} 
        immutableCharacteristics={props.immutableCharacteristics}
        upMutableCharacteristic={props.upMutableCharacteristic}
        downMutableCharacteristic={props.downMutableCharacteristic}
      /> 

      <hr style={{backgroundColor: 'grey', width: '100%', }}></hr>

      <div className='label-container'>
        <span className='label'>Способности</span>
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
