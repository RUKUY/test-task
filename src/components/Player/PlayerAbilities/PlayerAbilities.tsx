import React from 'react';
import { IAbility } from '../../../services/Abilities/config';
import PlayerAbilitiesItems from './PlayerAbilitiesItems';
import { ICharacteristic } from '../../../services/config';

export interface IPlayerAbilitiesProps {
  abilities: IAbility[]
  castAbility: (id: number, characteristics: ICharacteristic[]) => void

  characteristics: ICharacteristic[] 
}

export const PlayerAbilities = (props: IPlayerAbilitiesProps) => {
  console.log(props.abilities);

  return (
      <div className='content scrolled'>

        <PlayerAbilitiesItems 
          abilities={props.abilities}
          castAbility={props.castAbility}
          characteristics={props.characteristics}
        />
      </div>
  );
}
